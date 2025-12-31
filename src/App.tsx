import { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Professions from './components/Professions'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('*')
  const [typedText, setTypedText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Initialize smooth scrolling and section detection
    const handleScroll = () => {
      const sections = ['home', 'about', 'professions', 'portfolio', 'services', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // Initialize animations
    setTimeout(() => {
      setIsLoaded(true)
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el)
      })
    }, 500)

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
  }

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number')
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0')
        const increment = target / 200
        let current = 0
        
        const updateCounter = () => {
          if (current < target) {
            current += increment
            counter.textContent = Math.ceil(current).toString()
            setTimeout(updateCounter, 10)
          } else {
            counter.textContent = target.toString()
          }
        }
        
        updateCounter()
      })
    }

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters()
          statsObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    const statsSection = document.querySelector('.stats-section')
    if (statsSection) {
      statsObserver.observe(statsSection)
    }

    return () => {
      if (statsSection) {
        statsObserver.unobserve(statsSection)
      }
    }
  }, [isLoaded])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      service: formData.get('service'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      newsletter: formData.get('newsletter')
    }
    
    console.log('Form submitted:', data)
    alert('🎉 Thank you for your message! I will get back to you within 24 hours to discuss your project.')
    e.currentTarget.reset()
  }

  // Enhanced typing effect for multi-professional roles
  useEffect(() => {
    const texts = [
      '💻 Full-Stack Developer', 
      '📸 Professional Photographer', 
      '🎤 Voice Artist & Actor',
      '👔 Professional Model',
      '🎨 Creative Director',
      '✨ Multi-Talented Professional'
    ]
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const currentText = texts[textIndex]
      
      if (isDeleting) {
        setTypedText(currentText.substring(0, charIndex - 1))
        charIndex--
      } else {
        setTypedText(currentText.substring(0, charIndex + 1))
        charIndex++
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
      }

      setTimeout(typeEffect, typeSpeed)
    }

    if (isLoaded) {
      setTimeout(typeEffect, 1000)
    }
  }, [isLoaded])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* Cursor Follower */}
      <div 
        className="cursor-follower"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <main className="main-content">
        <Hero typedText={typedText} scrollToSection={scrollToSection} />
        <About />
        <Professions />
        <Portfolio activeFilter={activeFilter} handleFilterClick={handleFilterClick} />
        <Services />
        <Contact handleFormSubmit={handleFormSubmit} />
      </main>

      {/* Mobile Menu Toggle */}
      <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
      </button>
    </div>
  )
}

export default App