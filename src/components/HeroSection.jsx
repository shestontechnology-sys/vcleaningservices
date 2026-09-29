import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  Calendar, 
  Calculator, 
  CheckCircle2, 
  Building2, 
  Home, 
  ShieldCheck, 
  Star,
  Award,
  ArrowRight
} from 'lucide-react';

export const HeroSection = ({ onOpenBooking, onOpenQuote }) => {
  const [houseCount, setHouseCount] = useState(0);
  const [campusCount, setCampusCount] = useState(0);

  // Animated number counter on load
  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setHouseCount(Math.min(Math.floor(progress * siteConfig.statistics.housesCleaned), siteConfig.statistics.housesCleaned));
      setCampusCount(Math.min(Math.floor(progress * siteConfig.statistics.campusesCleaned), siteConfig.statistics.campusesCleaned));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative',
      paddingTop: '60px',
      paddingBottom: '70px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FC 60%, #EBF4FC 100%)',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Radial Blobs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 166, 251, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '-5%',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            
            {/* Top Brand Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span className="section-badge blue" style={{ margin: 0 }}>
                <Sparkles size={14} color="var(--color-cyan-500)" />
                V CLEANING SERVICES
              </span>
              <span style={{ 
                fontSize: '0.82rem', 
                color: 'var(--color-green-600)', 
                fontWeight: 700,
                background: 'var(--color-green-50)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-green-100)',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <ShieldCheck size={13} /> Multi-Platform Trained
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'var(--color-navy-900)'
            }}>
              Professional Cleaning for a <span className="text-gradient">Brighter Tomorrow</span>
            </h1>

            {/* Supporting Text */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              maxWidth: '560px'
            }}>
              Professional cleaning solutions for homes, commercial properties, offices, and educational institutions. Experience deep, meticulous hygiene with our certified professionals.
            </p>

            {/* Key Statistics Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              maxWidth: '480px',
              padding: '16px 20px',
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid var(--color-border-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--color-cyan-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-royal-600)'
                }}>
                  <Home size={24} />
                </div>
                <div>
                  <div style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem', 
                    fontWeight: 800, 
                    color: 'var(--color-navy-800)',
                    lineHeight: 1
                  }}>
                    {houseCount}+
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-light)', marginTop: '2px' }}>
                    Houses Cleaned
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderLeft: '1px solid var(--color-border-light)', paddingLeft: '16px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--color-green-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-green-600)'
                }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <div style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem', 
                    fontWeight: 800, 
                    color: 'var(--color-navy-800)',
                    lineHeight: 1
                  }}>
                    {campusCount}+
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-light)', marginTop: '2px' }}>
                    College Campuses Cleaned
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '14px',
              marginTop: '6px'
            }}>
              <button
                onClick={() => onOpenBooking()}
                className="btn btn-primary btn-lg"
                style={{ fontWeight: 700 }}
              >
                <Calendar size={19} />
                <span>BOOK A CLEANING</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => onOpenQuote()}
                className="btn btn-secondary btn-lg"
                style={{ fontWeight: 600 }}
              >
                <Calculator size={19} color="var(--color-royal-600)" />
                <span>GET A QUOTE</span>
              </button>
            </div>

            {/* Trust bullet markers */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '18px',
              fontSize: '0.88rem',
              color: 'var(--color-text-muted)',
              fontWeight: 500,
              paddingTop: '6px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--color-green-500)" />
                <span>Eco-Friendly Sanitizers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--color-green-500)" />
                <span>Industrial Scrubbers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="var(--color-green-500)" />
                <span>Transparent Pricing</span>
              </div>
            </div>

          </div>

          {/* Right Column Visual with Floating Cards */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Hero Main Image Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '540px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(11, 37, 69, 0.22)',
              border: '4px solid #FFFFFF',
              background: '#FFFFFF'
            }}>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Professional V Cleaning Services team performing deep cleaning in modern home"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="eager"
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(7, 23, 44, 0.75) 0%, transparent 100%)',
                padding: '24px 20px 16px 20px',
                color: '#FFFFFF'
              }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-cyan-400)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Spotless Transformation
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700 }}>
                  Hospital-Grade Sanitization & Deep Floor Machine Buffing
                </div>
              </div>
            </div>

            {/* Floating Card 1: 1000+ Homes Cleaned */}
            <div className="glass animate-float" style={{
              position: 'absolute',
              top: '20px',
              left: '-20px',
              padding: '12px 18px',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 3
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00A6FB 0%, #134074 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Home size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--color-navy-800)' }}>
                  1000+ Homes Cleaned
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--color-text-light)', fontWeight: 600 }}>
                  Residential Excellence
                </div>
              </div>
            </div>

            {/* Floating Card 2: Trained Professionals */}
            <div className="glass" style={{
              position: 'absolute',
              bottom: '40px',
              left: '-15px',
              padding: '12px 18px',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 3,
              animation: 'floatAnim 4.5s ease-in-out infinite 1s'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Award size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--color-navy-800)' }}>
                  Trained Professionals
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--color-green-600)', fontWeight: 600 }}>
                  Verified & Experienced
                </div>
              </div>
            </div>

            {/* Floating Card 3: Professional Cleaning */}
            <div className="glass-dark" style={{
              position: 'absolute',
              top: '40px',
              right: '-15px',
              padding: '12px 18px',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 3,
              animation: 'floatAnim 5s ease-in-out infinite 0.5s'
            }}>
              <Sparkles size={20} color="var(--color-festive-gold)" />
              <div>
                <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Professional Cleaning
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-cyan-400)', fontWeight: 500 }}>
                  100% Quality Guaranteed
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
