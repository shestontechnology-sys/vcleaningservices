import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Calculator,
  MessageSquare
} from 'lucide-react';

export const ContactSection = ({ onOpenBooking, onOpenQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequired: 'Full Home Cleaning',
    propertyType: 'Apartment',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceRequired: 'Full Home Cleaning',
        propertyType: 'Apartment',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--color-bg-body)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge blue">
            <Sparkles size={14} />
            REACH OUR TEAM
          </span>
          <h2 className="section-title">
            LET'S MAKE YOUR <span className="text-gradient">SPACE SPARKLE</span>
          </h2>
          <p className="section-subtitle">
            Get in touch for custom cleaning requirements, residential bookings, or institutional RFPs.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '36px',
          background: '#FFFFFF',
          borderRadius: '28px',
          padding: '36px 32px',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--color-border-light)'
        }} className="contact-main-grid">

          {/* Left Column: Direct Info & Quick Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            
            <div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '8px' }}>
                Quick Direct Connect
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Have questions or need rapid assistance? Our customer support operates 7 days a week.
              </p>
            </div>

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <a
                href={`mailto:${siteConfig.brand.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '16px',
                  background: 'var(--color-bg-subtle)',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border-light)',
                  color: 'var(--color-navy-800)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--color-cyan-100)', color: 'var(--color-royal-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Official Email</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 800 }}>{siteConfig.brand.email}</div>
                </div>
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px',
                background: 'var(--color-bg-subtle)',
                borderRadius: '16px',
                border: '1px solid var(--color-border-light)'
              }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--color-green-100)', color: 'var(--color-green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Fast Support</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 800 }}>Quick Email & Booking Response</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px',
                background: 'var(--color-bg-subtle)',
                borderRadius: '16px',
                border: '1px solid var(--color-border-light)'
              }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#F1F5F9', color: 'var(--color-navy-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Working Hours</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-navy-800)' }}>{siteConfig.brand.workingHours}</div>
                </div>
              </div>

            </div>

            {/* Quick Action Button Group */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              <a
                href={`mailto:${siteConfig.brand.email}`}
                className="btn btn-secondary btn-sm"
              >
                <Mail size={15} />
                <span>EMAIL US</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="btn btn-secondary btn-sm"
              >
                <Calculator size={15} />
                <span>REQUEST A QUOTE</span>
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="btn btn-primary btn-sm"
                style={{ fontWeight: 700 }}
              >
                <Calendar size={15} />
                <span>BOOK A CLEANING</span>
              </button>
            </div>

          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div style={{
            background: 'var(--color-bg-surface)',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid var(--color-border-light)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '18px' }}>
              Send a Service Enquiry
            </h3>

            {submitted ? (
              <div style={{
                padding: '36px 20px',
                background: 'var(--color-green-50)',
                border: '1.5px solid var(--color-green-100)',
                borderRadius: '16px',
                textAlign: 'center',
                color: 'var(--color-green-600)',
                animation: 'scaleUp 250ms ease'
              }}>
                <CheckCircle2 size={48} style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-800)' }}>
                  Thank you! Our team will contact you shortly.
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                  We have received your requirements and will reach out via phone/email within 30 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span style={{ color: '#E11D48', fontSize: '0.78rem' }}>{errors.name}</span>}
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <span style={{ color: '#E11D48', fontSize: '0.78rem' }}>{errors.phone}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Service Required</label>
                    <select
                      className="form-select"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    >
                      {siteConfig.services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Property Type</label>
                  <select
                    className="form-select"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  >
                    <option value="Apartment">Apartment</option>
                    <option value="Villa / Independent House">Villa / Independent House</option>
                    <option value="Office / Commercial Space">Office / Commercial Space</option>
                    <option value="College / Educational Institution">College / Educational Institution</option>
                    <option value="Other Custom Requirement">Other Custom Requirement</option>
                  </select>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Message / Details</label>
                  <textarea
                    className="form-textarea"
                    rows={3}
                    placeholder="Tell us about specific cleaning needs, preferred dates, or event cleanup..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ fontWeight: 800, padding: '14px', width: '100%', marginTop: '6px' }}
                >
                  <Send size={16} />
                  <span>SEND ENQUIRY</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-main-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
};
