import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { BrandLogo } from './Header';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  Heart,
  Database,
  Calendar
} from 'lucide-react';

export const Footer = ({ onOpenBooking, onOpenOffers, onOpenAbout, onOpenSchema }) => {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', action: onOpenAbout },
    { label: 'Cleaning Services', href: '#services' },
    { label: 'Aayudha Pooja Offer', action: onOpenOffers },
    { label: 'Our Work Gallery', href: '#our-work' },
    { label: 'Frequently Asked Questions', href: '#faq' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const serviceLinks = [
    'Full Home Cleaning',
    'Commercial Property Cleaning',
    'College Campus Cleaning',
    'Kitchen Deep Cleaning',
    'Bathroom Deep Cleaning',
    'Sofa & Upholstery Cleaning',
    'Move-In / Move-Out Cleaning',
    'Customized Cleaning Services'
  ];

  const handleLinkClick = (e, href, action) => {
    if (action) {
      e.preventDefault();
      action();
      return;
    }
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #1C1917 0%, #0C0A09 100%)',
      color: '#E7D7C8',
      paddingTop: '64px',
      paddingBottom: '36px',
      borderTop: '2px solid rgba(249, 115, 22, 0.3)'
    }}>
      <div className="container">
        
        {/* Top 4-Column Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          
          {/* Col 1: Brand & Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: '#FFFFFF', padding: '10px 14px', borderRadius: '16px', display: 'inline-block', width: 'fit-content', boxShadow: '0 4px 14px rgba(0,0,0,0.2)' }}>
              <BrandLogo size="normal" />
            </div>

            <p style={{ fontSize: '0.92rem', color: '#D6D3D1', lineHeight: 1.6, marginTop: '4px' }}>
              Professional cleaning company providing residential, commercial, and large-scale educational institutional cleaning services.
            </p>

            <div style={{ fontSize: '0.85rem', color: 'var(--color-orange-400)', fontWeight: 700 }}>
              1000+ Houses Cleaned &bull; 10+ College Campuses Cleaned
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              <button
                onClick={() => onOpenBooking()}
                className="btn btn-primary btn-sm"
                style={{ fontWeight: 700 }}
              >
                <Calendar size={14} />
                <span>BOOK NOW</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px', letterSpacing: '-0.01em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href || '#'}
                    onClick={(e) => handleLinkClick(e, link.href, link.action)}
                    style={{
                      fontSize: '0.9rem',
                      color: '#A8A29E',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 150ms ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FB923C'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#A8A29E'}
                  >
                    <ChevronRight size={14} color="var(--color-orange-500)" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services List */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px', letterSpacing: '-0.01em' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    style={{
                      fontSize: '0.9rem',
                      color: '#A8A29E',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 150ms ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FB923C'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#A8A29E'}
                  >
                    <ChevronRight size={14} color="var(--color-orange-500)" />
                    <span>{srv}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact & Legal Disclaimers */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px', letterSpacing: '-0.01em' }}>
              Official Contact
            </h4>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
              <Mail size={16} color="var(--color-orange-400)" />
              <a href={`mailto:${siteConfig.brand.email}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>
                {siteConfig.brand.email}
              </a>
            </div>

            <div style={{
              marginTop: '12px',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              fontSize: '0.78rem',
              color: '#D6D3D1',
              lineHeight: 1.4
            }}>
              <ShieldCheck size={14} color="var(--color-orange-400)" style={{ display: 'inline', marginRight: '4px' }} />
              Field cleaning professionals trained through industry experience associated with Urban Company and NoBroker workflows.
            </div>

            <button
              onClick={onOpenSchema}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-orange-400)',
                fontSize: '0.8rem',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '6px'
              }}
            >
              <Database size={14} />
              <span>Developer Backend & Schema Details</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.85rem',
          color: '#A8A29E'
        }}>
          <div>
            &copy; {currentYear} <strong>{siteConfig.brand.name}</strong>. All Rights Reserved.
          </div>
          <div style={{ color: 'var(--color-orange-300)' }}>
            {siteConfig.brand.tagline}
          </div>
        </div>

      </div>
    </footer>
  );
};
