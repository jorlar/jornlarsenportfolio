# Photographer Portfolio Website

A modern, responsive React-based portfolio website for photographers and content creators. Features a clean, professional design with smooth animations and excellent user experience.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Gallery**: Filterable portfolio with lightbox functionality
- **Contact Form**: Functional contact form with validation
- **Smooth Navigation**: Single-page application with smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Lazy loading images and optimized assets

## Sections

1. **Hero Section**: Eye-catching slideshow with call-to-action buttons
2. **About Section**: Personal story and statistics
3. **Gallery Section**: Filterable portfolio with categories
4. **Services Section**: Detailed service offerings
5. **Contact Section**: Contact form and business information
6. **Footer**: Links and social media integration

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project files
2. Navigate to the project directory:
   

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Customization

### Images
The website now uses local images from the `public/images/` folder. See `IMAGE_GUIDE.md` for detailed instructions on how to manage and add your own images.

**Quick setup:**
- Hero section images: `public/images/hero/`
- Gallery images: `public/images/gallery/` (organized by category)
- About section image: `public/images/about/`

### Content
Update the following files with your information:
- `src/components/Header.js` - Update the logo/brand name
- `src/components/Hero.js` - Update the hero text and call-to-action
- `src/components/About.js` - Update the about section content and statistics
- `src/components/Services.js` - Update services and features
- `src/components/Contact.js` - Update contact information and social links
- `src/components/Footer.js` - Update footer content and links

### Styling
The main color scheme is defined in `src/index.css` using CSS custom properties:
- `--primary-color`: Main brand color
- `--accent-color`: Accent/highlight color
- `--secondary-color`: Background color for sections

### Fonts
The website uses Google Fonts:
- **Inter**: For body text and UI elements
- **Playfair Display**: For headings and titles

## File Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Gallery.js & Gallery.css
│   ├── Services.js & Services.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js
└── index.css
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading for images
- Optimized CSS with custom properties
- Smooth animations with CSS transitions
- Responsive images with proper aspect ratios
- Minimal JavaScript for better performance

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact the developer or create an issue in the project repository.
