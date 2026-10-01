import React, { useState, useMemo } from 'react';
import { 
  X, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Calendar as CalendarIcon, 
  Clock, 
  Home, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Tag, 
  ArrowRight,
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const BookingSystemModal = ({ initialServiceId, onClose, onBookingSuccess }) => {
  const [step, setStep] = useState(1);

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || 'full-home-cleaning');
  const [selectedPropertyType, setSelectedPropertyType] = useState('apartment');
  const [selectedSize, setSelectedSize] = useState('2bhk');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedDate, setSelectedDate] = useState(() => {
    // Tomorrow as default
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

  // Detect if commercial or residential based on property type or service
  const isCommercial = useMemo(() => {
    return ['office', 'shop', 'commercial-building', 'college-institution'].includes(selectedPropertyType) ||
           ['commercial-property-cleaning', 'college-campus-cleaning'].includes(selectedServiceId);
  }, [selectedPropertyType, selectedServiceId]);

  // Dynamic Price Calculation
  const priceEstimate = useMemo(() => {
    let base = 2499;
    const currentService = siteConfig.services.find(s => s.id === selectedServiceId);
    
    // Size base
    if (!isCommercial) {
      const sizeObj = siteConfig.pricingMatrix.sizes.residential.find(s => s.id === selectedSize);
      if (sizeObj) base = sizeObj.basePrice;
    } else {
      const sizeObj = siteConfig.pricingMatrix.sizes.commercial.find(s => s.id === selectedSize) || siteConfig.pricingMatrix.sizes.commercial[0];
      if (sizeObj) base = sizeObj.basePrice;
    }

    // Property multiplier
    const propObj = siteConfig.pricingMatrix.propertyTypes.find(p => p.id === selectedPropertyType);
    const multiplier = propObj ? propObj.multiplier : 1.0;
    let subtotal = base * multiplier;

    // Service specific baseline adjustment
    if (selectedServiceId === 'bathroom-deep-cleaning') {
      subtotal = 599 * 2; // Default 2 bathrooms
    } else if (selectedServiceId === 'kitchen-deep-cleaning') {
      subtotal = 1299;
    } else if (selectedServiceId === 'sofa-upholstery-cleaning') {
      subtotal = 1199;
    }

    // Add-ons
    let addOnsTotal = 0;
    selectedAddOns.forEach(addOnId => {
      const addon = siteConfig.pricingMatrix.addOns.find(a => a.id === addOnId);
      if (addon) addOnsTotal += addon.price;
    });

    const rawTotal = Math.round(subtotal + addOnsTotal);
    const discountAmount = promoApplied ? Math.round(rawTotal * 0.15) : 0; // 15% festive offer
    const finalTotal = rawTotal - discountAmount;

    return {
      rawTotal,
      discountAmount,
      finalTotal,
      serviceTitle: currentService ? currentService.title : 'Deep Cleaning'
    };
  }, [selectedServiceId, selectedPropertyType, selectedSize, selectedAddOns, promoApplied, isCommercial]);

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
      size: selectedSize,
      addOns: selectedAddOns.map(id => siteConfig.pricingMatrix.addOns.find(a => a.id === id)?.name),
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      customer: customerData,
      estimatedPrice: priceEstimate.finalTotal,
      promoApplied: promoApplied ? promoCode : null
    };

    onBookingSuccess(bookingSummary);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '840px', padding: 0 }}
      >
        {/* Header Bar with Step Progress */}
        <div style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #431407 100%)',
          color: '#FFFFFF',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
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
            <Sparkles size={16} color="var(--color-orange-400)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-orange-400)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              V CLEANING SERVICES — STEP {step} OF 8
            </span>
          </div>
          
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
            {step === 1 && 'Step 1: Choose Your Cleaning Service'}
            {step === 2 && 'Step 2: Select Property Type'}
            {step === 3 && 'Step 3: Select Property Size / Configuration'}
            {step === 4 && 'Step 4: Select Customized Add-on Requirements'}
            {step === 5 && 'Step 5: Select Preferred Service Date'}
            {step === 6 && 'Step 6: Choose Preferred Arrival Time Slot'}
            {step === 7 && 'Step 7: Enter Contact & Service Location'}
            {step === 8 && 'Step 8: Review & Confirm Booking Request'}
          </h2>

          {/* Step Progress Bar */}
          <div style={{
            display: 'flex',
            gap: '4px',
            marginTop: '14px'
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
              <div 
                key={s} 
                style={{
                  height: '4px',
                  flex: 1,
                  borderRadius: '2px',
                  background: s <= step ? 'var(--color-orange-500)' : 'rgba(255, 255, 255, 0.25)',
                  transition: 'background 200ms ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Modal Body: Render Current Step */}
        <div style={{ padding: '28px 24px', minHeight: '380px' }}>
          
          {/* STEP 1: SELECT SERVICE */}
          {step === 1 && (
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Select the core cleaning service you require for your space:
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
                        border: isSelected ? '2px solid var(--color-cyan-500)' : '1.5px solid var(--color-border-light)',
                        background: isSelected ? '#F0F9FF' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: isSelected ? '0 4px 12px rgba(0, 166, 251, 0.15)' : 'none'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontSize: '0.96rem', fontWeight: 800, color: isSelected ? 'var(--color-royal-600)' : 'var(--color-navy-800)' }}>
                            {srv.title}
                          </span>
                          {isSelected && <CheckCircle2 size={18} color="var(--color-cyan-500)" />}
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                          {srv.shortDescription}
                        </p>
                      </div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-green-600)', marginTop: '12px' }}>
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '14px' }}>
                {siteConfig.pricingMatrix.propertyTypes.map(prop => {
                  const isSelected = selectedPropertyType === prop.id;
                  return (
                    <div
                      key={prop.id}
                      onClick={() => setSelectedPropertyType(prop.id)}
                      style={{
                        padding: '18px 16px',
                        borderRadius: '14px',
                        border: isSelected ? '2px solid var(--color-cyan-500)' : '1.5px solid var(--color-border-light)',
                        background: isSelected ? '#F0F9FF' : '#FFFFFF',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all var(--transition-fast)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {['office', 'shop', 'commercial-building', 'college-institution'].includes(prop.id) ? (
                          <Building2 size={20} color={isSelected ? 'var(--color-royal-600)' : 'var(--color-text-light)'} />
                        ) : (
                          <Home size={20} color={isSelected ? 'var(--color-royal-600)' : 'var(--color-text-light)'} />
                        )}
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isSelected ? 'var(--color-royal-600)' : 'var(--color-navy-800)' }}>
                          {prop.name}
                        </span>
                      </div>
                      {isSelected && <CheckCircle2 size={18} color="var(--color-cyan-500)" />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: SELECT SIZE */}
          {step === 3 && (
            <div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Select the size / bedroom configuration of your space:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '14px' }}>
                {!isCommercial ? (
                  siteConfig.pricingMatrix.sizes.residential.map(s => {
                    const isSelected = selectedSize === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        style={{
                          padding: '18px',
                          borderRadius: '14px',
                          border: isSelected ? '2px solid var(--color-cyan-500)' : '1.5px solid var(--color-border-light)',
                          background: isSelected ? '#F0F9FF' : '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '1.05rem', fontWeight: 800, color: isSelected ? 'var(--color-royal-600)' : 'var(--color-navy-800)' }}>
                            {s.name}
                          </div>
                          <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', marginTop: '2px' }}>
                            Approx: {s.sqftRange}
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 size={20} color="var(--color-cyan-500)" />}
                      </div>
                    );
                  })
                ) : (
                  siteConfig.pricingMatrix.sizes.commercial.map(s => {
                    const isSelected = selectedSize === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        style={{
                          padding: '18px',
                          borderRadius: '14px',
                          border: isSelected ? '2px solid var(--color-cyan-500)' : '1.5px solid var(--color-border-light)',
                          background: isSelected ? '#F0F9FF' : '#FFFFFF',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ fontSize: '1rem', fontWeight: 800, color: isSelected ? 'var(--color-royal-600)' : 'var(--color-navy-800)' }}>
                          {s.name}
                        </div>
                        {isSelected && <CheckCircle2 size={20} color="var(--color-cyan-500)" />}
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
                        border: isChecked ? '1.5px solid var(--color-green-500)' : '1.5px solid var(--color-border-light)',
                        background: isChecked ? 'var(--color-green-50)' : '#FFFFFF',
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
                          background: isChecked ? 'var(--color-green-500)' : '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF'
                        }}>
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-navy-800)' }}>
                          {add.name}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--color-royal-600)' }}>
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
                        border: isSelected ? '2px solid var(--color-cyan-500)' : '1.5px solid var(--color-border-light)',
                        background: isSelected ? '#F0F9FF' : '#FFFFFF',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Clock size={18} color={isSelected ? 'var(--color-cyan-500)' : 'var(--color-text-light)'} />
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isSelected ? 'var(--color-royal-600)' : 'var(--color-navy-800)' }}>
                          {slot}
                        </span>
                      </div>
                      {isSelected && <CheckCircle2 size={20} color="var(--color-cyan-500)" />}
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
                    placeholder="House/Flat No, Apartment Name, Street, Landmark, Pincode"
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
                    placeholder="e.g. Focus on kitchen chimney & master bathroom scaling"
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
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Property & Size</div>
                    <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--color-navy-800)', textTransform: 'capitalize' }}>
                      {selectedPropertyType.replace('-', ' ')} ({selectedSize.toUpperCase()})
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
                      Estimated Starting Price:
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      *Transparent estimate. Finalized upon on-site survey without surprise costs.
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {promoApplied && (
                      <div style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: 'var(--color-text-light)' }}>
                        ₹{priceEstimate.rawTotal}
                      </div>
                    )}
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-green-600)', lineHeight: 1 }}>
                      ₹{priceEstimate.finalTotal}
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
          justifyContent: 'space-between'
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
