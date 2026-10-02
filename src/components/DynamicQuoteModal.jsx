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
  Calendar,
  DoorOpen,
  Armchair
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const DynamicQuoteModal = ({ initialServiceId, onClose, onProceedToBook }) => {
  const [serviceId, setServiceId] = useState(initialServiceId || 'full-home-cleaning');
  const [propertyType, setPropertyType] = useState('apartment');
  const [occupancyStatus, setOccupancyStatus] = useState('empty');
  const [propertySize, setPropertySize] = useState('2bhk');
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Auto-switch size default when property type changes
  const handlePropertyTypeChange = (pId) => {
    setPropertyType(pId);
    if (pId === 'apartment') {
      setPropertySize('2bhk');
    } else if (pId === 'villa') {
      setPropertySize('villa-2');
    } else if (pId === 'heavy-stains-home') {
      setPropertySize('stain-2');
    } else {
      setPropertySize('comm-med');
    }
  };

  const isCommercial = ['office', 'shop', 'commercial-building', 'college-institution'].includes(propertyType) ||
                       ['commercial-property-cleaning', 'college-campus-cleaning'].includes(serviceId);

  const isVilla = propertyType === 'villa' || serviceId === 'villa-deep-cleaning';
  const isHeavyStains = propertyType === 'heavy-stains-home' || serviceId === 'heavy-stains-cleaning';
  const isApartment = !isCommercial && !isVilla && !isHeavyStains;

  const quoteBreakdown = useMemo(() => {
    let base = 4000;
    let configLabel = '';

    if (isApartment) {
      const aptObj = siteConfig.pricingMatrix.apartmentPricing.find(s => s.id === propertySize) || siteConfig.pricingMatrix.apartmentPricing[1];
      base = occupancyStatus === 'empty' ? aptObj.emptyPrice : aptObj.occupiedPrice;
      configLabel = `${aptObj.name} (${occupancyStatus === 'empty' ? 'Empty' : 'Occupied'})`;
    } else if (isVilla) {
      const villaObj = siteConfig.pricingMatrix.villaPricing.find(s => s.id === propertySize) || siteConfig.pricingMatrix.villaPricing[1];
      base = occupancyStatus === 'empty' ? villaObj.emptyPrice : villaObj.occupiedPrice;
      configLabel = `Villa ${villaObj.sqftRange} (${occupancyStatus === 'empty' ? 'Empty' : 'Occupied'})`;
    } else if (isHeavyStains) {
      const stainObj = siteConfig.pricingMatrix.heavyStainsPricing.find(s => s.id === propertySize) || siteConfig.pricingMatrix.heavyStainsPricing[1];
      base = stainObj.price;
      configLabel = `Heavy Stains Removal - ${stainObj.name}`;
    } else if (isCommercial) {
      const commObj = siteConfig.pricingMatrix.sizes.commercial.find(s => s.id === propertySize) || siteConfig.pricingMatrix.sizes.commercial[1];
      base = commObj.basePrice;
      configLabel = `Commercial - ${commObj.name}`;
    }

    let addonsSum = 0;
    selectedAddons.forEach(id => {
      const item = siteConfig.pricingMatrix.addOns.find(a => a.id === id);
      if (item) addonsSum += item.price;
    });

    const totalEstimate = base + addonsSum;

    return {
      base,
      addonsSum,
      totalEstimate,
      configLabel
    };
  }, [serviceId, propertyType, occupancyStatus, propertySize, selectedAddons, isCommercial, isVilla, isHeavyStains, isApartment]);

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
        style={{ maxWidth: '800px', padding: 0 }}
      >
        {/* Header */}
        <div style={{
          padding: '22px 24px',
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #431407 100%)',
          color: '#FFFFFF',
          position: 'relative',
          borderTopLeftRadius: 'var(--radius-xl)',
          borderTopRightRadius: 'var(--radius-xl)'
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
            <Calculator size={18} color="var(--color-orange-400)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-orange-400)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              INSTANT ESTIMATOR
            </span>
          </div>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
            Transparent Price & Quote Calculator
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.85)', marginTop: '2px' }}>
            Official rate cards for Apartments, Villas (by sq.ft), Sticker/Stain removal & Commercial spaces.
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '65vh', overflowY: 'auto' }}>
          
          {/* Property Category */}
          <div>
            <label className="form-label">1. Select Property Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '10px' }}>
              {siteConfig.pricingMatrix.propertyTypes.map(p => {
                const isSelected = propertyType === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handlePropertyTypeChange(p.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: isSelected ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                      background: isSelected ? '#FFF7ED' : '#FFFFFF',
                      fontSize: '0.86rem',
                      fontWeight: isSelected ? 800 : 600,
                      color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
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

          {/* Occupancy Status (Empty vs Occupied) */}
          {!isCommercial && !isHeavyStains && (
            <div>
              <label className="form-label">2. Furnishing / Occupancy Condition</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setOccupancyStatus('empty')}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: occupancyStatus === 'empty' ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                    background: occupancyStatus === 'empty' ? '#FFF7ED' : '#FFFFFF',
                    color: occupancyStatus === 'empty' ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <DoorOpen size={16} color={occupancyStatus === 'empty' ? 'var(--color-orange-600)' : 'var(--color-text-muted)'} />
                  <span>Empty / Vacant House</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOccupancyStatus('occupied')}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: occupancyStatus === 'occupied' ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                    background: occupancyStatus === 'occupied' ? '#FFF7ED' : '#FFFFFF',
                    color: occupancyStatus === 'occupied' ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Armchair size={16} color={occupancyStatus === 'occupied' ? 'var(--color-orange-600)' : 'var(--color-text-muted)'} />
                  <span>Occupied / Furnished</span>
                </button>
              </div>
            </div>
          )}

          {/* Size / BHK selector */}
          <div>
            <label className="form-label">
              {isApartment && "3. Select Apartment Size (BHK)"}
              {isVilla && "3. Select Villa / Plot Size (Square Feet Tier)"}
              {isHeavyStains && "3. Select Size for Sticker Marks & Heavy Stain Treatment"}
              {isCommercial && "3. Select Commercial Floor Size"}
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
              {isApartment && (
                siteConfig.pricingMatrix.apartmentPricing.map(s => {
                  const isSelected = propertySize === s.id;
                  const price = occupancyStatus === 'empty' ? s.emptyPrice : s.occupiedPrice;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setPropertySize(s.id)}
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                        background: isSelected ? '#FFF7ED' : '#FFFFFF',
                        color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '0.92rem', fontWeight: 800 }}>{s.bhk}</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--color-text-light)' }}>{s.sqftRange}</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-orange-600)', marginTop: '4px' }}>
                        ₹{price.toLocaleString('en-IN')}
                      </div>
                    </button>
                  );
                })
              )}

              {isVilla && (
                siteConfig.pricingMatrix.villaPricing.map(s => {
                  const isSelected = propertySize === s.id;
                  const price = occupancyStatus === 'empty' ? s.emptyPrice : s.occupiedPrice;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setPropertySize(s.id)}
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                        background: isSelected ? '#FFF7ED' : '#FFFFFF',
                        color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '0.88rem', fontWeight: 800 }}>{s.tier}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-light)' }}>{s.sqftRange}</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-orange-600)', marginTop: '4px' }}>
                        ₹{price.toLocaleString('en-IN')}
                      </div>
                    </button>
                  );
                })
              )}

              {isHeavyStains && (
                siteConfig.pricingMatrix.heavyStainsPricing.map(s => {
                  const isSelected = propertySize === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setPropertySize(s.id)}
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                        background: isSelected ? '#FFF7ED' : '#FFFFFF',
                        color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '0.88rem', fontWeight: 800 }}>{s.tier}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-light)' }}>{s.sqftRange}</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-orange-600)', marginTop: '4px' }}>
                        ₹{s.price.toLocaleString('en-IN')}
                      </div>
                    </button>
                  );
                })
              )}

              {isCommercial && (
                siteConfig.pricingMatrix.sizes.commercial.map(s => {
                  const isSelected = propertySize === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setPropertySize(s.id)}
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                        background: isSelected ? '#FFF7ED' : '#FFFFFF',
                        color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '0.86rem', fontWeight: 800 }}>{s.name}</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-orange-600)', marginTop: '4px' }}>
                        ₹{s.basePrice.toLocaleString('en-IN')}
                      </div>
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
                      border: isSelected ? '1.5px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                      background: isSelected ? '#FFF7ED' : '#FFFFFF',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {isSelected && <CheckCircle2 size={13} color="var(--color-orange-600)" />}
                    <span>{add.name} (+₹{add.price})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-time Calculation Result Box */}
          <div style={{
            background: 'var(--color-bg-subtle)',
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
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', fontWeight: 600 }}>
                Selected Configuration: {quoteBreakdown.configLabel}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-green-600)', lineHeight: 1.1, marginTop: '2px' }}>
                ₹{quoteBreakdown.totalEstimate.toLocaleString('en-IN')}
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                *Transparent official rate card price. Includes complete machinery, chemicals & supervised staff.
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
