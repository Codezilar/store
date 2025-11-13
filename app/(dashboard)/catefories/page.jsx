'use client';

import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    metaTitle: '',
    metaDescription: '',
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview('');
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
    
    // Append image
    if (image) {
      submitData.append('image', image);
    }

    // TODO: Implement API call to create/update category
    console.log('Category data:', formData);
    console.log('Image:', image);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Category created successfully!');
      // Reset form
      setFormData({
        name: '',
        description: '',
        metaTitle: '',
        metaDescription: '',
      });
      setImage(null);
      setImagePreview('');
    }, 2000);
  };

  return (
    <div className='dashboard_landing'>
      <div className="">
        <div className="admin-post-form">
          <div className="form-container">
            {/* Header */}
            <div className="form-header">
              <h1 className="form-title">Create New Category</h1>
              <p className="form-subtitle">Add a new category for products</p>
            </div>

            <form onSubmit={handleSubmit} className="post-form">
              {/* Basic Information Card */}
              <div className="form-card">
                <h2 className="card-title">Basic Information</h2>
                
                {/* Category Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter category name..."
                  />
                </div>

                {/* Description */}
                <div className="form-group">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="form-textarea"
                    placeholder="Brief description of the category..."
                  />
                </div>
              </div>

              {/* Single Image Upload Card */}
              <div className="form-card">
                <h2 className="card-title">Category Image</h2>
                
                <div className="image-upload-section">
                  <div className="file-upload-area">
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="file-input"
                    />
                    <label htmlFor="image-upload" className="file-upload-label">
                      <div className="upload-icon">📁</div>
                      <div className="upload-text">
                        <p>Click to upload category image</p>
                        <span>or drag and drop</span>
                      </div>
                      <p className="upload-hint">PNG, JPG, WEBP up to 10MB</p>
                    </label>
                  </div>

                  {/* Single Image Preview */}
                  {imagePreview && (
                    <div className="image-previews">
                      <h3 className="previews-title">Selected Image</h3>
                      <div className="previews-grid">
                        <div className="image-preview-item">
                          <img 
                            src={imagePreview} 
                            alt="Category preview"
                            className="preview-image"
                          />
                          <button
                            type="button"
                            onClick={removeImage}
                            className="remove-image-btn"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
                  {isSubmitting ? 'Creating Category...' : 'Create Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;