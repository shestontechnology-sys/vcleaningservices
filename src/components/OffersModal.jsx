import React from 'react';
import { 
  X, 
  Sparkles, 
  Tag, 
  Calendar, 
  Mail, 
  Check, 
  Flame, 
  ArrowRight,
  Gift
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const OffersModal = ({ onClose, onOpenBooking, onOpenContact }) => {
  const campaign = siteConfig.campaigns.aayudhaPooja;

  const offerPackages = [
    {
      title: "Festive Full Home Deep Cleaning",
      target: "Apartments & Villas",
      highlights: [
        "Floor mechanized rotary scrubbing",
        "Kitchen chimney & stove grease wipe",
        "Bathroom hard water scale removal",
        "Free brass diya / lamp polishing detailing"
      ],
      tag: "Most Popular",
      cta: "Book Home Special"
    },
    {
      title: "Commercial & Office Pooja Package",
      target: "Workspaces, Shops & Clinics",
      highlights: [
        "Workstation & desktop sanitization",
        "Glass entrance & window shine",
        "Pantry & washroom deep scrub",
        "Pre-puja prayer area preparation"
      ],
      tag: "Corporate Special",
      cta: "Book Office Special"
    },
    {
      title: "Machinery, Tool & Vehicle Care Add-on",
      target: "Workshops, Factories & Residences",
      highlights: [
        "External industrial machine dust clearance",
        "Vehicle exterior foam wash & glass wipe",
        "Toolbox & workshop surface scrub",
        "Pooja-ready floral setup assistance"
      ],
      tag: "Festive Exclusive",
      cta: "Enquire Machinery Care"
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '860px', padding: 0, overflow: 'hidden' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Offers Modal"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#78350F',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Festive Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #78350F 0%, #92400E 50%, #B45309 100%)',
          padding: '36px 30px',
          color: '#FFFFFF',
          position: 'relative'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(254, 243, 199, 0.2)', padding: '5px 14px', borderRadius: 'var(--radius-full)', color: '#FEF3C7', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px' }}>
            <Flame size={14} color="#F59E0B" />
            <span>SEASONAL FESTIVE SPECIALS</span>
          </div>

          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            {campaign.title}
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#FEF3C7', marginTop: '6px', maxWidth: '600px' }}>
            {campaign.headline}. Use Promo Code <strong>{campaign.promoCode}</strong> during booking for priority slots.
          </p>
        </div>

        {/* Offer Cards Grid */}
        <div style={{ padding: '32px 28px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            {offerPackages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFBEB',
                  border: '1.5px solid #FCD34D',
                  borderRadius: '18px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: '0 4px 12px rgba(217, 119, 6, 0.08)'
                }}
              >
                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#92400E',
                    background: '#FDE68A',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    marginBottom: '10px'
                  }}>
                    {pkg.tag}
                  </span>

                  <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#78350F', marginBottom: '4px' }}>
                    {pkg.title}
                  </h3>

                  <div style={{ fontSize: '0.82rem', color: '#B45309', fontWeight: 600, marginBottom: '14px' }}>
                    Ideal for: {pkg.target}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                    {pkg.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#78350F' }}>
                        <Check size={14} color="#D97706" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => { onClose(); onOpenBooking(); }}
                  className="btn btn-festive btn-sm"
                  style={{ width: '100%', fontWeight: 700 }}
                >
                  <Calendar size={14} />
                  <span>{pkg.cta}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Action / Contact Notice */}
          <div style={{
            background: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border-light)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px'
          }}>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-navy-800)' }}>
                Need customized festival cleaning for large factories, temples, or schools?
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                Contact our customer desk for a customized festive package estimate.
              </div>
            </div>

            <button
              onClick={() => { onClose(); onOpenContact(); }}
              className="btn btn-secondary btn-sm"
              style={{ fontWeight: 600 }}
            >
              <Mail size={14} color="var(--color-cyan-500)" />
              <span>Contact for Special Quote</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
