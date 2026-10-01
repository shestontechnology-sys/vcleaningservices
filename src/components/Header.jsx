import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  Mail, 
  Menu, 
  X, 
  Calendar, 
  Tag, 
  ChevronRight,
  ShieldCheck,
  Phone,
  Home,
  Briefcase,
  Award,
  HelpCircle,
  Info,
  Layers,
  Sparkle
} from 'lucide-react';

export const BrandLogo = ({ size = 'normal', light = false }) => {
  const isLarge = size === 'large';
  return (
    <div style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      gap: '12px', 
      cursor: 'pointer',
      userSelect: 'none',
      flexShrink: 0
    }}>
      <div style={{
        width: isLarge ? '52px' : '46px',
        height: isLarge ? '52px' : '46px',
        borderRadius: '50%',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(234, 88, 12, 0.28)',
        border: '2.5px solid #EA580C',
        position: 'relative',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'transform 200ms ease'
      }} className="logo-icon-box">
        <img 
          src="/logo.png" 
          alt="V Cleaning Services Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ 
          fontFamily: 'var(--font-heading)',
          fontWeight: 800, 
          fontSize: isLarge ? '1.35rem' : '1.18rem', 
          color: light ? '#FFFFFF' : 'var(--color-navy-900)',
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          whiteSpace: 'nowrap'
        }}>
          V CLEANING <span style={{ color: 'var(--color-orange-500)' }}>SERVICES</span>
        </div>
        <div style={{ 
          fontSize: isLarge ? '0.74rem' : '0.68rem', 
          fontWeight: 700, 
          color: light ? 'rgba(255, 255, 255, 0.9)' : 'var(--color-orange-700)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          lineHeight: 1.2,
          whiteSpace: 'nowrap'
        }} className="brand-tagline">
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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Our Work', href: '#our-work' },
    { 
      label: 'Festive Offer', 
      href: '#festive-offer',
      isFestive: true 
    },
    { label: 'FAQ', href: '#faq' },
    { label: 'About Us', isModal: true },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (item.isModal) {
      onOpenAbout();
      return;
    }
    const element = document.querySelector(item.href);
    if (element) {
      const headerOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className="main-sticky-header"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'background-color 250ms ease, box-shadow 250ms ease, padding 250ms ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(124, 45, 18, 0.08)' : '0 1px 3px rgba(124, 45, 18, 0.04)',
        borderBottom: '1px solid var(--color-border-light)',
        padding: isScrolled ? '10px 0' : '14px 0'
      }}
    >
      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        
        {/* 1. Left: Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, { href: '#hero' })} 
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          aria-label="V Cleaning Services Home"
        >
          <BrandLogo size="normal" />
        </a>

        {/* 2. Center: Enclosed Floating Navigation Box */}
        <nav 
          className="desktop-nav-box" 
          aria-label="Main Navigation Box"
        >
          {navLinks.map((item) => {
            if (item.isModal) {
              return (
                <button
                  key={item.label}
                  onClick={() => onOpenAbout()}
                  className="nav-box-pill nav-box-button"
                  type="button"
                >
                  <span>{item.label}</span>
                </button>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`nav-box-pill ${item.isFestive ? 'nav-box-festive' : ''}`}
              >
                {item.isFestive && <Sparkles size={13} style={{ flexShrink: 0 }} />}
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* 3. Right: CTA Actions & Mobile Toggle */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px',
          flexShrink: 0
        }}>
          {/* Quick email pill link on wide screens */}
          <a
            href={`mailto:${siteConfig.brand.email}`}
            className="desktop-email-pill"
            title={`Send email to ${siteConfig.brand.email}`}
          >
            <Mail size={15} color="var(--color-orange-500)" style={{ flexShrink: 0 }} />
            <span style={{ whiteSpace: 'nowrap', fontWeight: 600 }}>
              {siteConfig.brand.email}
            </span>
          </a>

          {/* Primary Book Now CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="btn btn-primary nav-book-btn"
            style={{ 
              fontWeight: 700, 
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              height: '40px',
              padding: '0 18px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '7px',
              fontSize: '0.9rem'
            }}
          >
            <Calendar size={15} style={{ flexShrink: 0 }} />
            <span>BOOK NOW</span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="mobile-menu-btn"
            type="button"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="mobile-drawer-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Festive Campaign Banner Highlight */}
            <div 
              className="mobile-festive-card"
              onClick={(e) => handleNavClick(e, { href: '#festive-offer' })}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9A3412', fontWeight: 700, fontSize: '0.95rem' }}>
                <Sparkles size={18} color="#EA580C" />
                <span>Aayudha Pooja Special Offer</span>
              </div>
              <ChevronRight size={18} color="#EA580C" />
            </div>

            {/* Nav list enclosed inside card box */}
            <div className="mobile-nav-box">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href || '#'}
                  onClick={(e) => handleNavClick(e, item)}
                  className="mobile-nav-item"
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} color="var(--color-text-light)" />
                </a>
              ))}
            </div>

            {/* Mobile Footer CTAs */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--color-border-light)' }}>
              <a
                href={`mailto:${siteConfig.brand.email}`}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', height: '44px' }}
              >
                <Mail size={17} color="var(--color-orange-500)" />
                <span>Email: {siteConfig.brand.email}</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', height: '44px', fontWeight: 700 }}
                type="button"
              >
                <Calendar size={17} />
                <span>BOOK A CLEANING NOW</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Component CSS for Responsive Behavior & Pixel-Perfect Alignment */}
      <style>{`
        /* Floating Navigation Box (Capsule / Island Container) */
        .desktop-nav-box {
          display: none;
          align-items: center;
          gap: 3px;
          margin: 0 auto;
          background: rgba(255, 247, 237, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(253, 186, 116, 0.7);
          border-radius: 9999px;
          padding: 4px 6px;
          box-shadow: 0 2px 8px rgba(124, 45, 18, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9);
          transition: all 200ms ease;
        }

        .desktop-nav-box:hover {
          border-color: rgba(234, 88, 12, 0.45);
          box-shadow: 0 4px 14px rgba(124, 45, 18, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1);
        }

        /* Nav Pills inside the Box */
        .nav-box-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          height: 34px;
          padding: 0 11px;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--color-navy-900);
          text-decoration: none;
          border-radius: 9999px;
          transition: all 180ms cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          cursor: pointer;
          background: transparent;
          border: none;
          line-height: 1;
        }

        .nav-box-pill:hover {
          color: var(--color-orange-600);
          background: #FFFFFF;
          box-shadow: 0 2px 6px rgba(124, 45, 18, 0.1);
          transform: translateY(-1px);
        }

        .nav-box-button {
          font-family: inherit;
        }

        /* Festive Badge inside the Box */
        .nav-box-festive {
          color: #9A3412 !important;
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
          border: 1px solid #FDBA74;
          padding: 0 11px;
          font-weight: 700;
          box-shadow: 0 1px 3px rgba(234, 88, 12, 0.12);
        }

        .nav-box-festive:hover {
          background: #FED7AA;
          color: #7C2D12 !important;
          box-shadow: 0 2px 8px rgba(234, 88, 12, 0.2);
          transform: translateY(-1px);
        }

        .desktop-email-pill {
          display: none;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--color-navy-900);
          padding: 0 14px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          text-decoration: none;
          white-space: nowrap;
          transition: all 180ms ease;
          flex-shrink: 0;
        }

        .desktop-email-pill:hover {
          border-color: var(--color-orange-500);
          color: var(--color-orange-600);
          background: #FFFFFF;
          box-shadow: 0 2px 8px rgba(234, 88, 12, 0.15);
        }

        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-light);
          background: var(--color-bg-surface);
          color: var(--color-navy-900);
          cursor: pointer;
          transition: all 180ms ease;
          flex-shrink: 0;
        }

        .mobile-menu-btn:hover {
          background: var(--color-bg-subtle);
          border-color: var(--color-orange-500);
          color: var(--color-orange-600);
        }

        /* Desktop Breakpoints */
        @media (min-width: 1040px) {
          .desktop-nav-box {
            display: inline-flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }

        @media (min-width: 1240px) {
          .desktop-email-pill {
            display: inline-flex !important;
          }
          .nav-box-pill {
            padding: 0 12px;
            font-size: 0.86rem;
          }
          .desktop-nav-box {
            gap: 3px;
            padding: 4px 6px;
          }
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 540px) {
          .brand-tagline {
            display: none;
          }
          .nav-book-btn span {
            display: inline;
          }
          .nav-book-btn {
            padding: 0 12px !important;
            font-size: 0.82rem !important;
            height: 36px !important;
          }
        }

        /* Mobile Drawer Styles */
        .mobile-drawer-overlay {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(28, 25, 23, 0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 899;
          animation: fadeIn 180ms ease-out;
          display: flex;
          flex-direction: column;
        }

        .mobile-drawer-content {
          background: #FFFFFF;
          border-bottom: 2px solid var(--color-border-light);
          padding: 20px 18px;
          max-height: calc(100vh - 70px);
          overflow-y: auto;
          box-shadow: 0 20px 30px rgba(124, 45, 18, 0.15);
          animation: scaleUp 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-festive-card {
          padding: 12px 14px;
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
          border-radius: var(--radius-md);
          border: 1px solid #FDBA74;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .mobile-nav-box {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          padding: 6px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--color-navy-900);
          text-decoration: none;
          transition: background 150ms ease;
        }

        .mobile-nav-item:hover, .mobile-nav-item:active {
          background: #FFFFFF;
          color: var(--color-orange-600);
          box-shadow: 0 1px 4px rgba(124, 45, 18, 0.05);
        }
      `}</style>
    </header>
  );
};
