import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadingImages, setLoadingImages] = useState({});

  const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'portraits', name: 'Portretter' },
    { id: 'weddings', name: 'Bryllup' },
    { id: 'lifestyle', name: 'Livsstil' },
    { id: 'events', name: 'Eventer' },
    { id: 'products', name: 'Produktbilder' },
    { id: 'company', name: 'Bedriftsbilder' }
  ];

  // Gallery images from local public folder
  const galleryImages = [
    
    { id: 1, src: '/images/gallery/weddings/wedding-1.jpg', category: 'weddings', alt: 'Bryllupsfotografering' },
    { id: 2, src: '/images/gallery/lifestyle/about-img.jpg', category: 'lifestyle', alt: 'Livsstilsfotografering' },
    { id: 3, src: '/images/gallery/events/Beatles.jpeg', category: 'events', alt: 'Eventfotografering' },
    { id: 4, src: '/images/gallery/product/produkt03.jpg', category: 'products', alt: 'Produktbilder' },
    { id: 5, src: '/images/gallery/lifestyle/lifestyle-2.jpg', category: 'lifestyle', alt: 'Livsstilsfotografering' },
    { id: 6, src: '/images/gallery/portraits/portrait-3.jpg', category: 'portraits', alt: 'Portrettfotografering' },
    { id: 7, src: '/images/gallery/company/bedrift02.jpg', category: 'company', alt: 'Bedriftsbilder' },
    { id: 8, src: '/images/gallery/company/bedrift01.jpg', category: 'company', alt: 'Bedriftsbilder' },
    { id: 9, src: '/images/gallery/product/produkt01.jpg', category: 'products', alt: 'Produktbilder' },
    { id: 10, src: '/images/gallery/product/produkt05.jpg', category: 'products', alt: 'Produktbilder' },
    { id: 11, src: '/images/gallery/events/honningbarna01.jpeg', category: 'events', alt: 'Eventfotografering' },
    { id: 12, src: '/images/gallery/weddings/bryllup.jpg', category: 'weddings', alt: 'Bryllupsfotografering' },
    { id: 13, src: '/images/gallery/events/bokassa.jpg', category: 'events', alt: 'Eventfotografering' },
    { id: 14, src: '/images/gallery/product/Produkt04.png', category: 'products', alt: 'Produktbilder' },
    { id: 15, src: '/images/gallery/events/staut.jpg', category: 'events', alt: 'Eventfotografering' },
    { id: 16, src: '/images/gallery/product/produkt06.jpg', category: 'products', alt: 'Produktbilder' },
    { id: 17, src: '/images/gallery/product/produkt07.jpg', category: 'products', alt: 'Produktbilder' },

  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Handle image loading
  const handleImageLoad = (imageId) => {
    setLoadingImages(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageStart = (imageId) => {
    setLoadingImages(prev => ({ ...prev, [imageId]: true }));
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage && e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedImage]);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio Galleri</h2>
        </div>
        <div className="section-title">
          <p>Et lite utvalg av bilder fra de forskjellige tjenestene mine.</p>
        </div>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-image">
                {loadingImages[image.id] && (
                  <div className="image-loading-placeholder">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onLoadStart={() => handleImageStart(image.id)}
                  onLoad={() => handleImageLoad(image.id)}
                  style={{ opacity: loadingImages[image.id] ? 0 : 1 }}
                />
                <div className="gallery-overlay">
                  <div className="gallery-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7,10 12,15 17,10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Lukk lightbox">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
