import React from 'react'

const Professions: React.FC = () => {
  const professions = [
    {
      title: 'Software Developer',
      emoji: '💻',
      description: 'Crafting elegant, scalable solutions with modern technologies',
      skills: ['React & TypeScript', 'Node.js & Python', 'Cloud Architecture', 'AI/ML Integration'],
      experience: '5+ Years',
      projects: '100+',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: 'fas fa-code'
    },
    {
      title: 'Professional Photographer',
      emoji: '📸',
      description: 'Capturing moments and creating visual stories that inspire',
      skills: ['Portrait Photography', 'Commercial Shoots', 'Photo Editing', 'Creative Direction'],
      experience: '4+ Years',
      projects: '200+',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: 'fas fa-camera'
    },
    {
      title: 'Voice Artist',
      emoji: '🎤',
      description: 'Bringing characters and brands to life through vocal performance',
      skills: ['Commercial Voice Over', 'Character Voices', 'Audio Production', 'Script Interpretation'],
      experience: '3+ Years',
      projects: '80+',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: 'fas fa-microphone'
    },
    {
      title: 'Professional Model',
      emoji: '👔',
      description: 'Representing brands with elegance and professionalism',
      skills: ['Fashion Modeling', 'Commercial Modeling', 'Hand Modeling', 'Brand Representation'],
      experience: '3+ Years',
      projects: '60+',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: 'fas fa-user-tie'
    }
  ]

  return (
    <section id="professions" className="section section-alt">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-emoji">🎭</span>
          <h2 className="section-title">My Professions</h2>
          <p className="section-subtitle">
            Four distinct fields, one creative vision - exploring the diverse talents that define my professional journey
          </p>
        </div>

        <div className="professions-grid">
          {professions.map((profession, index) => (
            <div key={profession.title} className="profession-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="profession-header" style={{ background: profession.gradient }}>
                <div className="profession-emoji">{profession.emoji}</div>
                <div className="profession-icon">
                  <i className={profession.icon}></i>
                </div>
              </div>
              
              <div className="profession-content">
                <h3 className="profession-title">{profession.title}</h3>
                <p className="profession-description">{profession.description}</p>
                
                <div className="profession-stats">
                  <div className="stat">
                    <span className="stat-value">{profession.experience}</span>
                    <span className="stat-label">Experience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{profession.projects}</span>
                    <span className="stat-label">Projects</span>
                  </div>
                </div>

                <div className="profession-skills">
                  <h4>Key Skills:</h4>
                  <ul className="skills-list">
                    {profession.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-tag">
                        <span className="skill-bullet">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="profession-cta">
                  <button className="profession-btn" style={{ background: profession.gradient }}>
                    <span>View Work</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="profession-glow" style={{ background: profession.gradient }}></div>
            </div>
          ))}
        </div>

        {/* Cross-Disciplinary Benefits */}
        <div className="cross-benefits animate-on-scroll">
          <h3>🌟 The Power of Multi-Disciplinary Expertise</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h4>Unique Perspective</h4>
              <p>Each field informs the others, creating innovative solutions and fresh approaches to challenges.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔄</div>
              <h4>Versatile Collaboration</h4>
              <p>Ability to work seamlessly across different teams and understand diverse project requirements.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h4>Rapid Adaptation</h4>
              <p>Experience in multiple fields enables quick learning and adaptation to new technologies and trends.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎨</div>
              <h4>Holistic Creativity</h4>
              <p>Technical precision meets artistic vision, resulting in work that is both functional and beautiful.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Professions