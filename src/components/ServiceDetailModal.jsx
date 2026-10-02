import React from 'react';
import { 
  X, 
  Check, 
  XCircle, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Wrench, 
  Calendar, 
  Calculator, 
  Star,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Table
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const ServiceDetailModal = ({ service, onClose, onOpenBooking, onOpenQuote }) => {
  if (!service) return null;

  const isCommercialOrCampus = ['commercial-property-cleaning', 'college-campus-cleaning'].includes(service.id);
  const isApartment = service.id === 'full-home-cleaning';
  const isVilla = service.id === 'villa-deep-cleaning';
  const isHeavyStains = service.id === 'heavy-stains-cleaning';

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '840px', padding: 0 }}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          aria-label="Close service details"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid var(--color-border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: 'var(--shadow-md)',
            color: 'var(--color-navy-800)'
          }}
        >
          <X size={20} />
        </button>

        {/* Hero Image Header */}
        <div style={{ position: 'relative', height: '280px' }}>
          <img
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(28, 25, 23, 0.92) 0%, rgba(28, 25, 23, 0.45) 60%, transparent 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '28px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="section-badge" style={{ margin: 0, padding: '4px 12px', fontSize: '0.78rem', background: 'rgba(249, 115, 22, 0.25)', color: '#FFEDD5', border: '1px solid var(--color-orange-500)' }}>
                <Sparkles size={12} /> V CLEANING SPECIALTY
              </span>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.2)', 
                color: '#FFFFFF', 
                padding: '4px 10px', 
                borderRadius: 'var(--radius-full)', 
                fontSize: '0.78rem', 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Clock size={12} /> {service.duration}
              </span>
            </div>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '30px 28px', display: 'flex', flexDirection: 'column', gap: '28px', maxHeight: '65vh', overflowY: 'auto' }}>
          
          {/* Overview */}
          <div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '8px' }}>
              Service Overview
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              {service.detailedDescription}
            </p>
          </div>

          {/* Pricing Highlight Box */}
          <div style={{
            background: '#FFF7ED',
            border: '1.5px solid var(--color-orange-200)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-orange-800)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Transparent Pricing Structure
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-orange-950)', marginTop: '2px' }}>
                {service.pricingNote}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-orange-800)', marginTop: '4px' }}>
                *Official rate card pricing with zero hidden charges.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {isCommercialOrCampus ? (
                <button
                  onClick={() => { onClose(); onOpenQuote(service.id); }}
                  className="btn btn-primary btn-sm"
                  style={{ fontWeight: 700 }}
                >
                  <Calculator size={15} />
                  <span>Request Custom Quote</span>
                </button>
              ) : (
                <button
                  onClick={() => { onClose(); onOpenBooking(service.id); }}
                  className="btn btn-accent btn-sm"
                  style={{ fontWeight: 700 }}
                >
                  <Calendar size={15} />
                  <span>Book This Service</span>
                </button>
              )}
            </div>
          </div>

          {/* DEDICATED RATE CARD TABLES */}
          {isApartment && (
            <div style={{
              background: '#FFFFFF',
              border: '1.5px solid var(--color-border-light)',
              borderRadius: '16px',
              padding: '20px',
              overflowX: 'auto'
            }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy-900)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Table size={18} color="var(--color-orange-600)" />
                <span>Apartment Full Home Deep Cleaning Rate Card</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#FFF7ED', borderBottom: '2px solid var(--color-orange-200)', textAlign: 'left' }}>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>BHK Configuration</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Approx Area</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Empty (Vacant)</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Occupied (Furnished)</th>
                  </tr>
                </thead>
                <tbody>
                  {siteConfig.pricingMatrix.apartmentPricing.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--color-border-subtle)', background: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700, color: 'var(--color-navy-900)' }}>{row.bhk}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--color-text-light)' }}>{row.sqftRange}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-600)' }}>₹{row.emptyPrice.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-700)' }}>₹{row.occupiedPrice.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isVilla && (
            <div style={{
              background: '#FFFFFF',
              border: '1.5px solid var(--color-border-light)',
              borderRadius: '16px',
              padding: '20px',
              overflowX: 'auto'
            }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy-900)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Table size={18} color="var(--color-orange-600)" />
                <span>Individual Villa & Plot Deep Cleaning Rate Card (by Sq. Ft.)</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#FFF7ED', borderBottom: '2px solid var(--color-orange-200)', textAlign: 'left' }}>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Tier</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Square Feet & Type</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Empty (Vacant)</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Occupied (Furnished)</th>
                  </tr>
                </thead>
                <tbody>
                  {siteConfig.pricingMatrix.villaPricing.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--color-border-subtle)', background: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700, color: 'var(--color-navy-900)' }}>{row.tier}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--color-text-light)' }}>{row.name}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-600)' }}>₹{row.emptyPrice.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-700)' }}>₹{row.occupiedPrice.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {isHeavyStains && (
            <div style={{
              background: '#FFFFFF',
              border: '1.5px solid var(--color-border-light)',
              borderRadius: '16px',
              padding: '20px',
              overflowX: 'auto'
            }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy-900)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Table size={18} color="var(--color-orange-600)" />
                <span>Sticker Marks, Adhesive & Heavy Stains Rate Card</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: '#FFF7ED', borderBottom: '2px solid var(--color-orange-200)', textAlign: 'left' }}>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Tier</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Configuration / Area</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-950)' }}>Stain Removal Price</th>
                  </tr>
                </thead>
                <tbody>
                  {siteConfig.pricingMatrix.heavyStainsPricing.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--color-border-subtle)', background: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700, color: 'var(--color-navy-900)' }}>{row.tier}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--color-text-light)' }}>{row.name} ({row.sqftRange})</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-600)' }}>₹{row.price.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Inclusions vs Exclusions Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            
            {/* What's Included */}
            <div style={{
              background: 'var(--color-green-50)',
              border: '1px solid var(--color-green-100)',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-green-600)', fontWeight: 800, fontSize: '1.02rem', marginBottom: '14px' }}>
                <Check size={18} strokeWidth={3} />
                <span>What's Included</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.included.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--color-navy-800)' }}>
                    <div style={{ color: 'var(--color-green-500)', marginTop: '3px', flexShrink: 0 }}>
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Not Included */}
            <div style={{
              background: '#FFF1F2',
              border: '1px solid #FFE4E6',
              borderRadius: '16px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E11D48', fontWeight: 800, fontSize: '1.02rem', marginBottom: '14px' }}>
                <XCircle size={18} />
                <span>What's Not Included</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.notIncluded.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: '#881337' }}>
                    <div style={{ color: '#E11D48', marginTop: '3px', flexShrink: 0 }}>
                      <X size={14} strokeWidth={2.5} />
                    </div>
                    <span style={{ lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 4-Step Cleaning Process */}
          <div>
            <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="var(--color-orange-500)" />
              <span>Standardized 4-Step Execution Process</span>
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px' }}>
              {service.cleaningProcess.map((proc, index) => (
                <div key={index} style={{
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: '14px',
                  padding: '16px',
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--color-orange-500)',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '6px'
                  }}>
                    0{index + 1}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-navy-800)', fontWeight: 600, lineHeight: 1.35 }}>
                    {proc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment & Chemicals Used */}
          <div style={{
            background: 'var(--color-bg-subtle)',
            borderRadius: '16px',
            padding: '20px 24px'
          }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Wrench size={16} color="var(--color-orange-600)" />
              <span>Professional Equipment & Eco-Safe Chemicals Deployed</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {service.equipmentUsed.map((eq, i) => (
                <span key={i} style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border-light)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--color-navy-800)'
                }}>
                  ✓ {eq}
                </span>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '10px' }}>
              Why Customers Love This Service:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              {service.benefits.map((ben, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '0.88rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.4
                }}>
                  <ShieldCheck size={16} color="var(--color-green-500)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{ben}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            paddingTop: '20px',
            borderTop: '1px solid var(--color-border-light)'
          }}>
            <button
              onClick={onClose}
              className="btn btn-secondary"
            >
              Back to Services
            </button>

            <div style={{ display: 'flex', gap: '12px' }}>
              {isCommercialOrCampus ? (
                <button
                  onClick={() => { onClose(); onOpenQuote(service.id); }}
                  className="btn btn-primary"
                  style={{ fontWeight: 700 }}
                >
                  <Calculator size={17} />
                  <span>Request Corporate Quote</span>
                </button>
              ) : (
                <button
                  onClick={() => { onClose(); onOpenBooking(service.id); }}
                  className="btn btn-primary"
                  style={{ fontWeight: 700 }}
                >
                  <Calendar size={17} />
                  <span>Proceed to Book ({service.title})</span>
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
