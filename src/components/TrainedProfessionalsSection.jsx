import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  CheckCircle, 
  Award, 
  BadgeCheck, 
  Lock, 
  HeartHandshake 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const TrainedProfessionalsSection = ({ onOpenBooking }) => {
  return (
    <section className="section-padding" style={{ background: '#FFFFFF', position: 'relative' }}>
      <div className="container">
        
        {/* Main Content Box */}
        <div style={{
          background: 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #431407 100%)',
          borderRadius: '28px',
          padding: '48px 36px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid rgba(249, 115, 22, 0.25)'
        }} className="trained-wrapper">
          
          {/* Subtle Glows */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.12)', padding: '6px 16px', borderRadius: 'var(--radius-full)', color: 'var(--color-orange-400)', fontSize: '0.84rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
              <ShieldCheck size={16} />
              TRUST & CREDIBILITY
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '16px' }}>
              TRAINED PROFESSIONALS
            </h2>

            <p style={{ fontSize: '1.15rem', color: '#E2E8F0', lineHeight: 1.6 }}>
              Our cleaning professionals are trained to follow rigorous professional cleaning standards and procedures.
            </p>

            {/* Credibility statement */}
            <div style={{
              margin: '20px auto 0 auto',
              padding: '12px 20px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              borderRadius: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.94rem',
              color: '#FED7AA',
              fontWeight: 500
            }}>
              <Award size={20} color="var(--color-orange-400)" />
              <span>
                Field staff with <strong>training & experience associated with Urban Company and NoBroker</strong> cleaning workflows.
              </span>
            </div>
          </div>

          {/* 3 Core Trust Pillars: SKILLED, VERIFIED, RELIABLE */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '36px'
          }}>
            {siteConfig.credibility.pillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all var(--transition-base)'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(234, 88, 12, 0.4)'
                }}>
                  {pillar.title === 'SKILLED' && <Award size={28} />}
                  {pillar.title === 'VERIFIED' && <UserCheck size={28} />}
                  {pillar.title === 'RELIABLE' && <ShieldCheck size={28} />}
                </div>

                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>
                  {pillar.title}
                </div>

                <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Legal Compliance Disclaimer */}
          <div style={{
            textAlign: 'center',
            fontSize: '0.78rem',
            color: '#A8A29E',
            maxWidth: '720px',
            margin: '0 auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '18px'
          }}>
            {siteConfig.credibility.legalDisclaimer}
          </div>

        </div>

      </div>
    </section>
  );
};
