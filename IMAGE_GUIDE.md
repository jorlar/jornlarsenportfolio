# Image Management Guide

This guide explains how to manage images in your photographer portfolio website.

## Image Folder Structure

```
public/
└── images/
    ├── hero/           # Hero section slideshow images
    │   ├── hero-1.jpg
    │   ├── hero-2.jpg
    │   └── hero-3.jpg
    ├── about/          # About section image
    │   └── about-photographer.jpg
    └── gallery/        # Portfolio gallery images
        ├── portraits/  # Portrait photography
        │   ├── portrait-1.jpg
        │   ├── portrait-2.jpg
        │   └── portrait-3.jpg
        ├── weddings/   # Wedding photography
        │   ├── wedding-1.jpg
        │   └── wedding-2.jpg
        ├── lifestyle/  # Lifestyle photography
        │   ├── lifestyle-1.jpg
        │   └── lifestyle-2.jpg
        └── events/     # Event photography
            ├── event-1.jpg
            └── event-2.jpg
```

## How to Add Your Own Images

### 1. Hero Section Images
- Replace the images in `public/images/hero/`
- Recommended size: 1920x1080px or larger
- Format: JPG or PNG
- Keep file names as: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`

### 2. About Section Image
- Replace `public/images/about/about-photographer.jpg`
- Recommended size: 600x800px or similar portrait orientation
- Format: JPG or PNG

### 3. Gallery Images
- Add your images to the appropriate category folders:
  - `public/images/gallery/portraits/` - Portrait photos
  - `public/images/gallery/weddings/` - Wedding photos
  - `public/images/gallery/lifestyle/` - Lifestyle photos
  - `public/images/gallery/events/` - Event photos

- File naming convention: `category-number.jpg` (e.g., `portrait-1.jpg`, `wedding-1.jpg`)
- Recommended size: 1200x800px or similar
- Format: JPG or PNG

## Image Optimization Tips

1. **Compress images** before uploading to reduce file size
2. **Use JPG** for photos with many colors
3. **Use PNG** for images with transparency or simple graphics
4. **Optimize for web** - aim for file sizes under 500KB per image
5. **Use consistent aspect ratios** within each category

## Adding More Images

To add more images to the gallery:

1. **Add the image file** to the appropriate folder
2. **Update the Gallery component** (`src/components/Gallery.js`):
   - Add a new entry to the `galleryImages` array
   - Use the next available ID number
   - Set the correct category and alt text

Example:
```javascript
{ id: 10, src: '/images/gallery/portraits/portrait-4.jpg', category: 'portraits', alt: 'Portrettfotografering' }
```

## Image Requirements

- **Hero images**: High quality, impactful photos that represent your best work
- **About image**: Professional photo of yourself or your workspace
- **Gallery images**: Your best portfolio pieces, organized by category

## Troubleshooting

- If images don't appear, check the file paths in the components
- Ensure image files are in the correct folders
- Verify file names match exactly (case-sensitive)
- Check that images are properly optimized for web use

## Current Placeholder Images

The website currently uses placeholder images from Unsplash. Replace these with your own professional photography to showcase your work effectively.
