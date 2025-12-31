import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-emoji">👨‍💻</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know the person behind the diverse talents</p>
        </div>

        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <div className="about-intro">
              <h3>🎨 Multi-Talented Creative Professional</h3>
              <p className="about-description">
                I'm Zein, a passionate creative professional who thrives at the intersection of 
                technology, art, and human expression. My unique journey spans four distinct yet 
                interconnected fields, each enriching the others to create a truly holistic 
                approach to creative problem-solving.
              </p>
            </div>
            
            <div className="about-details">
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-icon">🎂</span>
                  <div className="detail-content">
                    <strong>Birthday:</strong>
                    <span>May 1, 1995</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🌐</span>
                  <div className="detail-content">
                    <strong>Website:</strong>
                    <span>www.zein.dev</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📱</span>
                  <div className="detail-content">
                    <strong>Phone:</strong>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🏙️</span>
                  <div className="detail-content">
                    <strong>City:</strong>
                    <span>New York, USA</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📧</span>
                  <div className="detail-content">
                    <strong>Email:</strong>
                    <span>hello@zein.dev</span>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">💼</span>
                  <div className="detail-content">
                    <strong>Availability:</strong>
                    <span className="status-available">Open for Projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-philosophy">
              <blockquote>
                <span className="quote-icon">💭</span>
                "I believe that true creativity emerges when different disciplines converge. 
                My experience in development teaches me precision, photography trains my eye for beauty, 
                voice work develops my communication skills, and modeling enhances my understanding 
                of visual presentation. Together, they create something greater than the sum of their parts."
              </blockquote>
            </div>
          </div>

          <div className="skills-section animate-on-scroll">
            <h3>🛠️ Core Competencies</h3>
            <div className="skills-list">
              {[
                { name: 'Software Development', level: 95, icon: '💻' },
                { name: 'Photography & Visual Arts', level: 92, icon: '📸' },
                { name: 'Voice Acting & Audio', level: 88, icon: '🎤' },
                { name: 'Modeling & Presentation', level: 90, icon: '👔' },
                { name: 'Creative Direction', level: 85, icon: '🎨' },
                { name: 'Project Management', level: 87, icon: '📋' }
              ].map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="stats-section animate-on-scroll">
          <div className="stats-grid">
            {[
              { number: '150', label: 'Happy Clients', icon: '😊', color: '#4FC3F7' },
              { number: '300', label: 'Projects Done', icon: '🚀', color: '#66BB6A' },
              { number: '2500', label: 'Hours Worked', icon: '⏰', color: '#FFA726' },
              { number: '15', label: 'Awards Won', icon: '🏆', color: '#EF5350' }
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-number" data-target={stat.number}>0</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow" style={{ background: stat.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About