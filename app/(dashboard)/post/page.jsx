'use client';

import { useState } from 'react';

const AdminPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: '',
    metaTitle: '',
    metaDescription: '',
    isFeatured: false
  });

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Filter for images only
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    // Create previews
    const newPreviews = imageFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));

    setImages(prev => [...prev, ...imageFiles]);
    setImagePreviews(prev => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(imagePreviews[index].preview);
    
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData for file upload
    const submitData = new FormData();
    
    // Append form data
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });
    
    // Append images
    images.forEach(image => {
      submitData.append('images', image);
    });

    // TODO: Implement API call to create/update post
    console.log('Form data:', formData);
    console.log('Images:', images);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Post created successfully!');
      // Reset form
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        category: '',
        tags: '',
        metaTitle: '',
        metaDescription: '',
        isFeatured: false
      });
      setImages([]);
      setImagePreviews([]);
    }, 2000);
  };

  const categories = [
    'Sexual Wellness',
    'Relationship Advice',
    'Product Guides',
    'Health & Safety',
    'Lifestyle',
    'Education'
  ];

  return (

    <div className='dashboard_landing'>
        <div className="">
            <div className="admin-post-form">
            <div className="form-container">
                {/* Header */}
                <div className="form-header">
                <h1 className="form-title">Create New Post</h1>
                <p className="form-subtitle">Add a new article to The Euphoria Journal</p>
                </div>

                <form onSubmit={handleSubmit} className="post-form">
                    {/* Basic Information Card */}
                    <div className="form-card">
                        <h2 className="card-title">Basic Information</h2>
                        
                        {/* Title */}
                        <div className="form-group">
                        <label htmlFor="title" className="form-label">
                            Post Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="Enter a compelling title..."
                        />
                        </div>

                        {/* Excerpt */}
                        <div className="form-group">
                        <label htmlFor="excerpt" className="form-label">
                            Excerpt
                        </label>
                        <textarea
                            id="excerpt"
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows={3}
                            className="form-textarea"
                            placeholder="Brief description of the post (will appear in previews)"
                        />
                        </div>

                        {/* Content */}
                        <div className="form-group">
                        <label htmlFor="content" className="form-label">
                            Content *
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            rows={12}
                            className="form-textarea large"
                            placeholder="Write your post content here..."
                        />
                        </div>
                    </div>

                    {/* Multiple Image Upload Card */}
                    <div className="form-card">
                        <h2 className="card-title">Post Images</h2>
                        
                        <div className="image-upload-section">
                        <div className="file-upload-area">
                            <input
                            type="file"
                            id="image-upload"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className="file-input"
                            />
                            <label htmlFor="image-upload" className="file-upload-label">
                            <div className="upload-icon">📁</div>
                            <div className="upload-text">
                                <p>Click to upload images</p>
                                <span>or drag and drop</span>
                            </div>
                            <p className="upload-hint">PNG, JPG, WEBP up to 10MB each</p>
                            </label>
                        </div>

                        {/* Image Previews */}
                        {imagePreviews.length > 0 && (
                            <div className="image-previews">
                            <h3 className="previews-title">Selected Images ({imagePreviews.length})</h3>
                            <div className="previews-grid">
                                {imagePreviews.map((preview, index) => (
                                <div key={index} className="image-preview-item">
                                    <img 
                                    src={preview.preview} 
                                    alt={`Preview ${index + 1}`}
                                    className="preview-image"
                                    />
                                    <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="remove-image-btn"
                                    >
                                    ×
                                    </button>
                                </div>
                                ))}
                            </div>
                            </div>
                        )}
                        </div>
                    </div>

                    {/* Categorization Card */}
                    <div className="form-card">
                        <h2 className="card-title">Categorization</h2>
                        
                        <div className="form-row">
                        {/* Category */}
                        <div className="form-group">
                            <label htmlFor="category" className="form-label">
                            Category *
                            </label>
                            <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="form-select"
                            >
                            <option value="">Select a category</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                            </select>
                        </div>

                        {/* Tags */}
                        <div className="form-group">
                            <label htmlFor="tags" className="form-label">
                            Tags
                            </label>
                            <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="e.g., wellness, relationships, tips"
                            />
                            <p className="input-hint">Separate tags with commas</p>
                        </div>
                        </div>

                        {/* Featured Post Checkbox */}
                        <div className="checkbox-group">
                        <label className="checkbox-label">
                            <input
                            type="checkbox"
                            name="isFeatured"
                            checked={formData.isFeatured}
                            onChange={handleChange}
                            className="checkbox-input"
                            />
                            <span className="checkbox-custom"></span>
                            Feature this post on homepage
                        </label>
                        </div>
                    </div>

                    {/* SEO Card */}
                    <div className="form-card">
                        <h2 className="card-title">SEO Settings</h2>
                        
                        <div className="form-group">
                        <label htmlFor="metaTitle" className="form-label">
                            Meta Title
                        </label>
                        <input
                            type="text"
                            id="metaTitle"
                            name="metaTitle"
                            value={formData.metaTitle}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="SEO title (optional)"
                        />
                        </div>

                        <div className="form-group">
                        <label htmlFor="metaDescription" className="form-label">
                            Meta Description
                        </label>
                        <textarea
                            id="metaDescription"
                            name="metaDescription"
                            value={formData.metaDescription}
                            onChange={handleChange}
                            rows={3}
                            className="form-textarea"
                            placeholder="SEO description (optional)"
                        />
                        </div>
                    </div>

                    {/* Form Actions */}
                    <div className="form-actions">
                        <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => window.history.back()}
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-primary ${isSubmitting ? 'loading' : ''}`}
                        >
                        {isSubmitting ? 'Creating Post...' : 'Create Post'}
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default AdminPostForm;