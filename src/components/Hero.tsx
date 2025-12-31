import React from 'react'

interface HeroProps {
  typedText: string
  scrollToSection: (sectionId: string) => void
}

const Hero: React.FC<HeroProps> = ({ typedText, scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-animation">
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>
      
      <div className="hero-content animate-on-scroll">
        <div className="hero-greeting">
          <span className="greeting-wave">👋</span>
          <span className="greeting-text">Hello, I'm</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-main">Zein</span>
          <div className="title-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
          </div>
        </h1>
        
        <div className="hero-subtitle">
          <span className="typing-text">{typedText}</span>
          <span className="cursor-blink">|</span>
        </div>
        
        <p className="hero-description">
          🌟 A multi-talented creative professional who excels across diverse fields - 
          from cutting-edge software development and stunning photography to captivating 
          voice artistry and elegant modeling. I bring passion, creativity, and excellence 
          to every project I touch.
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('about')}
          >
            <span className="btn-text">Discover My Story</span>
            <span className="btn-icon">🚀</span>
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => scrollToSection('professions')}
          >
            <span className="btn-text">Explore My Talents</span>
            <span className="btn-icon">🎭</span>
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Professional Fields</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero