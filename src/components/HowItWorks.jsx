import React from 'react';
import { 
  ListChecks, 
  FileText, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconComponents = {
  ListChecks,
  FileText,
  Calendar,
  Sparkle: Sparkles
};

export const HowItWorks = ({ onOpenBooking }) => {
  return (
    <section id="how-it-works" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge blue">
            <Sparkles size={14} />
            EFFORTLESS PROCESS
          </span>
          <h2 className="section-title">
            HOW IT <span className="text-gradient">WORKS</span>
          </h2>
          <p className="section-subtitle">
            Book professional cleaning for your home or organization in four simple, seamless steps.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          position: 'relative'
        }}>
          {siteConfig.howItWorks.map((stepItem, index) => {
            const Icon = iconComponents[stepItem.icon] || Sparkles;
            return (
              <div
                key={index}
                className="card"
                style={{
                  padding: '32px 24px',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid var(--color-border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                {/* Step Number Tag */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-cyan-500)',
                    lineHeight: 1
                  }}>
                    {stepItem.step}
                  </div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--color-cyan-100)',
                    color: 'var(--color-royal-600)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} />
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: 'var(--color-navy-800)',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em'
                }}>
                  {stepItem.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.5
                }}>
                  {stepItem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div style={{
          marginTop: '44px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => onOpenBooking()}
            className="btn btn-primary btn-lg"
            style={{ fontWeight: 700 }}
          >
            <span>Ready to Get Started? Book Now</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};
