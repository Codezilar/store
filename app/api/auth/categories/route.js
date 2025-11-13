import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { Category } from '@/models/Category';
import connectDB from '@/lib/mongodb';
import { authOptions } from '../../auth/[...nextauth]/route';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    // Check if user is authenticated and is admin
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden - Admin access required' }, { status: 403 });
    }

    await connectDB();

    const formData = await request.formData();
    
    const name = formData.get('name');
    const description = formData.get('description');
    const metaTitle = formData.get('metaTitle');
    const metaDescription = formData.get('metaDescription');
    const image = formData.get('image');

    // Validate required fields
    if (!name) {
      return NextResponse.json({ error: 'Category name is required' }, { status: 400 });
    }

    // Check if category already exists
    const existingCategory = await Category.findOne({ 
      $or: [
        { name: name },
        { slug: name.toLowerCase().replace(/\s+/g, '-') }
      ]
    });

    if (existingCategory) {
      return NextResponse.json({ error: 'Category with this name already exists' }, { status: 400 });
    }

    let imageUrl = '';

    // Handle image upload
    if (image && image instanceof File) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create uploads directory if it doesn't exist
      const uploadsDir = path.join(process.cwd(), 'public/uploads/categories');
      try {
        await mkdir(uploadsDir, { recursive: true });
      } catch (error) {
        // Directory already exists
      }

      // Generate unique filename
      const timestamp = Date.now();
      const originalName = image.name;
      const extension = path.extname(originalName);
      const filename = `category-${timestamp}${extension}`;
      const filepath = path.join(uploadsDir, filename);

      // Save file
      await writeFile(filepath, buffer);

      // Set image URL for database
      imageUrl = `/uploads/categories/${filename}`;
    }

    // Create new category
    const category = await Category.create({
      name,
      description,
      metaTitle,
      metaDescription,
      image: imageUrl,
    });

    return NextResponse.json(
      { 
        message: 'Category created successfully', 
        category: {
          id: category._id,
          name: category.name,
          slug: category.slug,
          image: category.image
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Category creation error:', error);
    
    if (error.code === 11000) {
      return NextResponse.json({ error: 'Category with this name already exists' }, { status: 400 });
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET all categories (for listing)
export async function GET() {
  try {
    await connectDB();
    
    const categories = await Category.find({ isActive: true })
      .select('name description image slug')
      .sort({ createdAt: -1 });

    return NextResponse.json({ categories });
  } catch (error) {
    console.error('Categories fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}