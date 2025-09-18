import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '300+', label: 'Fornøyde Kunder' },
    { number: '1000+', label: 'Leverte Bilder' },
    { number: '20+', label: 'Års Erfaring' },
    { number: '500+', label: 'Eventer Dekket' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-title">
              <h2>Om Meg</h2>
            </div>
            <div className="about-description">
              <p>
                Jeg er en lidenskapelig fotograf og innholdsskaper med over 20 års erfaring med å fange livets mest dyrebare øyeblikk. Reisen min startet med en enkel kjærlighet for historiefortelling gjennom visuelle elementer, og den har utviklet seg til en karriere dedikert til å skape tidløse minner for klientene mine.
              </p>
              <p>
                Jeg spesialiserer meg på portrettfotografering, bryllup og eventfotografering, og tror 
at hvert øyeblikk har en historie verdt å fortelle. Min tilnærming kombinerer teknisk 
ekspertise med en ekte forbindelse til motivene mine, noe som resulterer i autentiske 
vakre bilder som tåler tidens tann.
              </p>
              <p>
                Når jeg ikke er bak kameraet, vil du finne meg utforske nye steder, eksperimenterende med forskjellige stiler, for å bringe nye perspektiver til arbeidet mitt. Jeg er opptatt av å ikke bare gi bilder, men en opplevelse du vil sette pris på for alltid.
              </p>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src="/images/about/about-img.jpg" 
                alt="Fotograf på jobb"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
