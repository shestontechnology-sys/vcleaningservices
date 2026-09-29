import React from 'react';
import { Calendar, Calculator, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingActionButtons = ({ onOpenBooking, onOpenQuote }) => {
  return (
    <>
      {/* Floating Action Button (Desktop & Tablet) */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 880
      }} className="floating-actions-desktop">
        
        {/* Floating Quick Book Button */}
        <button
          onClick={() => onOpenBooking()}
          aria-label="Book a Cleaning Service"
          className="btn btn-primary"
          style={{
            padding: '14px 22px',
            borderRadius: 'var(--radius-full)',
            boxShadow: '0 8px 24px rgba(11, 37, 69, 0.35)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 700,
            fontSize: '0.94rem'
          }}
        >
          <Calendar size={18} />
          <span>BOOK A CLEANING</span>
        </button>

      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--color-border-light)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 885,
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.08)'
      }} className="mobile-bottom-bar">

        <button
          onClick={() => onOpenQuote()}
          className="btn btn-secondary btn-sm"
          style={{ flex: 1, padding: '12px 8px', fontSize: '0.9rem', fontWeight: 700 }}
        >
          <Calculator size={16} />
          <span>GET QUOTE</span>
        </button>

        <button
          onClick={() => onOpenBooking()}
          className="btn btn-primary btn-sm"
          style={{ flex: 1.2, padding: '12px 8px', fontSize: '0.9rem', fontWeight: 800 }}
        >
          <Calendar size={16} />
          <span>BOOK NOW</span>
        </button>

      </div>

      <style>{`
        .mobile-bottom-bar {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: flex !important;
          }
          .floating-actions-desktop {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
