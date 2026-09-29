import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, Tag, ArrowRight, PhoneCall, Gift, Check, Flame } from 'lucide-react';

export const FestiveBanner = ({ onOpenBooking, onOpenContact, onOpenOffers }) => {
  const campaign = siteConfig.campaigns.aayudhaPooja;

  return (
    <section id="festive-offer" style={{
      position: 'relative',
      padding: '48px 0',
      background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 45%, #FDE68A 100%)',
      borderTop: '2px solid #FCD34D',
      borderBottom: '2px solid #FCD34D',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-festive)'
    }}>
      {/* Decorative Traditional Indian Marigold Garland Pattern Border SVG */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '8px',
        background: 'repeating-linear-gradient(90deg, #F59E0B, #F59E0B 16px, #D97706 16px, #D97706 32px, #10B981 32px, #10B981 40px)',
        opacity: 0.9
      }} />

      {/* Decorative Diya / Sparkle Background Glows */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '4%',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(254, 243, 199, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          alignItems: 'center',
          background: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          padding: '36px 32px',
          border: '1.5px solid #FCD34D',
          boxShadow: '0 12px 32px rgba(217, 119, 6, 0.12)'
        }} className="festive-card-grid">

          {/* Left Column: Festive Badge + Headline + Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span className="section-badge festive" style={{ margin: 0, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Flame size={14} color="#D97706" />
                {campaign.badge}
              </span>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#92400E',
                background: '#FDE68A',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)'
              }}>
                Use Code: <strong>{campaign.promoCode}</strong>
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
              fontWeight: 800,
              color: '#78350F',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              AAYUDHA POOJA <span className="text-gradient-festive">SPECIAL OFFER</span>
            </h2>

            <div style={{ fontSize: '1.18rem', fontWeight: 700, color: '#92400E' }}>
              "{campaign.headline}"
            </div>

            <p style={{ fontSize: '1.02rem', color: '#78350F', lineHeight: 1.5, maxWidth: '620px' }}>
              Get Exclusive Offers on Deep Cleaning, Machinery Care & Surface Polishing for homes, vehicles, offices, and institutions before the auspicious festival.
            </p>

            {/* Festive Highlights Checklist */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '10px',
              marginTop: '6px'
            }}>
              {campaign.perks.map((perk, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#78350F', fontWeight: 600 }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#F59E0B',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Festive Action Box */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'stretch',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #78350F 0%, #92400E 60%, #B45309 100%)',
            padding: '28px 24px',
            borderRadius: '20px',
            color: '#FFFFFF',
            boxShadow: '0 10px 25px rgba(120, 53, 15, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#FDE68A', fontWeight: 700, fontSize: '0.95rem' }}>
              <Gift size={20} />
              <span>Limited Festive Slots</span>
            </div>

            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25 }}>
              Clean Spaces. Blessed Celebrations.
            </div>

            <p style={{ fontSize: '0.88rem', color: '#FEF3C7', lineHeight: 1.4 }}>
              Book your pre-pooja deep cleaning slot in advance to guarantee your preferred timing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '6px' }}>
              <button
                onClick={() => onOpenBooking('full-home-cleaning')}
                className="btn btn-festive"
                style={{
                  background: '#F59E0B',
                  color: '#78350F',
                  fontWeight: 800,
                  fontSize: '1rem',
                  padding: '14px 22px',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)'
                }}
              >
                <span>BOOK NOW</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => onOpenContact()}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255, 255, 255, 0.4)',
                  padding: '11px 18px',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 200ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
              >
                <PhoneCall size={16} />
                <span>CONTACT US</span>
              </button>
            </div>

            <button
              onClick={onOpenOffers}
              style={{
                background: 'none',
                border: 'none',
                color: '#FDE68A',
                fontSize: '0.85rem',
                textDecoration: 'underline',
                cursor: 'pointer',
                marginTop: '4px',
                fontWeight: 600
              }}
            >
              View Full Campaign Details & Terms →
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .festive-card-grid {
            grid-template-columns: 1.7fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
