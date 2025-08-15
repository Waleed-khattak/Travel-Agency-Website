import React, { useEffect, useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view'))
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address"
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty"
    return newErrors
  }

  const submit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      alert('✅ Thanks! But currently (no backend connected).')
      setFormData({ name: "", email: "", message: "" }) 
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="section">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title reveal">Get in Touch</h2>
          <form className="contact-form reveal" onSubmit={submit} noValidate>
            
            <label>
              Name
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && <small className="error">{errors.name}</small>}
            </label>

            <label>
              Email
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </label>

            <label>
              Message
              <textarea 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
              />
              {errors.message && <small className="error">{errors.message}</small>}
            </label>

            <button className="btn primary" type="submit" style={{fontFamily: 'Poppins'}}>
              Send Message
            </button>
          </form>
        </div>

        <aside className="contact-info reveal">
          <h3>Contact Details</h3>
          <ul>
            <li><strong>Phone:</strong> +92 300 1234567</li>
            <li><strong>Email:</strong> support@TravelMate.com</li>
            <li><strong>Address:</strong> Punjab, Pakistan</li>
          </ul>

          <div className="map-wrap">
            <iframe
              title="Travel Mate Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.131091365705!2d74.13920999999999!3d32.281453299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f27007d334e0d%3A0x55680c67bd5e63c0!2sInnovista%20Rachna!5e0!3m2!1sen!2s!4v1755267888097!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Contact;
