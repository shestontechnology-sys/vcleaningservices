import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Home, Building2, Smile, Award, Sparkles } from 'lucide-react';

export const AchievementsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [houseCount, setHouseCount] = useState(0);
  const [campusCount, setCampusCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);

        const duration = 1800;
        const steps = 40;
        const intervalTime = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          setHouseCount(Math.min(Math.floor(progress * siteConfig.statistics.housesCleaned), siteConfig.statistics.housesCleaned));
          setCampusCount(Math.min(Math.floor(progress * siteConfig.statistics.campusesCleaned), siteConfig.statistics.campusesCleaned));

          if (step >= steps) {
            clearInterval(timer);
          }
        }, intervalTime);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} style={{
      padding: '70px 0',
      background: 'linear-gradient(135deg, #07172C 0%, #0B2545 100%)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="section-badge blue" style={{ background: 'rgba(0, 166, 251, 0.15)', color: 'var(--color-cyan-400)' }}>
            <Sparkles size={14} />
            OUR TRACK RECORD & IMPACT
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginTop: '8px' }}>
            PROVEN ACHIEVEMENTS ACROSS SPACES
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', maxWidth: '600px', margin: '8px auto 0 auto' }}>
            Trusted by residential families, property managers, and top educational directors.
          </p>
        </div>

        {/* 4 Big Numbers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          
          {/* Stat 1: Houses Cleaned */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '32px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(0, 166, 251, 0.2)',
              color: 'var(--color-cyan-400)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Home size={28} />
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}>
              {houseCount}+
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-cyan-400)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              HOUSES CLEANED
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>
              Apartments, villas, and independent homes deep cleaned
            </p>
          </div>

          {/* Stat 2: College Campuses Cleaned */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '32px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(16, 185, 129, 0.2)',
              color: 'var(--color-green-400)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Building2 size={28} />
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}>
              {campusCount}+
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-green-400)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              COLLEGE CAMPUSES
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>
              Institutional scale lecture halls & campus corridors
            </p>
          </div>

          {/* Stat 3: Satisfaction */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '32px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(245, 158, 11, 0.2)',
              color: 'var(--color-festive-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Smile size={28} />
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}>
              {siteConfig.statistics.satisfactionRate}
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-festive-gold)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              CLIENT SATISFACTION
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>
              Rated across post-service customer feedback surveys
            </p>
          </div>

          {/* Stat 4: Trained Crew */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '32px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(0, 166, 251, 0.2)',
              color: 'var(--color-cyan-400)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Award size={28} />
            </div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}>
              {siteConfig.statistics.trainedCrew}
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--color-cyan-400)', marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              VERIFIED PROFESSIONALS
            </div>
            <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>
              Background checked and platform certified teams
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
