import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/about') {
      navigate('/about');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo">Seemanth.</Link>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><a href="/about#skills" onClick={(e) => handleNav(e, 'skills')}>Skills</a></li>
          <li><a href="/about#experience" onClick={(e) => handleNav(e, 'experience')}>Experience</a></li>
          <li><a href="/about#projects" onClick={(e) => handleNav(e, 'projects')}>Projects</a></li>
          <li><a href="/about#contact" onClick={(e) => handleNav(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
