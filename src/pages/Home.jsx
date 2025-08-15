import React, { useEffect } from 'react'
import BgVideo from '../assets/videos/bg-video.mp4'
import {Link} from 'react-router-dom'

const features = [
{
  title: 'Santorini, Greece',
  desc: 'Whitewashed villages, sapphire seas, and sunsets you’ll never forget.',
  img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop'
},
{
  title: 'Kyoto, Japan',
  desc: 'Temples, kimonos, and tranquil tea houses among maple-lined lanes.',
  img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww'
},
{
  title: 'Hunza, Pakistan',
  desc: 'Emerald valleys, towering peaks, and roads that hug the sky.',
  img: 'https://images.unsplash.com/photo-1589610190054-ca780b311d16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bnphfGVufDB8fDB8fHww'
}


]

const testimonials = [
  { name: 'Aisha Khan.', text: 'The itinerary was flawless and the views unreal!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Danial Rehman.', text: 'Loved the smooth booking and helpful tips throughout.', img: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { name: 'Sara Business Owner.', text: 'Everything felt curated just for us. 10/10.', img: 'https://randomuser.me/api/portraits/women/68.jpg' }
]

function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view'))
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="container hero-inner">
          <h1 className="reveal">Crafting Memorable Journeys and Travel Stories</h1>
          <p className="reveal delay-1">
            Handpicked destinations, mindful travel, and stories that stay with you.
          </p>
          <a className="btn primary reveal delay-2" href="#destinations">
            Explore Destinations
          </a>
        </div>
      </section>


      <section id="destinations" className="section">
        <div className="container">
          <h2 className="section-title reveal">Featured Destinations</h2>
          <div className="card-grid">
            {features.map((f, i) => (
              <article key={i} className="card reveal">
                <img src={f.img} alt={f.title} loading="lazy" />
                <div className="card-body">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <Link className="btn ghost" to="./Contact">Book now</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title reveal">What Travelers Say</h2>
          <div className="testimonials">
            {testimonials.map((t, i) => (
              <figure key={i} className="testimonial reveal">
                <blockquote>“{t.text}”</blockquote>
                <img src={t.img} alt={t.name} className="avatar" loading="lazy" />
                <figcaption>— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
