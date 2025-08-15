import React, { useEffect } from 'react'

const team = [
  { name: 'Waleed Khattak', role: 'CEO & Founder', img: 'https://media.licdn.com/dms/image/v2/D5622AQHRKHUiQLkZmg/feedshare-shrink_2048_1536/B56ZgNoYmLG0Ao-/0/1752575351055?e=1758153600&v=beta&t=xfY8Owq9bTKdSh7UqMSeZLvcnG-cR1SU158ph9JDbWI' },
  { name: 'Amina Naveed', role: 'Experience Designer', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3w5...&auto=format&fit=crop&w=600&q=80' },
  { name: 'Zain Ali', role: 'Guide & Storyteller', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3w5...&auto=format&fit=crop&w=600&q=80' }
]

function About(){
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view'))
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="section">
      <div className="container">
        <h2 className="section-title reveal">About Us</h2>
        <p className="lead reveal" style={{marginBottom: ' 40px'}}>
          We’re a small team of travelers helping you explore the world responsibly
          with itineraries that balance iconic sights and hidden gems. we are passionate explorers dedicated to making travel stress-free, inspiring, and unforgettable. Our mission is to connect people with cultures, landscapes, and experiences that leave lasting impressions. Whether it’s a family holiday, a solo escape, or a business journey, we combine thoughtful planning with a personal touch to ensure every trip feels effortless and extraordinary. With trusted partners, expert guidance, and a love for adventure, we don’t just plan trips we craft journeys that bring stories to life.
        </p>

        <div className="mission reveal">
          <div>
            <h3>Our Mission</h3>
            <p>Enable meaningful, sustainable travel experiences that connect people with places and cultures.</p>
          </div>
          <div>
            <h3>Our Vision</h3>
            <p>A world where travel enriches local communities and every journey leaves a positive footprint.</p>
          </div>
        </div>

        <div className="team-grid">
          {team.map((m, i) => (
            <div className="team-card reveal" key={i}>
              <img src={m.img} alt={m.name} loading="lazy" />
              <h4>{m.name}</h4>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default  About;
