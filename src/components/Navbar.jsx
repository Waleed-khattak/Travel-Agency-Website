import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  

  const close = () => setOpen(false)

  return (
    <header className={scrolled ? 'nav scrolled' : 'nav'}>
      <div className="container nav-inner">
        <NavLink to="/" className="logo" onClick={close}>
          Travel Mate<span>.</span>
        </NavLink>

        {/* Hamburger */}
        <button
          className={open ? 'hamburger active' : 'hamburger'}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop Menu */}
        <nav className="menu-desktop">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/policies">Policies</NavLink>
          <NavLink to="/contact" onClick={close} className="btn-nav">
            Book Now
          </NavLink>
        </nav>

        {/* Mobile Dropdown Menu */}
        <nav id="mobile-menu" className={open ? 'mobile-menu open' : 'mobile-menu'}>
          <NavLink to="/" onClick={close} end>Home</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <NavLink to="/policies" onClick={close}>Policies</NavLink>
          <NavLink to="/contact" onClick={close} className="btn-nav">
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default  Navbar;
