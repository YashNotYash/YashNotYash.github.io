import React, { useState } from 'react';
import '../styles/Services.css';

const services = [
  {
    name: 'Hair Care',
    image: '/assets/hair.jpg',
    items: ['Haircut', 'Hair Coloring', 'Hair Spa', 'Styling'],
  },
  {
    name: 'Skin Care',
    image: '/assets/skin.jpg',
    items: ['Facial', 'Clean-up', 'Bleach', 'Detan'],
  },
  {
    name: 'Makeup',
    image: '/assets/makeup.jpg',
    items: ['Bridal Makeup', 'Party Makeup', 'Eye Makeup'],
  },
  {
    name: 'Spa',
    image: '/assets/spa.jpg',
    items: ['Body Massage', 'Aromatherapy', 'Scrub'],
  },
];

function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.name}
            className="service-tile"
            style={{ backgroundImage: `url(${service.image})` }}
            onClick={() => setSelected(service)}
          >
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="service-modal-overlay" onClick={() => setSelected(null)}>
          <div className="service-modal" onClick={e => e.stopPropagation()}>
            <button className="service-modal-close" onClick={() => setSelected(null)}>×</button>
            <h3>{selected.name}</h3>
            <ul>
              {selected.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;