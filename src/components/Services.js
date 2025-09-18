import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '👤',
      title: 'Produktfotografering',
      description: 'Profesjonelle produktbilder, reklamebilder, og brandingbilder.',
      features: ['Studio & Utendørs Sessions', 'Profesjonell Redigering', 'Høyoppløsning Bilder', 'Online Galleri']
    },
    {
      icon: '💒',
      title: 'Bryllupsfotografering',
      description: 'Fang din spesielle dag med tidløse, romantiske fotografi som forteller din unike kjærlighetshistorie.',
      features: ['Full Dag Dekning', 'Forlovelses Bilder', 'Bryllupsalbum', 'Digitalt Galleri']
    },
    {
      icon: '📸',
      title: 'Livsstilsfotografering',
      description: 'Naturlige, skjult-kamera bilder som viser livet ditt, personlighet, og autentiske øyeblikk.',
      features: ['Skjult-kamera Bilder', 'Naturlig Belysning', 'Historietelling', 'Social Media Ready']
    },
    { 
      icon: '🎉',
      title: 'Eventfotografering',
      description: 'Profesjonell dekning av bedrifts-arrangementer, partier, og spesielle anledninger.',
      features: ['Event Dekning', 'Gruppebilder', 'Skjult-kamera Bilder', 'Rask Levering']
    },
    {
      icon: '🎨',
      title: 'Innholdsproduksjon',
      description: 'Social media innhold, Merkebilder, og visuell historiefortelling for bedrifter.',
      features: ['Merkebilder', 'Social Media Innhold', 'Produktbilder', 'Markedsmaterialer']
    },
    {
      icon: '✏️',
      title: 'Fotoredigering',
        description: 'Profesjonell etterbehandling og redigering for alle typer fotografi.',
      features: ['Fargekorreksjon', 'Retouching', 'Kreativ Redigering', 'Batch Processing']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Tjenester</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
            <h3>Klar til å skape noe vakkert?</h3>
          <p>La oss diskutere dine fotografibehov og lage et pakke som er perfekt for deg.</p>
          <button 
            className="btn"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Få et Tilbud
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
