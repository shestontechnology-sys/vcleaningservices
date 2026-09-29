import React from 'react';
import { 
  X, 
  Sparkles, 
  Target, 
  ShieldCheck, 
  Users, 
  Award, 
  Building2, 
  Home, 
  HeartHandshake,
  Calendar
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AboutModal = ({ onClose, onOpenBooking }) => {
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '820px', padding: '36px 30px' }}
      >
        <button
          onClick={onClose}
          aria-label="Close About Modal"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
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

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span className="section-badge blue" style={{ margin: 0 }}>
            <Sparkles size={14} /> ABOUT V CLEANING SERVICES
          </span>
        </div>

        <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--color-navy-800)', marginBottom: '14px', letterSpacing: '-0.02em' }}>
          Cleaner Spaces | Healthier Lives
        </h2>

        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
          {siteConfig.brand.name} is a premier professional cleaning company providing specialized residential, commercial, and large-scale institutional cleaning solutions.
        </p>

        {/* 4 Story Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          
          {/* Who We Are */}
          <div style={{ background: 'var(--color-bg-subtle)', padding: '22px', borderRadius: '16px', border: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-royal-600)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>
              <Users size={20} />
              <span>Who We Are</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              A dedicated team of cleaning specialists, equipment technicians, and supervisor leads committed to delivering top-tier hygiene and spotless aesthetics for Indian homes and workplaces.
            </p>
          </div>

          {/* Our Experience */}
          <div style={{ background: 'var(--color-bg-subtle)', padding: '22px', borderRadius: '16px', border: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-green-600)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>
              <Award size={20} />
              <span>Our Experience</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              Proven milestone of <strong>1000+ Houses Cleaned</strong> and <strong>10+ College Campuses Cleaned</strong> with standardized single-disc floor scrubbers, high-vacuum extractors, and hospital-grade sanitizers.
            </p>
          </div>

          {/* Our Team */}
          <div style={{ background: 'var(--color-bg-subtle)', padding: '22px', borderRadius: '16px', border: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-royal-600)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>
              <ShieldCheck size={20} />
              <span>Our Team</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              Trained cleaning professionals focused on quality, safety, and customer satisfaction. Field staff with training and experience associated with Urban Company and NoBroker quality workflows.
            </p>
          </div>

          {/* Our Mission */}
          <div style={{ background: 'var(--color-bg-subtle)', padding: '22px', borderRadius: '16px', border: '1px solid var(--color-border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-green-600)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>
              <Target size={20} />
              <span>Our Mission</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              <em>"To make professional, hygienic, and thorough cleaning accessible, reliable, and convenient for every household and institution."</em>
            </p>
          </div>

        </div>

        {/* Modal Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', borderTop: '1px solid var(--color-border-light)', paddingTop: '20px' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
          <button 
            onClick={() => { onClose(); onOpenBooking(); }} 
            className="btn btn-primary"
            style={{ fontWeight: 700 }}
          >
            <Calendar size={16} />
            <span>Book a Cleaning Service</span>
          </button>
        </div>

      </div>
    </div>
  );
};
