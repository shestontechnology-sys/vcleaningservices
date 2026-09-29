import React from 'react';
import { 
  GraduationCap, 
  ClipboardCheck, 
  Wrench, 
  Clock, 
  Building2, 
  Sliders, 
  Users, 
  HeartHandshake,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  GraduationCap,
  ClipboardCheck,
  Wrench,
  Clock,
  Building2,
  Sliders,
  Users,
  HeartHandshake
};

export const WhyChooseUs = ({ onOpenBooking }) => {
  return (
    <section id="why-choose-us" className="section-padding" style={{ background: 'var(--color-bg-body)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge blue">
            <Sparkles size={14} />
            EXCELLENCE IN EVERY CORNER
          </span>
          <h2 className="section-title">
            WHY CHOOSE <span className="text-gradient">V CLEANING SERVICES?</span>
          </h2>
          <p className="section-subtitle">
            Setting the gold standard for hygiene, customer care, and industrial equipment across South India.
          </p>
        </div>

        {/* Highlight Banner with Key Track Record */}
        <div style={{
          background: 'linear-gradient(135deg, #0B2545 0%, #134074 100%)',
          borderRadius: '24px',
          padding: '32px 36px',
          color: '#FFFFFF',
          marginBottom: '48px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          alignItems: 'center',
          boxShadow: 'var(--shadow-xl)'
        }} className="why-highlight-grid">
          <div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-cyan-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              Proven Track Record
            </div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25 }}>
              Over 1000+ Houses & 10+ College Campuses Cleaned with Zero Compromise
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '8px', maxWidth: '600px' }}>
              From cozy 1 BHK apartments to sprawling 25-acre university campuses, our structured workflows ensure spotless consistency every single time.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            <button
              onClick={() => onOpenBooking()}
              className="btn btn-accent"
              style={{ fontWeight: 700 }}
            >
              <span>Experience The Difference</span>
            </button>
          </div>
        </div>

        {/* 8 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '24px'
        }}>
          {siteConfig.whyChooseUs.map((card, index) => {
            const IconComponent = iconMap[card.icon] || Sparkles;
            return (
              <div
                key={index}
                className="card"
                style={{
                  padding: '28px 24px',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid var(--color-border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  transition: 'all var(--transition-base)'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  background: 'var(--color-cyan-100)',
                  color: 'var(--color-royal-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0, 166, 251, 0.15)'
                }}>
                  <IconComponent size={24} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} color="var(--color-green-500)" style={{ flexShrink: 0 }} />
                  <h4 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--color-navy-800)', lineHeight: 1.3 }}>
                    {card.title}
                  </h4>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .why-highlight-grid {
            grid-template-columns: 2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
