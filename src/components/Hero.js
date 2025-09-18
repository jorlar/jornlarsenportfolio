import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Hero images from local public folder
  const heroImages = [
    {
      url: '/images/hero/hero-1.jpg',
      alt: 'Portrettfotografering'
    },
    {
      url: '/images/hero/hero-2.jpg',
      alt: 'Bryllupsfotografering'
    },
    {
      url: '/images/hero/hero-3.jpg',
      alt: 'Livsstilsfotografering'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slideshow">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-text fade-in-up">
            <h1>Fang livets vakre øyeblikk</h1>
            <p>
              Profesjonel fotograf og innholdsskaper som spesialiserer seg på 
              produktfotografering, bryllupsfotografering og eventfotografering. La meg fortelle din historie 
              gjennom vakre visuelle øyeblikk.
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToContact} className="btn">
                Book en Session
              </button>
              <button 
                onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline"
              >
                Se Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
