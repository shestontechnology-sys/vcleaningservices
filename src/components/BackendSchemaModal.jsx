import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Code, 
  Copy, 
  Check, 
  Server, 
  Sparkles, 
  Layers, 
  FileCode 
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const BackendSchemaModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const sqlSchema = `-- =========================================================================
-- V CLEANING SERVICES - PRODUCTION POSTGRESQL / SUPABASE DATABASE SCHEMA
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Customers Table
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(255),
    address TEXT NOT NULL,
    city VARCHAR(100) DEFAULT 'Bengaluru',
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Services Catalog Table
CREATE TABLE services (
    id VARCHAR(100) PRIMARY KEY, -- e.g. 'full-home-cleaning'
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL, -- 'residential' | 'commercial' | 'institutional'
    base_price NUMERIC(10, 2) NOT NULL,
    duration_estimate VARCHAR(100),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Bookings Table (8-Step Engine Target)
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_reference VARCHAR(50) UNIQUE NOT NULL, -- e.g. 'VC-2026-8942'
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    service_id VARCHAR(100) REFERENCES services(id),
    property_type VARCHAR(100) NOT NULL,
    property_size VARCHAR(50) NOT NULL,
    add_ons JSONB DEFAULT '[]'::jsonb,
    preferred_date DATE NOT NULL,
    preferred_time_slot VARCHAR(100) NOT NULL,
    estimated_price NUMERIC(10, 2) NOT NULL,
    final_billed_price NUMERIC(10, 2),
    promo_code VARCHAR(50),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'assigned', 'in_progress', 'completed', 'cancelled')),
    assigned_crew_leader VARCHAR(255),
    special_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Customer Enquiries & Quotes
CREATE TABLE enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    service_required VARCHAR(255),
    property_type VARCHAR(100),
    message TEXT,
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'converted', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Campaign Offers Table (e.g. Aayudha Pooja)
CREATE TABLE campaign_offers (
    code VARCHAR(50) PRIMARY KEY, -- e.g. 'AAYUDHA2026'
    campaign_title VARCHAR(255) NOT NULL,
    discount_percentage NUMERIC(5, 2) DEFAULT 15.00,
    valid_from DATE,
    valid_until DATE,
    is_active BOOLEAN DEFAULT TRUE
);

-- 6. Customer Testimonials Table
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    service_name VARCHAR(255),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    is_published BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes for High Performance
CREATE INDEX idx_bookings_date ON bookings(preferred_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_customers_phone ON customers(phone);
CREATE INDEX idx_enquiries_status ON enquiries(status);
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlSchema);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '880px', padding: '32px 28px' }}
      >
        <button
          onClick={onClose}
          aria-label="Close Schema Modal"
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
            color: 'var(--color-navy-900)',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span className="section-badge" style={{ margin: 0 }}>
            <Database size={14} color="var(--color-orange-600)" /> ARCHITECTURE & BACKEND READINESS
          </span>
        </div>

        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy-900)' }}>
          Future Backend & Database Schema
        </h2>

        <p style={{ fontSize: '0.94rem', color: 'var(--color-text-muted)', marginTop: '4px', marginBottom: '20px' }}>
          Ready-to-deploy schema for Supabase, PostgreSQL, Firebase, or Node.js. Supports Customers, Bookings, Services, Pricing, Enquiries, Testimonials, and Campaign Offers.
        </p>

        {/* Action Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#1C1917',
          padding: '12px 18px',
          borderTopLeftRadius: '14px',
          borderTopRightRadius: '14px',
          color: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-orange-400)', fontWeight: 600 }}>
            <FileCode size={16} />
            <span>schema.sql (PostgreSQL / Supabase DDL)</span>
          </div>

          <button
            onClick={handleCopy}
            className="btn btn-sm"
            style={{
              background: copied ? 'var(--color-orange-600)' : 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              border: 'none',
              padding: '6px 14px',
              fontSize: '0.8rem'
            }}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy SQL Schema'}</span>
          </button>
        </div>

        {/* Code View Area */}
        <pre style={{
          background: '#292524',
          color: '#F5F5F4',
          padding: '20px',
          borderBottomLeftRadius: '14px',
          borderBottomRightRadius: '14px',
          fontSize: '0.82rem',
          maxHeight: '380px',
          overflowY: 'auto',
          lineHeight: 1.5,
          fontFamily: 'monospace'
        }}>
          <code>{sqlSchema}</code>
        </pre>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button onClick={onClose} className="btn btn-primary">
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
