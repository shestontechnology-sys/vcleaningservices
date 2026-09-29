import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge blue">
            <Sparkles size={14} />
            CLARITY & ASSISTANCE
          </span>
          <h2 className="section-title">
            FREQUENTLY ASKED <span className="text-gradient">QUESTIONS</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our cleaning standards, equipment, pricing policies, and scheduling.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: isOpen ? '1.5px solid var(--color-cyan-500)' : '1px solid var(--color-border-light)',
                  borderRadius: '16px',
                  background: isOpen ? '#F8FBFE' : '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: isOpen ? 'var(--color-royal-600)' : 'var(--color-navy-800)',
                    lineHeight: 1.3
                  }}>
                    {faq.question}
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? 'var(--color-cyan-100)' : 'var(--color-bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: isOpen ? 'var(--color-royal-600)' : 'var(--color-text-light)',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 200ms ease'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px 24px',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--color-border-light)',
                    paddingTop: '16px'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
