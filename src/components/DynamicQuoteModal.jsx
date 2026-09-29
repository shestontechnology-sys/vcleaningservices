import React, { useState, useMemo } from 'react';
import { 
  X, 
  Calculator, 
  Sparkles, 
  Home, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Calendar
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const DynamicQuoteModal = ({ initialServiceId, onClose, onProceedToBook }) => {
  const [serviceId, setServiceId] = useState(initialServiceId || 'full-home-cleaning');
  const [propertyType, setPropertyType] = useState('apartment');
  const [propertySize, setPropertySize] = useState('2bhk');
  const [approxSqft, setApproxSqft] = useState(1000);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const isCommercial = ['office', 'shop', 'commercial-building', 'college-institution'].includes(propertyType) ||
                       ['commercial-property-cleaning', 'college-campus-cleaning'].includes(serviceId);

  const quoteBreakdown = useMemo(() => {
    let base = 2499;
    if (!isCommercial) {
      const sObj = siteConfig.pricingMatrix.sizes.residential.find(s => s.id === propertySize);
      if (sObj) base = sObj.basePrice;
    } else {
      const sObj = siteConfig.pricingMatrix.sizes.commercial.find(s => s.id === propertySize) || siteConfig.pricingMatrix.sizes.commercial[0];
      if (sObj) base = sObj.basePrice;
    }

    const propObj = siteConfig.pricingMatrix.propertyTypes.find(p => p.id === propertyType);
    const multiplier = propObj ? propObj.multiplier : 1.0;
    const basePriceAdjusted = Math.round(base * multiplier);

    let addonsSum = 0;
    selectedAddons.forEach(id => {
      const item = siteConfig.pricingMatrix.addOns.find(a => a.id === id);
      if (item) addonsSum += item.price;
    });

    const totalEstimate = basePriceAdjusted + addonsSum;

    return {
      basePriceAdjusted,
      addonsSum,
      totalEstimate,
      multiplier
    };
  }, [serviceId, propertyType, propertySize, selectedAddons, isCommercial]);

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '780px', padding: 0 }}
      >
        {/* Header */}
        <div style={{
          padding: '22px 24px',
          background: 'linear-gradient(135deg, #0B2545 0%, #134074 100%)',
          color: '#FFFFFF',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            aria-label="Close quote calculator"
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Calculator size={18} color="var(--color-cyan-400)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-cyan-400)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              INSTANT ESTIMATOR
            </span>
          </div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
            Dynamic Price & Quote Calculator
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '2px' }}>
            Transparent pricing based on property configuration, scope, and specific add-ons.
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          
          {/* Service Selector */}
          <div>
            <label className="form-label">1. Select Cleaning Service Type</label>
            <select 
              className="form-select"
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
            >
              {siteConfig.services.map(s => (
                <option key={s.id} value={s.id}>{s.title} ({s.pricingNote})</option>
              ))}
            </select>
          </div>

          {/* Property Type Grid */}
          <div>
            <label className="form-label">2. Property Category</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '10px' }}>
              {siteConfig.pricingMatrix.propertyTypes.map(p => {
                const isSelected = propertyType === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPropertyType(p.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: isSelected ? '2px solid var(--color-cyan-500)' : '1px solid var(--color-border-light)',
                      background: isSelected ? '#F0F9FF' : '#FFFFFF',
                      fontSize: '0.86rem',
                      fontWeight: isSelected ? 700 : 500,
                      color: isSelected ? 'var(--color-royal-600)' : 'var(--color-navy-800)',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Size / BHK selector */}
          <div>
            <label className="form-label">3. Size / Configuration</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px' }}>
              {!isCommercial ? (
                siteConfig.pricingMatrix.sizes.residential.map(s => {
                  const isSelected = propertySize === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setPropertySize(s.id)}
                      style={{
                        padding: '12px 10px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid var(--color-cyan-500)' : '1px solid var(--color-border-light)',
                        background: isSelected ? '#F0F9FF' : '#FFFFFF',
                        fontSize: '0.9rem',
                        fontWeight: isSelected ? 800 : 600,
                        color: isSelected ? 'var(--color-royal-600)' : 'var(--color-navy-800)',
                        cursor: 'pointer'
                      }}
                    >
                      {s.name}
                    </button>
                  );
                })
              ) : (
                siteConfig.pricingMatrix.sizes.commercial.map(s => {
                  const isSelected = propertySize === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setPropertySize(s.id)}
                      style={{
                        padding: '12px 10px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid var(--color-cyan-500)' : '1px solid var(--color-border-light)',
                        background: isSelected ? '#F0F9FF' : '#FFFFFF',
                        fontSize: '0.86rem',
                        fontWeight: isSelected ? 800 : 600,
                        color: isSelected ? 'var(--color-royal-600)' : 'var(--color-navy-800)',
                        cursor: 'pointer'
                      }}
                    >
                      {s.name}
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Add-on check pills */}
          <div>
            <label className="form-label">4. Optional Add-ons</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {siteConfig.pricingMatrix.addOns.slice(0, 6).map(add => {
                const isSelected = selectedAddons.includes(add.id);
                return (
                  <button
                    key={add.id}
                    type="button"
                    onClick={() => toggleAddon(add.id)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-full)',
                      border: isSelected ? '1.5px solid var(--color-green-500)' : '1px solid var(--color-border-light)',
                      background: isSelected ? 'var(--color-green-50)' : '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--color-green-600)' : 'var(--color-navy-800)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {isSelected && <CheckCircle2 size={13} color="var(--color-green-500)" />}
                    <span>{add.name} (+₹{add.price})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-time Calculation Result Box */}
          <div style={{
            background: 'var(--color-bg-subtle)',
            border: '1.5px solid var(--color-cyan-100)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', fontWeight: 600 }}>
                Estimated Starting Range:
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-royal-600)', lineHeight: 1.1 }}>
                ₹{quoteBreakdown.totalEstimate}
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                *Calculated for {propertyType.replace('-', ' ')} with selected parameters. Includes GST & equipment.
              </div>
            </div>

            <button
              onClick={() => { onClose(); onProceedToBook(serviceId); }}
              className="btn btn-primary"
              style={{ fontWeight: 700 }}
            >
              <Calendar size={16} />
              <span>Book with this Estimate</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
