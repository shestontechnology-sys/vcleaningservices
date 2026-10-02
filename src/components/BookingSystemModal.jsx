import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Clock, 
  Home, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Tag, 
  ArrowRight,
  ShieldCheck,
  DoorOpen,
  Armchair
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const BookingSystemModal = ({ initialServiceId, onClose, onBookingSuccess }) => {
  const [step, setStep] = useState(1);

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || 'full-home-cleaning');
  const [selectedPropertyType, setSelectedPropertyType] = useState('apartment');
  const [selectedOccupancy, setSelectedOccupancy] = useState('empty'); // 'empty' or 'occupied'
  const [selectedSize, setSelectedSize] = useState('2bhk');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(siteConfig.pricingMatrix.timeSlots[0]);
  const [promoCode, setPromoCode] = useState('AAYUDHA2026');
  const [promoApplied, setPromoApplied] = useState(true);

  // Customer Contact State
  const [customerData, setCustomerData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Bengaluru',
    specialInstructions: ''
  });

  const [formErrors, setFormErrors] = useState({});

  // Sync property type / size when service changes
  useEffect(() => {
    if (selectedServiceId === 'villa-deep-cleaning') {
      setSelectedPropertyType('villa');
      if (!selectedSize.startsWith('villa-')) setSelectedSize('villa-2');
    } else if (selectedServiceId === 'heavy-stains-cleaning') {
      setSelectedPropertyType('heavy-stains-home');
      if (!selectedSize.startsWith('stain-')) setSelectedSize('stain-2');
    } else if (selectedServiceId === 'commercial-property-cleaning' || selectedServiceId === 'college-campus-cleaning') {
      setSelectedPropertyType('office');
      if (!selectedSize.startsWith('comm-')) setSelectedSize('comm-med');
    } else if (selectedServiceId === 'full-home-cleaning') {
      if (selectedPropertyType !== 'apartment' && selectedPropertyType !== 'villa' && selectedPropertyType !== 'heavy-stains-home') {
        setSelectedPropertyType('apartment');
      }
    }
  }, [selectedServiceId]);

  // Adjust size selection if property type changes
  const handlePropertyTypeChange = (propId) => {
    setSelectedPropertyType(propId);
    if (propId === 'apartment') {
      setSelectedSize('2bhk');
    } else if (propId === 'villa') {
      setSelectedSize('villa-2');
    } else if (propId === 'heavy-stains-home') {
      setSelectedSize('stain-2');
    } else {
      setSelectedSize('comm-med');
    }
  };

  // Detect commercial vs residential
  const isCommercial = useMemo(() => {
    return ['office', 'shop', 'commercial-building', 'college-institution'].includes(selectedPropertyType) ||
           ['commercial-property-cleaning', 'college-campus-cleaning'].includes(selectedServiceId);
  }, [selectedPropertyType, selectedServiceId]);

  const isVilla = selectedPropertyType === 'villa' || selectedServiceId === 'villa-deep-cleaning';
  const isHeavyStains = selectedPropertyType === 'heavy-stains-home' || selectedServiceId === 'heavy-stains-cleaning';
  const isApartment = !isCommercial && !isVilla && !isHeavyStains;

  // Exact Dynamic Price Calculation from Handwritten Rate Cards
  const priceEstimate = useMemo(() => {
    let base = 4000;
    const currentService = siteConfig.services.find(s => s.id === selectedServiceId);
    let pricingBreakdownText = '';

    if (isApartment) {
      const aptObj = siteConfig.pricingMatrix.apartmentPricing.find(s => s.id === selectedSize) || siteConfig.pricingMatrix.apartmentPricing[1];
      base = selectedOccupancy === 'empty' ? aptObj.emptyPrice : aptObj.occupiedPrice;
      pricingBreakdownText = `${aptObj.name} (${selectedOccupancy === 'empty' ? 'Empty' : 'Occupied'})`;
    } else if (isVilla) {
      const villaObj = siteConfig.pricingMatrix.villaPricing.find(s => s.id === selectedSize) || siteConfig.pricingMatrix.villaPricing[1];
      base = selectedOccupancy === 'empty' ? villaObj.emptyPrice : villaObj.occupiedPrice;
      pricingBreakdownText = `Villa ${villaObj.sqftRange} (${selectedOccupancy === 'empty' ? 'Empty' : 'Occupied'})`;
    } else if (isHeavyStains) {
      const stainObj = siteConfig.pricingMatrix.heavyStainsPricing.find(s => s.id === selectedSize) || siteConfig.pricingMatrix.heavyStainsPricing[1];
      base = stainObj.price;
      pricingBreakdownText = `Heavy Stains Removal - ${stainObj.name}`;
    } else if (isCommercial) {
      const commObj = siteConfig.pricingMatrix.sizes.commercial.find(s => s.id === selectedSize) || siteConfig.pricingMatrix.sizes.commercial[1];
      base = commObj.basePrice;
      pricingBreakdownText = `Commercial - ${commObj.name}`;
    } else {
      base = 4000;
    }

    // Specific single room baseline adjustments if user chose specific non-home services
    if (selectedServiceId === 'bathroom-deep-cleaning') {
      base = 599 * 2; // Default 2 bathrooms package
      pricingBreakdownText = 'Bathroom Deep Descaling (2 Bathrooms)';
    } else if (selectedServiceId === 'kitchen-deep-cleaning') {
      base = 1299;
      pricingBreakdownText = 'Kitchen Deep Cleaning Standard';
    } else if (selectedServiceId === 'sofa-upholstery-cleaning') {
      base = 1299;
      pricingBreakdownText = 'Sofa Shampooing (5 Seater / L-Shape)';
    }

    // Add-ons
    let addOnsTotal = 0;
    selectedAddOns.forEach(addOnId => {
      const addon = siteConfig.pricingMatrix.addOns.find(a => a.id === addOnId);
      if (addon) addOnsTotal += addon.price;
    });

    const rawTotal = Math.round(base + addOnsTotal);
    const discountAmount = promoApplied ? Math.round(rawTotal * 0.15) : 0; // 15% festive offer
    const finalTotal = rawTotal - discountAmount;

    return {
      base,
      addOnsTotal,
      rawTotal,
      discountAmount,
      finalTotal,
      pricingBreakdownText,
      serviceTitle: currentService ? currentService.title : 'Deep Cleaning'
    };
  }, [selectedServiceId, selectedPropertyType, selectedOccupancy, selectedSize, selectedAddOns, promoApplied, isCommercial, isVilla, isHeavyStains, isApartment]);

  // Validation
  const validateStep7 = () => {
    const errors = {};
    if (!customerData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!customerData.phone.trim() || customerData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!customerData.address.trim()) errors.address = 'Service Address is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 7) {
      if (!validateStep7()) return;
    }
    setStep(prev => Math.min(prev + 1, 8));
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleAddOnToggle = (id) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleConfirmBooking = () => {
    const randomRef = 'VC-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
    const bookingSummary = {
      bookingId: randomRef,
      serviceId: selectedServiceId,
      serviceTitle: priceEstimate.serviceTitle,
      propertyType: selectedPropertyType,
      occupancyStatus: selectedOccupancy,
      size: selectedSize,
      pricingDetails: priceEstimate.pricingBreakdownText,
      addOns: selectedAddOns.map(id => siteConfig.pricingMatrix.addOns.find(a => a.id === id)?.name),
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      customer: customerData,
      estimatedPrice: priceEstimate.finalTotal,
      promoApplied: promoApplied ? promoCode : null
    };

    if (onBookingSuccess) {
      onBookingSuccess(bookingSummary);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '840px', padding: 0 }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #431407 100%)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopLeftRadius: 'var(--radius-xl)',
          borderTopRightRadius: 'var(--radius-xl)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="section-badge" style={{ margin: 0, padding: '3px 10px', fontSize: '0.74rem' }}>
                <Sparkles size={12} color="var(--color-orange-600)" />
                ONLINE BOOKING ENGINE
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-orange-300)' }}>
                Step {step} of 8
              </span>
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
              {step === 1 && "Select Deep Cleaning Service"}
              {step === 2 && "Select Property Type"}
              {step === 3 && "Select Property Size & Occupancy"}
              {step === 4 && "Select Specialized Add-Ons"}
              {step === 5 && "Choose Service Date"}
              {step === 6 && "Select Arrival Time Slot"}
              {step === 7 && "Contact & Location Details"}
              {step === 8 && "Review & Confirm Booking"}
            </h2>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close booking modal"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'background var(--transition-fast)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{ height: '4px', background: '#E2E8F0', width: '100%' }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #EA580C 0%, #F97316 100%)',
            width: `${(step / 8) * 100}%`,
            transition: 'width 300ms ease'
          }} />
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', maxHeight: '62vh', overflowY: 'auto' }}>
          
          {/* STEP 1: SELECT SERVICE */}
          {step === 1 && (
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Select the primary deep cleaning solution you require:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
                {siteConfig.services.map(srv => {
                  const isSelected = selectedServiceId === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid var(--color-orange-600)' : '1.5px solid var(--color-border-light)',
                        background: isSelected ? '#FFF7ED' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: isSelected ? '0 4px 12px rgba(234, 88, 12, 0.15)' : 'none'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontSize: '0.92rem', fontWeight: 800, color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)' }}>
                            {srv.title}
                          </span>
                          {isSelected && <CheckCircle2 size={18} color="var(--color-orange-600)" />}
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                          {srv.shortDescription}
                        </p>
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-orange-600)', marginTop: '12px' }}>
                        {srv.pricingNote.split('(')[0]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT PROPERTY TYPE */}
          {step === 2 && (
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                What type of premises needs professional cleaning?
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '14px' }}>
                {siteConfig.pricingMatrix.propertyTypes.map(prop => {
                  const isSelected = selectedPropertyType === prop.id;
                  return (
                    <div
                      key={prop.id}
                      onClick={() => handlePropertyTypeChange(prop.id)}
                      style={{
                        padding: '18px 16px',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid var(--color-orange-600)' : '1.5px solid var(--color-border-light)',
                        background: isSelected ? '#FFF7ED' : '#FFFFFF',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {['office', 'shop', 'commercial-building', 'college-institution'].includes(prop.id) ? (
                          <Building2 size={20} color={isSelected ? 'var(--color-orange-600)' : 'var(--color-text-light)'} />
                        ) : prop.id === 'heavy-stains-home' ? (
                          <Sparkles size={20} color={isSelected ? 'var(--color-orange-600)' : 'var(--color-text-light)'} />
                        ) : (
                          <Home size={20} color={isSelected ? 'var(--color-orange-600)' : 'var(--color-text-light)'} />
                        )}
                        <span style={{ fontSize: '0.92rem', fontWeight: 700, color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)' }}>
                          {prop.name}
                        </span>
                      </div>
                      {isSelected && <CheckCircle2 size={18} color="var(--color-orange-600)" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: SELECT SIZE & OCCUPANCY */}
          {step === 3 && (
            <div>
              {/* Occupancy Toggle for Residential (Empty vs Occupied) */}
              {!isCommercial && !isHeavyStains && (
                <div style={{
                  marginBottom: '24px',
                  padding: '16px 20px',
                  background: '#FFF7ED',
                  borderRadius: '14px',
                  border: '1px solid var(--color-orange-200)'
                }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-orange-950)', marginBottom: '10px' }}>
                    Select Property Furnishing / Occupancy Status:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedOccupancy('empty')}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: selectedOccupancy === 'empty' ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                        background: selectedOccupancy === 'empty' ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                        color: selectedOccupancy === 'empty' ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: selectedOccupancy === 'empty' ? 'var(--shadow-sm)' : 'none'
                      }}
                    >
                      <DoorOpen size={18} color={selectedOccupancy === 'empty' ? 'var(--color-orange-600)' : 'var(--color-text-muted)'} />
                      <span>Empty / Vacant Home</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedOccupancy('occupied')}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: selectedOccupancy === 'occupied' ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                        background: selectedOccupancy === 'occupied' ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                        color: selectedOccupancy === 'occupied' ? 'var(--color-orange-700)' : 'var(--color-navy-800)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: selectedOccupancy === 'occupied' ? 'var(--shadow-sm)' : 'none'
                      }}
                    >
                      <Armchair size={18} color={selectedOccupancy === 'occupied' ? 'var(--color-orange-600)' : 'var(--color-text-muted)'} />
                      <span>Occupied / Furnished</span>
                    </button>
                  </div>
                </div>
              )}

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                {isApartment && "Select your Apartment BHK size:"}
                {isVilla && "Select your Villa / Plot square feet tier:"}
                {isHeavyStains && "Select your property size for Sticker Marks & Heavy Stains deep treatment:"}
                {isCommercial && "Select your commercial area size:"}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '14px' }}>
                {/* APARTMENT RATES */}
                {isApartment && (
                  siteConfig.pricingMatrix.apartmentPricing.map(s => {
                    const isSelected = selectedSize === s.id;
                    const price = selectedOccupancy === 'empty' ? s.emptyPrice : s.occupiedPrice;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          border: isSelected ? '2px solid var(--color-orange-600)' : '1.5px solid var(--color-border-light)',
                          background: isSelected ? '#FFF7ED' : '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '1.02rem', fontWeight: 800, color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)' }}>
                            {s.name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                            {s.sqftRange}
                          </div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-orange-600)', marginTop: '6px' }}>
                            ₹{price.toLocaleString('en-IN')} <span style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>({selectedOccupancy})</span>
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 size={20} color="var(--color-orange-600)" />}
                      </div>
                    );
                  })
                )}

                {/* VILLA RATES */}
                {isVilla && (
                  siteConfig.pricingMatrix.villaPricing.map(s => {
                    const isSelected = selectedSize === s.id;
                    const price = selectedOccupancy === 'empty' ? s.emptyPrice : s.occupiedPrice;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          border: isSelected ? '2px solid var(--color-orange-600)' : '1.5px solid var(--color-border-light)',
                          background: isSelected ? '#FFF7ED' : '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.98rem', fontWeight: 800, color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)' }}>
                            {s.name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                            {s.sqftRange}
                          </div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-orange-600)', marginTop: '6px' }}>
                            ₹{price.toLocaleString('en-IN')} <span style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>({selectedOccupancy})</span>
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 size={20} color="var(--color-orange-600)" />}
                      </div>
                    );
                  })
                )}

                {/* HEAVY STAINS RATES */}
                {isHeavyStains && (
                  siteConfig.pricingMatrix.heavyStainsPricing.map(s => {
                    const isSelected = selectedSize === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          border: isSelected ? '2px solid var(--color-orange-600)' : '1.5px solid var(--color-border-light)',
                          background: isSelected ? '#FFF7ED' : '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.98rem', fontWeight: 800, color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)' }}>
                            {s.name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                            {s.sqftRange}
                          </div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-orange-600)', marginTop: '6px' }}>
                            ₹{s.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 size={20} color="var(--color-orange-600)" />}
                      </div>
                    );
                  })
                )}

                {/* COMMERCIAL RATES */}
                {isCommercial && (
                  siteConfig.pricingMatrix.sizes.commercial.map(s => {
                    const isSelected = selectedSize === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        style={{
                          padding: '16px',
                          borderRadius: '14px',
                          border: isSelected ? '2px solid var(--color-orange-600)' : '1.5px solid var(--color-border-light)',
                          background: isSelected ? '#FFF7ED' : '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.98rem', fontWeight: 800, color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)' }}>
                            {s.name}
                          </div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-orange-600)', marginTop: '6px' }}>
                            ₹{s.basePrice.toLocaleString('en-IN')}
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 size={20} color="var(--color-orange-600)" />}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* STEP 4: ADD-ON REQUIREMENTS */}
          {step === 4 && (
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Select any extra specialized cleaning tasks (multiple selections allowed):
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
                {siteConfig.pricingMatrix.addOns.map(add => {
                  const isChecked = selectedAddOns.includes(add.id);
                  return (
                    <div
                      key={add.id}
                      onClick={() => handleAddOnToggle(add.id)}
                      style={{
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: isChecked ? '1.5px solid var(--color-orange-600)' : '1.5px solid var(--color-border-light)',
                        background: isChecked ? '#FFF7ED' : '#FFFFFF',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '6px',
                          border: isChecked ? 'none' : '1.5px solid var(--color-border-subtle)',
                          background: isChecked ? 'var(--color-orange-600)' : '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF'
                        }}>
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>
                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-navy-800)' }}>
                          {add.name}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-orange-600)' }}>
                        +₹{add.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: PREFERRED DATE */}
          {step === 5 && (
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                When would you like our cleaning crew to arrive?
              </p>
              <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '1rem', marginBottom: '10px' }}>
                    Select Service Date:
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{ fontSize: '1.1rem', padding: '14px', textAlign: 'center', fontWeight: 600 }}
                  />
                </div>
                <div style={{
                  padding: '14px',
                  background: 'var(--color-bg-subtle)',
                  borderRadius: '12px',
                  fontSize: '0.88rem',
                  color: 'var(--color-text-muted)',
                  marginTop: '16px'
                }}>
                  📅 Selected Date: <strong>{new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: TIME SLOT */}
          {step === 6 && (
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Choose your preferred crew arrival time window:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '520px', margin: '0 auto' }}>
                {siteConfig.pricingMatrix.timeSlots.map(slot => {
                  const isSelected = selectedTimeSlot === slot;
                  return (
                    <div
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid var(--color-orange-600)' : '1.5px solid var(--color-border-light)',
                        background: isSelected ? '#FFF7ED' : '#FFFFFF',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Clock size={18} color={isSelected ? 'var(--color-orange-600)' : 'var(--color-text-light)'} />
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isSelected ? 'var(--color-orange-700)' : 'var(--color-navy-800)' }}>
                          {slot}
                        </span>
                      </div>
                      {isSelected && <CheckCircle2 size={20} color="var(--color-orange-600)" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 7: CUSTOMER DETAILS */}
          {step === 7 && (
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Please provide your contact and service address details:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Ramesh Kumar"
                    value={customerData.fullName}
                    onChange={(e) => setCustomerData({ ...customerData, fullName: e.target.value })}
                  />
                  {formErrors.fullName && <div style={{ color: '#E11D48', fontSize: '0.78rem', marginTop: '4px' }}>{formErrors.fullName}</div>}
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Mobile Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="Enter 10-digit mobile number"
                    value={customerData.phone}
                    onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                  />
                  {formErrors.phone && <div style={{ color: '#E11D48', fontSize: '0.78rem', marginTop: '4px' }}>{formErrors.phone}</div>}
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="e.g. yourname@example.com"
                    value={customerData.email}
                    onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">City / Region</label>
                  <select
                    className="form-select"
                    value={customerData.city}
                    onChange={(e) => setCustomerData({ ...customerData, city: e.target.value })}
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Other Area">Other Region</option>
                  </select>
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1', margin: 0 }}>
                  <label className="form-label">Complete Service Address *</label>
                  <textarea
                    className="form-textarea"
                    rows={2}
                    placeholder="House/Flat/Villa No, Property/Apartment Name, Street, Landmark, Pincode"
                    value={customerData.address}
                    onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                  />
                  {formErrors.address && <div style={{ color: '#E11D48', fontSize: '0.78rem', marginTop: '4px' }}>{formErrors.address}</div>}
                </div>

                <div className="form-group" style={{ gridColumn: '1 / -1', margin: 0 }}>
                  <label className="form-label">Additional Instructions / Key Requests</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Focus on bathroom limescale & kitchen chimney grease"
                    value={customerData.specialInstructions}
                    onChange={(e) => setCustomerData({ ...customerData, specialInstructions: e.target.value })}
                  />
                </div>

              </div>
            </div>
          )}

          {/* STEP 8: BOOKING SUMMARY */}
          {step === 8 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
              <div style={{
                background: 'var(--color-bg-subtle)',
                border: '1.5px solid var(--color-border-light)',
                borderRadius: '16px',
                padding: '24px'
              }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '16px' }}>
                  Booking Summary
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Selected Service</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--color-navy-800)' }}>{priceEstimate.serviceTitle}</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Property & Configuration</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--color-navy-800)' }}>
                      {priceEstimate.pricingBreakdownText}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Date & Arrival Slot</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--color-navy-800)' }}>
                      {selectedDate} ({selectedTimeSlot.split('(')[0]})
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Customer Name</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--color-navy-800)' }}>
                      {customerData.fullName} ({customerData.phone})
                    </div>
                  </div>
                </div>

                {/* Add-ons list if any */}
                {selectedAddOns.length > 0 && (
                  <div style={{ marginBottom: '16px', padding: '10px 14px', background: '#FFFFFF', borderRadius: '10px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-light)' }}>Add-ons Included: </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-navy-800)', fontWeight: 600 }}>
                      {selectedAddOns.map(id => siteConfig.pricingMatrix.addOns.find(a => a.id === id)?.name).join(', ')}
                    </span>
                  </div>
                )}

                {/* Promo Code Box */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  background: 'var(--color-festive-light)',
                  border: '1px solid var(--color-festive-border)',
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}>
                  <Tag size={18} color="#D97706" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#92400E' }}>
                    Festive Promo Code Applied: <strong>{promoCode}</strong> (15% Aayudha Pooja Savings)
                  </span>
                </div>

                {/* Price Calculation Breakdown */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--color-border-subtle)'
                }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)' }}>
                      Exact Estimated Price:
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      *100% transparent pricing based on official rate cards. Pay after satisfaction.
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {promoApplied && (
                      <div style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: 'var(--color-text-light)' }}>
                        ₹{priceEstimate.rawTotal.toLocaleString('en-IN')}
                      </div>
                    )}
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-green-600)', lineHeight: 1 }}>
                      ₹{priceEstimate.finalTotal.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Modal Navigation Buttons */}
        <div style={{
          padding: '18px 24px',
          background: '#FFFFFF',
          borderTop: '1px solid var(--color-border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottomLeftRadius: 'var(--radius-xl)',
          borderBottomRightRadius: 'var(--radius-xl)'
        }}>
          {step > 1 ? (
            <button
              onClick={handlePrevStep}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <ChevronLeft size={16} />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', fontWeight: 600 }}>
              Step {step} of 8
            </span>

            {step < 8 ? (
              <button
                onClick={handleNextStep}
                className="btn btn-primary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700 }}
              >
                <span>Continue</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleConfirmBooking}
                className="btn btn-accent"
                style={{ fontWeight: 800, padding: '12px 24px' }}
              >
                <CheckCircle2 size={18} />
                <span>CONFIRM BOOKING REQUEST</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
