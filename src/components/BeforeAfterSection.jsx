import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPositions, setSliderPositions] = useState({ 0: 50, 1: 50, 2: 50, 3: 50 });

  const currentCase = siteConfig.beforeAfterCases[activeTab] || siteConfig.beforeAfterCases[0];
  const currentSliderPos = sliderPositions[activeTab] !== undefined ? sliderPositions[activeTab] : 50;

  const handleSliderChange = (e) => {
    setSliderPositions({
      ...sliderPositions,
      [activeTab]: Number(e.target.value)
    });
  };

  return (
    <section className="section-padding" style={{ background: 'var(--color-bg-body)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} color="var(--color-orange-600)" />
            REAL RESULTS
          </span>
          <h2 className="section-title">
            BEFORE & AFTER <span className="text-gradient">TRANSFORMATIONS</span>
          </h2>
          <p className="section-subtitle">
            Slide horizontally to see the dramatic difference professional machine scrubbing, descaling, and stain removal make.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          {siteConfig.beforeAfterCases.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  border: isActive ? '2px solid var(--color-orange-600)' : '1px solid var(--color-border-light)',
                  background: isActive ? 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : 'var(--color-navy-900)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isActive ? '0 4px 14px rgba(234, 88, 12, 0.3)' : 'none'
                }}
              >
                {item.category}
              </button>
            );
          })}
        </div>

        {/* Interactive Slider Container */}
        <div style={{
          maxWidth: '880px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '24px',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--color-border-light)'
        }}>
          
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-900)' }}>
              {currentCase.title}
            </h3>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: 'var(--color-orange-600)', fontWeight: 600 }}>
              <MoveHorizontal size={16} /> Drag slider left or right
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            borderRadius: '16px',
            overflow: 'hidden',
            userSelect: 'none',
            background: '#1C1917'
          }}>
            {/* After Image (Full background) */}
            <img
              src={currentCase.afterImage}
              alt="Cleaned after V Cleaning Services"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* After Label Badge */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.82rem',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              backdropFilter: 'blur(4px)',
              letterSpacing: '0.04em',
              zIndex: 3,
              boxShadow: '0 2px 8px rgba(234, 88, 12, 0.4)'
            }}>
              AFTER (Sparkling Clean)
            </div>

            {/* Before Image (Clipped overlay) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${currentSliderPos}%`,
              overflow: 'hidden',
              filter: 'grayscale(25%) contrast(90%) brightness(85%)'
            }}>
              <img
                src={currentCase.beforeImage}
                alt="Before cleaning"
                style={{
                  width: '880px',
                  maxWidth: 'none',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Before Label Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(28, 25, 23, 0.9)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.82rem',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backdropFilter: 'blur(4px)',
                letterSpacing: '0.04em'
              }}>
                BEFORE (Dirt & Stains)
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${currentSliderPos}%`,
              width: '4px',
              background: '#FFFFFF',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              zIndex: 4,
              transform: 'translateX(-50%)',
              pointerEvents: 'none'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#EA580C',
                boxShadow: '0 4px 14px rgba(234, 88, 12, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <MoveHorizontal size={20} />
              </div>
            </div>

            {/* Invisible Range Input Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={currentSliderPos}
              onChange={handleSliderChange}
              aria-label="Comparison slider"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'ew-resize',
                zIndex: 10
              }}
            />
          </div>

          {/* Description below slider */}
          <div style={{
            marginTop: '18px',
            padding: '14px 18px',
            background: 'var(--color-bg-subtle)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            border: '1px solid var(--color-orange-100)'
          }}>
            <CheckCircle2 size={18} color="var(--color-orange-500)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--color-navy-900)', margin: 0, fontWeight: 500 }}>
              {currentCase.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
