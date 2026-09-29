# V CLEANING SERVICES — Official Website & Booking Platform

> **Tagline:** *Cleaner Spaces | Healthier Lives*  
> **Secondary Message:** *Professional Cleaning for a Brighter Tomorrow*  
> **Official Email:** `vcleaningservices@gmail.com`

---

## 🌟 Overview

**V Cleaning Services** is an original, production-ready web application and booking platform for residential, commercial, and educational institutional cleaning services. 

### Key Highlights & Achievements
- 🏆 **1000+ Houses Cleaned**
- 🏛️ **10+ College Campuses Cleaned**
- 🛡️ **Trained Professionals:** Multi-platform trained crew with experience and training associated with Urban Company and NoBroker workflows.
- 🪔 **Aayudha Pooja Special Offer Campaign:** High-impact festive campaign with custom promo code `AAYUDHA2026` and priority scheduling.

---

## 🚀 Quick Start (Run Locally)

### 1. Navigate to Project Directory
```bash
cd "C:\Users\HP\.gemini\antigravity-ide\scratch\v-cleaning-services"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 4. Build for Production
```bash
npm run build
```
Production assets will be built to `/dist`.

---

## 🎨 Design System & Visual Identity

- **Color Palette:**
  - **Deep Navy Blue:** `#0B2545` (Executive Trust)
  - **Royal Blue:** `#134074` (Professional Stability)
  - **Sky / Cyan Blue:** `#00A6FB` (Modern Sparkle & Hygiene)
  - **Fresh Leaf Green:** `#10B981` (Eco-friendly Freshness)
  - **White & Light Blues:** `#FFFFFF` & `#F4F8FC` (Clean Surfaces)
  - **Festive Gold / Saffron:** `#F59E0B` & `#D97706` (Aayudha Pooja Campaign)
- **Typography:** Inter, Poppins, and Plus Jakarta Sans (loaded via Google Fonts).
- **Brand Logo:** Custom vector SVG featuring a stylized **V** merged with modern roofline geometry, emerald eco-leaf, and sparkling star gleam.

---

## 🛠️ Complete Feature Architecture

| # | Feature / Section | Description |
|---|---|---|
| 1 | **Sticky Header** | Responsive navbar that shrinks on scroll, featuring brand logo, quick phone link, offer pill, and mobile drawer. |
| 2 | **Hero Section** | Bold headline, live animated counting numbers (1000+ Houses, 10+ Campuses), dual CTAs, and 3 floating UI glass cards. |
| 3 | **Aayudha Pooja Campaign** | Visually distinct festive banner with marigold motif, traditional lamp glow, festive perks, and instant booking. |
| 4 | **Services Catalog (8 Services)** | Full Home, Commercial, College Campus, Kitchen Deep Clean, Bathroom Descaling, Sofa Shampooing, Move-In/Out, and Custom Cleaning. |
| 5 | **Service Detail Modals** | In-depth pages for every service with Inclusions checklist, Exclusions, 4-step process, equipment list, benefits, and duration. |
| 6 | **8-Step Booking Engine** | Interactive step-by-step wizard: Service → Property Type → BHK/Size → Add-ons → Date → Time Slot → Customer Details → Dynamic Summary. |
| 7 | **Dynamic Quote Calculator** | Real-time transparent price estimator with property multipliers and customizable add-ons. |
| 8 | **Booking Confirmation** | Celebratory screen with confetti animation, unique Reference ID (`VC-2026-XXXX`), WhatsApp share hook, and receipt overview. |
| 9 | **Why Choose Us** | 8 feature cards showcasing 50+ checkpoint checklists, industrial machinery, and 1000+ homes track record. |
| 10 | **Trained Professionals** | Trust section highlighting SKILLED, VERIFIED, and RELIABLE pillars with compliant credibility statements. |
| 11 | **4-Step How It Works** | 01 Choose Service → 02 Requirements → 03 Schedule → 04 Enjoy Cleaner Space. |
| 12 | **Before & After Slider** | Interactive comparison slider with draggable handle across Kitchen, Bathroom, Living Floor, and Commercial Office cases. |
| 13 | **Achievements Stats** | Animated counters triggered upon scrolling into the viewport. |
| 14 | **Customer Reviews** | Honest testimonials with clearly marked placeholder slots and an interactive "Leave a Review" modal. |
| 15 | **Our Work Gallery** | Filterable grid with Lightbox modal preview for image zoom. |
| 16 | **FAQ Accordion** | Full coverage of all 10 client questions (Full home, commercial, campus, pricing, duration, equipment, booking, etc.). |
| 17 | **Contact Section** | "LET'S MAKE YOUR SPACE SPARKLE" with direct email (`vcleaningservices@gmail.com`), phone, and interactive enquiry form with success alerts. |
| 18 | **Floating Action Buttons** | WhatsApp chat button, direct phone call button, and mobile sticky bottom action bar. |
| 19 | **Dedicated Modals** | Dedicated Views for "About Us", "Offers & Packages", and "Developer Database Schema". |

---

## ⚙️ Centralized Configuration (`src/config/siteConfig.js`)

All critical business parameters can be updated in **one single file** without touching any component code:
- `brand.name`, `brand.tagline`, `brand.email`, `brand.phone`, `brand.serviceAreas`
- `statistics.housesCleaned` and `statistics.campusesCleaned`
- `campaigns.aayudhaPooja` (headline, discount code, perks)
- `services` (pricing, duration, inclusions, exclusions, process)
- `pricingMatrix` (multipliers, BHK base prices, add-on rates, time slots)
- `testimonials`, `gallery`, `faqs`, and `beforeAfterCases`

---

## 🗄️ Future Backend & Database Schema

The frontend is structured to connect seamlessly to **Supabase**, **PostgreSQL**, **Firebase**, or a **Node.js** API.

The database tables defined in `siteConfig.databaseSchemaInfo` and `BackendSchemaModal.jsx`:
- `customers` (UUID, full_name, phone, email, address, city)
- `bookings` (UUID, booking_reference, customer_id, service_id, property_type, property_size, add_ons, preferred_date, preferred_time_slot, estimated_price, status)
- `services` (id, title, category, base_price, description, is_active)
- `enquiries` (id, name, phone, email, service_required, property_type, message, status)
- `campaign_offers` (code, campaign_title, discount_percentage, is_active)
- `testimonials` (id, customer_name, location, service_name, rating, comment)

---

## 📄 License & Compliance

© 2026 V Cleaning Services. All Rights Reserved.  
*All content and design are original creations built specifically for V Cleaning Services.*
