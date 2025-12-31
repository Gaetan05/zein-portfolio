import React from 'react'

interface ContactProps {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Contact: React.FC<ContactProps> = ({ handleFormSubmit }) => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-emoji">📧</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to bring your vision to life? Let's discuss how my diverse skills can help your project succeed!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <div className="contact-intro">
              <h3>🤝 Let's Work Together</h3>
              <p>
                Whether you need cutting-edge development, stunning photography, 
                captivating voice work, or professional modeling services, I'm here 
                to bring your vision to life with creativity and excellence.
              </p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>New York, NY, USA</p>
                  <span className="contact-note">Available for remote & on-site work</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>hello@zein.dev</p>
                  <span className="contact-note">Response within 24 hours</span>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <span className="contact-note">Available Mon-Fri, 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            <div className="contact-specialties">
              <h4>🎯 Project Specialties</h4>
              <div className="specialty-tags">
                <span className="specialty-tag dev">💻 Web Development</span>
                <span className="specialty-tag photo">📸 Photography</span>
                <span className="specialty-tag voice">🎤 Voice Acting</span>
                <span className="specialty-tag model">👔 Modeling</span>
                <span className="specialty-tag creative">🎨 Creative Direction</span>
              </div>
            </div>
          </div>

          <form className="contact-form animate-on-scroll" onSubmit={handleFormSubmit}>
            <div className="form-header">
              <h3>💌 Start Your Project</h3>
              <p>Tell me about your vision and let's create something amazing together!</p>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>👤 Your Name</label>
                <input type="text" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>📧 Your Email</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>🏢 Company (Optional)</label>
                <input type="text" name="company" placeholder="Your Company" />
              </div>
              <div className="form-group">
                <label>🎯 Service Needed</label>
                <select name="service" required>
                  <option value="">Select a service</option>
                  <option value="development">💻 Development</option>
                  <option value="photography">📸 Photography</option>
                  <option value="voice">🎤 Voice Work</option>
                  <option value="modeling">👔 Modeling</option>
                  <option value="creative">🎨 Creative Direction</option>
                  <option value="multiple">🌟 Multiple Services</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label>📝 Project Title</label>
              <input type="text" name="subject" placeholder="What's your project about?" required />
            </div>
            
            <div className="form-group">
              <label>💭 Project Details</label>
              <textarea 
                name="message" 
                rows={6} 
                placeholder="Tell me about your project goals, timeline, budget, and any specific requirements..." 
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" name="newsletter" />
                <span className="checkmark">✓</span>
                📬 Subscribe to my newsletter for creative tips and updates
              </label>
            </div>
            
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-submit">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon">🚀</span>
              </button>
            </div>

            <div className="form-footer">
              <p>🔒 Your information is secure and will never be shared with third parties.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact