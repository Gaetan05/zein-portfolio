import React from 'react'

interface PortfolioProps {
  activeFilter: string
  handleFilterClick: (filter: string) => void
}

const Portfolio: React.FC<PortfolioProps> = ({ activeFilter, handleFilterClick }) => {
  const portfolioItems = [
    // Development Projects
    { title: 'E-Commerce Platform', category: 'filter-dev', tech: 'React, Node.js, MongoDB', emoji: '🛒', profession: 'Development' },
    { title: 'AI Dashboard', category: 'filter-dev', tech: 'Python, React, TensorFlow', emoji: '🤖', profession: 'Development' },
    { title: 'Mobile Banking App', category: 'filter-dev', tech: 'React Native, Firebase', emoji: '💳', profession: 'Development' },
    
    // Photography Projects
    { title: 'Fashion Portrait Series', category: 'filter-photo', tech: 'Canon 5D, Lightroom', emoji: '👗', profession: 'Photography' },
    { title: 'Corporate Headshots', category: 'filter-photo', tech: 'Studio Lighting, Photoshop', emoji: '👔', profession: 'Photography' },
    { title: 'Product Photography', category: 'filter-photo', tech: 'Macro Lens, Color Grading', emoji: '📦', profession: 'Photography' },
    
    // Voice Work Projects
    { title: 'Commercial Voice Over', category: 'filter-voice', tech: 'Pro Tools, Audio Editing', emoji: '📺', profession: 'Voice Acting' },
    { title: 'Audiobook Narration', category: 'filter-voice', tech: 'Studio Recording, Audacity', emoji: '📚', profession: 'Voice Acting' },
    { title: 'Character Voices', category: 'filter-voice', tech: 'Voice Modulation, Sound Design', emoji: '🎭', profession: 'Voice Acting' },
    
    // Modeling Projects
    { title: 'Fashion Campaign', category: 'filter-model', tech: 'Runway, Editorial', emoji: '🕺', profession: 'Modeling' },
    { title: 'Hand Modeling', category: 'filter-model', tech: 'Product Showcase, Jewelry', emoji: '✋', profession: 'Modeling' },
    { title: 'Brand Ambassador', category: 'filter-model', tech: 'Commercial, Social Media', emoji: '🌟', profession: 'Modeling' }
  ]

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-emoji">💼</span>
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">Showcasing excellence across all professional disciplines</p>
        </div>

        <div className="portfolio-filters animate-on-scroll">
          {[
            { filter: '*', label: 'All Work', emoji: '🌟' },
            { filter: 'filter-dev', label: 'Development', emoji: '💻' },
            { filter: 'filter-photo', label: 'Photography', emoji: '📸' },
            { filter: 'filter-voice', label: 'Voice Work', emoji: '🎤' },
            { filter: 'filter-model', label: 'Modeling', emoji: '👔' }
          ].map(({ filter, label, emoji }) => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`} 
              onClick={() => handleFilterClick(filter)}
            >
              <span className="filter-emoji">{emoji}</span>
              <span className="filter-text">{label}</span>
            </button>
          ))}
        </div>

        <div className="portfolio-grid animate-on-scroll">
          {portfolioItems
            .filter(item => activeFilter === '*' || item.category === activeFilter)
            .map((item, index) => (
              <div key={index} className={`portfolio-card ${item.category}`}>
                <div className="portfolio-image">
                  <div className="portfolio-placeholder">
                    <span className="portfolio-emoji">{item.emoji}</span>
                  </div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <button className="portfolio-btn view-btn">
                        <i className="fas fa-eye"></i>
                        <span>View</span>
                      </button>
                      <button className="portfolio-btn details-btn">
                        <i className="fas fa-info-circle"></i>
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                  <div className="portfolio-profession-tag">
                    {item.profession}
                  </div>
                </div>
                <div className="portfolio-content">
                  <h4 className="portfolio-title">{item.title}</h4>
                  <p className="portfolio-tech">{item.tech}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Portfolio Stats */}
        <div className="portfolio-stats animate-on-scroll">
          <div className="stats-row">
            <div className="portfolio-stat">
              <div className="stat-icon">💻</div>
              <div className="stat-info">
                <span className="stat-number">50+</span>
                <span className="stat-label">Development Projects</span>
              </div>
            </div>
            <div className="portfolio-stat">
              <div className="stat-icon">📸</div>
              <div className="stat-info">
                <span className="stat-number">200+</span>
                <span className="stat-label">Photo Sessions</span>
              </div>
            </div>
            <div className="portfolio-stat">
              <div className="stat-icon">🎤</div>
              <div className="stat-info">
                <span className="stat-number">80+</span>
                <span className="stat-label">Voice Projects</span>
              </div>
            </div>
            <div className="portfolio-stat">
              <div className="stat-icon">👔</div>
              <div className="stat-info">
                <span className="stat-number">60+</span>
                <span className="stat-label">Modeling Gigs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio