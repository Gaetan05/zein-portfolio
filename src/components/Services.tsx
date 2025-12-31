import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      emoji: '💻',
      title: 'Full-Stack Development',
      description: 'Custom web applications, mobile apps, and enterprise solutions built with modern technologies and best practices.',
      features: ['React & TypeScript', 'Node.js & Python', 'Cloud Deployment', 'API Development'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: 'fas fa-camera',
      emoji: '📸',
      title: 'Professional Photography',
      description: 'High-quality photography services for portraits, events, products, and commercial campaigns.',
      features: ['Portrait Sessions', 'Event Photography', 'Product Shoots', 'Photo Editing'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: 'fas fa-microphone',
      emoji: '🎤',
      title: 'Voice Over Services',
      description: 'Professional voice acting for commercials, audiobooks, animations, and corporate presentations.',
      features: ['Commercial VO', 'Character Voices', 'Audiobook Narration', 'Audio Production'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: 'fas fa-user-tie',
      emoji: '👔',
      title: 'Professional Modeling',
      description: 'Experienced modeling services for fashion, commercial, and product photography campaigns.',
      features: ['Fashion Modeling', 'Commercial Work', 'Hand Modeling', 'Brand Ambassador'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: 'fas fa-paint-brush',
      emoji: '🎨',
      title: 'Creative Direction',
      description: 'Comprehensive creative direction combining technical expertise with artistic vision for unique projects.',
      features: ['Project Planning', 'Visual Strategy', 'Brand Development', 'Multi-media Campaigns'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: 'fas fa-users',
      emoji: '🤝',
      title: 'Consultation & Training',
      description: 'Share knowledge and expertise through consulting, workshops, and training in multiple creative fields.',
      features: ['Technical Consulting', 'Creative Workshops', 'Portfolio Reviews', 'Career Guidance'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ]

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-emoji">⚙️</span>
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions across multiple creative and technical disciplines
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-header">
                <div className="service-icon-wrapper" style={{ background: service.gradient }}>
                  <span className="service-emoji">{service.emoji}</span>
                  <i className={service.icon}></i>
                </div>
              </div>
              
              <div className="service-content">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <span className="feature-bullet" style={{ background: service.gradient }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="service-cta" style={{ background: service.gradient }}>
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              <div className="service-glow" style={{ background: service.gradient }}></div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="service-process animate-on-scroll">
          <h3>🚀 My Working Process</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Discovery & Planning</h4>
                <p>Understanding your vision, goals, and requirements across all relevant disciplines.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Creative Development</h4>
                <p>Crafting solutions that leverage my multi-disciplinary expertise for optimal results.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Execution & Delivery</h4>
                <p>Professional implementation with attention to detail and commitment to excellence.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Support & Growth</h4>
                <p>Ongoing support and collaboration to ensure continued success and evolution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services