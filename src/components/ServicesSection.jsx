import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  Star, 
  Eye, 
  Calendar,
  Building2,
  Home,
  Layers,
  Table,
  ShieldCheck,
  DoorOpen,
  Armchair
} from 'lucide-react';

export const ServicesSection = ({ onSelectService, onOpenBooking, onOpenQuote }) => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [activeRateCardTab, setActiveRateCardTab] = useState('apartment'); // 'apartment', 'villa', 'stains'

  const filteredServices = siteConfig.services.filter(s => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'deep-cleaning') return ['full-home-cleaning', 'villa-deep-cleaning', 'heavy-stains-cleaning', 'move-in-move-out-cleaning'].includes(s.id);
    if (filterCategory === 'specialized') return ['kitchen-deep-cleaning', 'bathroom-deep-cleaning', 'sofa-upholstery-cleaning'].includes(s.id);
    if (filterCategory === 'commercial') return ['commercial-property-cleaning', 'college-campus-cleaning', 'custom-cleaning'].includes(s.id);
    return true;
  });

  return (
    <section id="services" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} color="var(--color-orange-600)" />
            DEEP CLEANING CATALOG
          </span>
          <h2 className="section-title">
            OUR CLEANING <span className="text-gradient">SERVICES & PRICING</span>
          </h2>
          <p className="section-subtitle">
            In Full Home Cleaning, we strictly provide specialized Deep Cleaning for apartments, individual villas, plots, heavy stain removal, and commercial premises.
          </p>
        </div>

        {/* Live Rate Card Preview Container */}
        <div style={{
          marginBottom: '44px',
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #431407 100%)',
          borderRadius: '24px',
          padding: '24px 28px',
          color: '#FFFFFF',
          boxShadow: '0 20px 40px -15px rgba(234, 88, 12, 0.25)',
          border: '1px solid rgba(249, 115, 22, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <Table size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.18rem', fontWeight: 800 }}>Official Transparent Rate Cards</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-orange-300)' }}>Upfront pricing with zero hidden fees — pay after service satisfaction</div>
              </div>
            </div>

            {/* Rate card tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'apartment', label: 'Apartment Rates' },
                { id: 'villa', label: 'Villa / Plot Rates (Sq.Ft)' },
                { id: 'stains', label: 'Sticker & Heavy Stains' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveRateCardTab(t.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: activeRateCardTab === t.id ? '1.5px solid #F97316' : '1px solid rgba(255,255,255,0.2)',
                    background: activeRateCardTab === t.id ? 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)' : 'rgba(255,255,255,0.08)',
                    color: '#FFFFFF',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rate Table Content */}
          <div style={{ overflowX: 'auto' }}>
            {activeRateCardTab === 'apartment' && (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.2)', textAlign: 'left' }}>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-400)' }}>BHK</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-400)' }}>Approx Area</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: '#4ADE80' }}>Empty / Vacant House</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: '#38BDF8' }}>Occupied / Furnished</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: '#FFFFFF', textAlign: 'right' }}>Quick Action</th>
                  </tr>
                </thead>
                <tbody>
                  {siteConfig.pricingMatrix.apartmentPricing.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>{item.bhk}</td>
                      <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.7)' }}>{item.sqftRange}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: '#4ADE80', fontSize: '0.98rem' }}>₹{item.emptyPrice.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: '#38BDF8', fontSize: '0.98rem' }}>₹{item.occupiedPrice.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'right' }}>
                        <button
                          onClick={() => onOpenBooking('full-home-cleaning')}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: '#EA580C',
                            color: '#FFFFFF',
                            border: 'none',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Book {item.bhk}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeRateCardTab === 'villa' && (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.2)', textAlign: 'left' }}>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-400)' }}>Tier</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-400)' }}>Square Feet & Type</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: '#4ADE80' }}>Empty / Vacant Villa</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: '#38BDF8' }}>Occupied / Furnished</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: '#FFFFFF', textAlign: 'right' }}>Quick Action</th>
                  </tr>
                </thead>
                <tbody>
                  {siteConfig.pricingMatrix.villaPricing.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>{item.tier}</td>
                      <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>{item.name}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: '#4ADE80', fontSize: '0.98rem' }}>₹{item.emptyPrice.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: '#38BDF8', fontSize: '0.98rem' }}>₹{item.occupiedPrice.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'right' }}>
                        <button
                          onClick={() => onOpenBooking('villa-deep-cleaning')}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: '#EA580C',
                            color: '#FFFFFF',
                            border: 'none',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Book Villa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeRateCardTab === 'stains' && (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.2)', textAlign: 'left' }}>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-400)' }}>Tier</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-400)' }}>Space Configuration</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: 'var(--color-orange-400)' }}>Area Size</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: '#4ADE80' }}>Intensive Stain Removal Price</th>
                    <th style={{ padding: '10px 14px', fontWeight: 800, color: '#FFFFFF', textAlign: 'right' }}>Quick Action</th>
                  </tr>
                </thead>
                <tbody>
                  {siteConfig.pricingMatrix.heavyStainsPricing.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 700 }}>{item.tier}</td>
                      <td style={{ padding: '10px 14px', color: '#FFFFFF', fontWeight: 600 }}>{item.name}</td>
                      <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.7)' }}>{item.sqftRange}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 800, color: '#4ADE80', fontSize: '0.98rem' }}>₹{item.price.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '10px 14px', textAlign: 'right' }}>
                        <button
                          onClick={() => onOpenBooking('heavy-stains-cleaning')}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: '#EA580C',
                            color: '#FFFFFF',
                            border: 'none',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            cursor: 'pointer'
                          }}
                        >
                          Book Stain Removal
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'all', label: 'All Services (10)', icon: Layers },
            { id: 'deep-cleaning', label: 'Home & Villa Deep Cleaning', icon: Home },
            { id: 'specialized', label: 'Room & Specialized Cleaning', icon: Sparkles },
            { id: 'commercial', label: 'Commercial & Campus', icon: Building2 }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = filterCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                  background: isActive ? 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)' : '#FFF7ED',
                  color: isActive ? '#FFFFFF' : 'var(--color-orange-900)',
                  boxShadow: isActive ? '0 4px 14px rgba(234, 88, 12, 0.3)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Icon size={16} color={isActive ? '#FFFFFF' : 'var(--color-orange-600)'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px'
        }}>
          {filteredServices.map((service) => {
            const isInstitutional = service.id === 'college-campus-cleaning';
            const isCommercial = service.id === 'commercial-property-cleaning';
            const isCustom = service.id === 'custom-cleaning';

            return (
              <div 
                key={service.id} 
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid var(--color-border-light)'
                }}
              >
                {/* Image Header with Badge */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 400ms ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(28, 25, 23, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={12} fill="#F59E0B" color="#F59E0B" />
                    <span>{service.rating} ({service.reviewsCount})</span>
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-orange-800)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                  }}>
                    <Clock size={12} color="var(--color-orange-600)" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--color-navy-900)',
                    marginBottom: '8px',
                    lineHeight: 1.3
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '16px'
                  }}>
                    {service.shortDescription}
                  </p>

                  {/* Checklist Highlights (First 4 items) */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '20px',
                    background: 'var(--color-bg-subtle)',
                    padding: '14px',
                    borderRadius: '12px',
                    border: '1px solid var(--color-orange-100)'
                  }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-orange-800)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Inclusions:
                    </div>
                    {service.included.slice(0, 4).map((inc, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--color-navy-900)' }}>
                        <div style={{ color: 'var(--color-orange-500)', flexShrink: 0, marginTop: '2px' }}>
                          <Check size={14} strokeWidth={2.5} />
                        </div>
                        <span style={{ lineHeight: 1.3 }}>{inc}</span>
                      </div>
                    ))}
                    {service.included.length > 4 && (
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-orange-600)', fontWeight: 600, marginTop: '2px' }}>
                        + {service.included.length - 4} more included tasks
                      </div>
                    )}
                  </div>

                  {/* Pricing Note */}
                  <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--color-border-light)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', fontWeight: 600 }}>
                      Official Pricing:
                    </div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--color-orange-700)', marginTop: '2px' }}>
                      {service.pricingNote}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
                    gap: '10px',
                    marginTop: '18px'
                  }}>
                    <button
                      onClick={() => onSelectService(service)}
                      className="btn btn-secondary btn-sm"
                      style={{ fontWeight: 600, padding: '10px 12px' }}
                      title="View complete specifications and rate card"
                    >
                      <Eye size={15} />
                      <span>VIEW DETAILS</span>
                    </button>

                    {isCommercial ? (
                      <button
                        onClick={() => onOpenQuote('commercial-property-cleaning')}
                        className="btn btn-primary btn-sm"
                        style={{ fontWeight: 700, padding: '10px 12px' }}
                      >
                        <span>GET A QUOTE</span>
                        <ArrowRight size={15} />
                      </button>
                    ) : isInstitutional ? (
                      <button
                        onClick={() => onOpenQuote('college-campus-cleaning')}
                        className="btn btn-primary btn-sm"
                        style={{ fontWeight: 700, padding: '10px 12px' }}
                      >
                        <span>REQUEST QUOTE</span>
                        <ArrowRight size={15} />
                      </button>
                    ) : isCustom ? (
                      <button
                        onClick={() => onOpenBooking('custom-cleaning')}
                        className="btn btn-primary btn-sm"
                        style={{ fontWeight: 700, padding: '10px 12px' }}
                      >
                        <span>CUSTOM SERVICE</span>
                        <ArrowRight size={15} />
                      </button>
                    ) : (
                      <button
                        onClick={() => onOpenBooking(service.id)}
                        className="btn btn-primary btn-sm"
                        style={{ fontWeight: 700, padding: '10px 12px' }}
                      >
                        <Calendar size={15} />
                        <span>BOOK NOW</span>
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
