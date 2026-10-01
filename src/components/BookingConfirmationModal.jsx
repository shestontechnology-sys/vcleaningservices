import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle, 
  Sparkles, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Home, 
  X,
  FileCheck,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const BookingConfirmationModal = ({ booking, onClose, onOpenContact }) => {
  if (!booking) return null;

  useEffect(() => {
    // Fire celebratory confetti on appearance
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#EA580C', '#F97316', '#F59E0B', '#FED7AA', '#FB923C']
      });
    } catch (e) {
      // Fallback silently if canvas-confetti is not rendered
    }
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '620px', padding: '36px 28px', textAlign: 'center' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close confirmation"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'var(--color-bg-subtle)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-navy-800)',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {/* Success Icon */}
        <div style={{
          width: '76px',
          height: '76px',
          borderRadius: '50%',
          background: 'var(--color-green-100)',
          color: 'var(--color-green-600)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          boxShadow: '0 0 25px rgba(16, 185, 129, 0.3)'
        }}>
          <CheckCircle size={44} strokeWidth={2.5} />
        </div>

        {/* Header */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-green-600)', fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
          <Sparkles size={14} />
          <span>BOOKING REQUEST RECEIVED</span>
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '8px' }}>
          Thank You for Choosing <br /> V Cleaning Services!
        </h2>

        <p style={{ fontSize: '0.98rem', color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.5 }}>
          Your service request has been logged. Our dispatch supervisor will contact you via your registered details to confirm crew assignment.
        </p>

        {/* Booking Details Card */}
        <div style={{
          background: 'var(--color-bg-subtle)',
          border: '1.5px solid var(--color-border-light)',
          borderRadius: '16px',
          padding: '22px',
          textAlign: 'left',
          marginBottom: '26px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border-light)', paddingBottom: '12px', marginBottom: '14px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Booking Reference ID:</span>
            <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-royal-600)', background: '#FFFFFF', padding: '3px 10px', borderRadius: '6px', border: '1px solid var(--color-border-light)' }}>
              {booking.bookingId}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.9rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Service:</div>
              <div style={{ fontWeight: 700, color: 'var(--color-navy-800)' }}>{booking.serviceTitle}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Property & Size:</div>
              <div style={{ fontWeight: 700, color: 'var(--color-navy-800)', textTransform: 'capitalize' }}>
                {booking.propertyType.replace('-', ' ')} ({booking.size.toUpperCase()})
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Scheduled Date:</div>
              <div style={{ fontWeight: 700, color: 'var(--color-navy-800)' }}>{booking.date}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Time Slot:</div>
              <div style={{ fontWeight: 700, color: 'var(--color-navy-800)' }}>{booking.timeSlot.split('(')[0]}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Customer Name:</div>
              <div style={{ fontWeight: 700, color: 'var(--color-navy-800)' }}>{booking.customer.fullName}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: 600 }}>Estimated Amount:</div>
              <div style={{ fontWeight: 800, color: 'var(--color-green-600)', fontSize: '1.05rem' }}>₹{booking.estimatedPrice}</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Home size={16} />
            <span>BACK TO HOME</span>
          </button>

          <button
            onClick={() => { onClose(); onOpenContact(); }}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}
          >
            <Mail size={16} />
            <span>CONTACT TEAM</span>
          </button>
        </div>

      </div>
    </div>
  );
};
