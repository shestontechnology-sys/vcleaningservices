import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  Mail, 
  Menu, 
  X, 
  Calendar, 
  Tag, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const BrandLogo = ({ size = 'normal' }) => {
  const isLarge = size === 'large';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
      <div style={{
        width: isLarge ? '52px' : '44px',
        height: isLarge ? '52px' : '44px',
        borderRadius: '14px',
        background: 'linear-gradient(135deg, #0B2545 0%, #134074 50%, #00A6FB 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 16px rgba(11, 37, 69, 0.25)',
        position: 'relative',
        flexShrink: 0
      }}>
        {/* Stylized V combined with house roofline and eco leaf sparkle */}
        <svg width={isLarge ? "32" : "26"} height={isLarge ? "32" : "26"} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle house silhouette roof */}
          <path d="M50 15 L18 42 L24 42 L50 20 L76 42 L82 42 Z" fill="#00A6FB" opacity="0.85" />
          {/* Bold Modern Stylized V */}
          <path d="M22 32 L46 84 Q50 90 54 84 L78 32 Q82 24 72 24 L60 24 L50 62 L40 24 L28 24 Q18 24 22 32 Z" fill="#FFFFFF" />
          {/* Green Eco Leaf accent */}
          <path d="M74 16 C84 14 90 22 88 32 C78 34 72 26 74 16 Z" fill="#10B981" />
          {/* Gleam sparkle */}
          <path d="M78 8 L80 14 L86 16 L80 18 L78 24 L76 18 L70 16 L76 14 Z" fill="#FFD166" />
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ 
          fontFamily: 'var(--font-heading)',
          fontWeight: 800, 
          fontSize: isLarge ? '1.45rem' : '1.2rem', 
          color: 'var(--color-navy-800)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1
        }}>
          V CLEANING <span style={{ color: 'var(--color-cyan-500)' }}>SERVICES</span>
        </div>
        <div style={{ 
          fontSize: isLarge ? '0.78rem' : '0.72rem', 
          fontWeight: 600, 
          color: 'var(--color-green-600)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}>
          {siteConfig.brand.tagline}
        </div>
      </div>
    </div>
  );
};

export const Header = ({ onOpenBooking, onOpenQuote, onOpenOffers, onOpenAbout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Our Work', href: '#our-work' },
    { 
      label: 'Aayudha Pooja Offer', 
      href: '#festive-offer',
      isFestive: true 
    },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 900,
      transition: 'all 300ms ease',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(16px)',
      boxShadow: isScrolled ? '0 4px 20px rgba(11, 37, 69, 0.08)' : '0 1px 4px rgba(11, 37, 69, 0.04)',
      borderBottom: '1px solid var(--color-border-light)',
      padding: isScrolled ? '12px 0' : '18px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} style={{ textDecoration: 'none' }}>
          <BrandLogo size={isScrolled ? 'normal' : 'normal'} />
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '26px' }} className="desktop-nav">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                fontSize: '0.92rem',
                fontWeight: item.isFestive ? 700 : 500,
                color: item.isFestive ? 'var(--color-festive-amber)' : 'var(--color-navy-800)',
                padding: item.isFestive ? '5px 12px' : '6px 2px',
                borderRadius: item.isFestive ? '20px' : '0',
                background: item.isFestive ? 'var(--color-festive-light)' : 'transparent',
                border: item.isFestive ? '1px solid var(--color-festive-border)' : 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all var(--transition-fast)'
              }}
              className="nav-hover-item"
            >
              {item.isFestive && <Tag size={13} />}
              {item.label}
            </a>
          ))}
          <button
            onClick={onOpenAbout}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.92rem',
              fontWeight: 500,
              color: 'var(--color-navy-800)',
              cursor: 'pointer',
              padding: '6px 2px'
            }}
          >
            About Us
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href={`mailto:${siteConfig.brand.email}`}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-navy-800)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border-light)'
            }}
            className="desktop-email"
          >
            <Mail size={15} color="var(--color-cyan-500)" />
            <span>{siteConfig.brand.email}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="btn btn-primary btn-sm"
            style={{ fontWeight: 700, padding: '10px 20px', letterSpacing: '0.02em' }}
          >
            <Calendar size={16} />
            <span>BOOK NOW</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-light)',
              background: 'var(--color-bg-surface)',
              color: 'var(--color-navy-800)',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(16px)',
          zIndex: 899,
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto',
          animation: 'fadeIn 200ms ease-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ 
              padding: '12px 16px', 
              background: 'var(--color-festive-light)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-festive-border)',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }} onClick={(e) => handleNavClick(e, '#festive-offer')}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-festive-amber)', fontWeight: 700 }}>
                <Sparkles size={18} />
                <span>Aayudha Pooja Special Offer</span>
              </div>
              <ChevronRight size={18} color="var(--color-festive-amber)" />
            </div>

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--color-navy-800)',
                  borderBottom: '1px solid var(--color-bg-subtle)'
                }}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} color="var(--color-text-light)" />
              </a>
            ))}

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAbout(); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: 'var(--color-navy-800)',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                width: '100%',
                cursor: 'pointer'
              }}
            >
              <span>About V Cleaning Services</span>
              <ChevronRight size={18} color="var(--color-text-light)" />
            </button>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href={`mailto:${siteConfig.brand.email}`}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Mail size={18} color="var(--color-cyan-500)" />
              <span>Email: {siteConfig.brand.email}</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={18} />
              <span>BOOK A CLEANING NOW</span>
            </button>
          </div>
        </div>
      )}

      {/* Inline styles for responsive header */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-email { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .nav-hover-item:hover {
          color: var(--color-cyan-500) !important;
        }
      `}</style>
    </header>
  );
};
