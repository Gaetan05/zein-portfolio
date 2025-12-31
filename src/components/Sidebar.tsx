import React from 'react'

interface SidebarProps {
  activeSection: string
  isMobileMenuOpen: boolean
  scrollToSection: (sectionId: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, isMobileMenuOpen, scrollToSection }) => {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={() => {}}
      />

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isMobileMenuOpen ? 'show' : ''}`}>
        <div className="sidebar-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-image">
              <div className="profile-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-inner">
                  <span className="avatar-text">Z</span>
                </div>
                <div className="profile-status"></div>
              </div>
            </div>
            <h1 className="profile-name">
              <span className="name-gradient">Zein</span>
            </h1>
            <div className="profile-title">
              <span className="title-icon">✨</span>
              Multi-Talented Creative Professional
            </div>
            
            {/* Social Links */}
            <div className="social-links">
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
                <span className="social-tooltip">Twitter</span>
              </a>
              <a href="#" className="social-link github" aria-label="GitHub">
                <i className="fab fa-github"></i>
                <span className="social-tooltip">GitHub</span>
              </a>
              <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a href="#" className="social-link instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
                <span className="social-tooltip">Instagram</span>
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul className="nav-menu">
            {[
              { id: 'home', label: 'Home', icon: 'fas fa-home', emoji: '🏠' },
              { id: 'about', label: 'About', icon: 'fas fa-user', emoji: '👨‍💻' },
              { id: 'professions', label: 'Professions', icon: 'fas fa-briefcase', emoji: '🎭' },
              { id: 'portfolio', label: 'Portfolio', icon: 'fas fa-folder-open', emoji: '💼' },
              { id: 'services', label: 'Services', icon: 'fas fa-cogs', emoji: '⚙️' },
              { id: 'contact', label: 'Contact', icon: 'fas fa-envelope', emoji: '📧' }
            ].map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  <span className="nav-emoji">{item.emoji}</span>
                  {/* <i className={item.icon}></i> */}
                  <span className="nav-text">{item.label}</span>
                  <div className="nav-glow"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar