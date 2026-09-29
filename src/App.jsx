import React, { useState } from 'react';
import './styles/designSystem.css';

// Components
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FestiveBanner } from './components/FestiveBanner';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BookingSystemModal } from './components/BookingSystemModal';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { DynamicQuoteModal } from './components/DynamicQuoteModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrainedProfessionalsSection } from './components/TrainedProfessionalsSection';
import { HowItWorks } from './components/HowItWorks';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CustomerReviews } from './components/CustomerReviews';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { AboutModal } from './components/AboutModal';
import { OffersModal } from './components/OffersModal';
import { BackendSchemaModal } from './components/BackendSchemaModal';
import { FloatingActionButtons } from './components/FloatingActionButtons';
import { Footer } from './components/Footer';

export function App() {
  // Modal State Management
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPreselectedService, setBookingPreselectedService] = useState('full-home-cleaning');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState('full-home-cleaning');
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);
  const [offersModalOpen, setOffersModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [schemaModalOpen, setSchemaModalOpen] = useState(false);

  // Modal Triggers
  const handleOpenBooking = (serviceId = 'full-home-cleaning') => {
    setBookingPreselectedService(serviceId);
    setBookingModalOpen(true);
  };

  const handleOpenQuote = (serviceId = 'full-home-cleaning') => {
    setQuotePreselectedService(serviceId);
    setQuoteModalOpen(true);
  };

  const handleBookingSuccess = (bookingDetails) => {
    setBookingModalOpen(false);
    setConfirmedBookingData(bookingDetails);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. Sticky Navigation Header */}
      <Header 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenQuote={() => handleOpenQuote()}
        onOpenOffers={() => setOffersModalOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
      />

      <main style={{ flexGrow: 1 }}>
        {/* 2. Hero Section with Floating UI Cards & Animated Numbers */}
        <HeroSection 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* 3. High-Impact Aayudha Pooja Festive Campaign Banner */}
        <FestiveBanner 
          onOpenBooking={(srv) => handleOpenBooking(srv)}
          onOpenContact={handleScrollToContact}
          onOpenOffers={() => setOffersModalOpen(true)}
        />

        {/* 4. Complete Services Section (8 Services with tabs & checklists) */}
        <ServicesSection 
          onSelectService={(service) => setSelectedServiceDetail(service)}
          onOpenBooking={(srv) => handleOpenBooking(srv)}
          onOpenQuote={(srv) => handleOpenQuote(srv)}
        />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* 6. Trained Professionals Trust Section (Legal compliant credibility) */}
        <TrainedProfessionalsSection 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* 7. 4-Step How It Works Section */}
        <HowItWorks 
          onOpenBooking={() => handleOpenBooking()} 
        />

        {/* 8. Interactive Before / After Cleaning Comparison Slider */}
        <BeforeAfterSection />

        {/* 9. Achievements Section (1000+ Houses, 10+ Campuses) */}
        <AchievementsSection />

        {/* 10. Customer Reviews & Testimonials Carousel */}
        <CustomerReviews />

        {/* 11. Our Work Gallery with Lightbox */}
        <GallerySection />

        {/* 12. Frequently Asked Questions Accordion (All 10 questions) */}
        <FAQSection />

        {/* 13. Contact Section with Direct Email & Form */}
        <ContactSection 
          onOpenBooking={() => handleOpenBooking()}
          onOpenQuote={() => handleOpenQuote()}
        />
      </main>

      {/* 14. Brand Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
        onOpenOffers={() => setOffersModalOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenSchema={() => setSchemaModalOpen(true)}
      />

      {/* 15. Floating Action Buttons (WhatsApp, Call, Mobile Sticky Bar) */}
      <FloatingActionButtons 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* MODALS */}

      {/* Service Detail Modal */}
      {selectedServiceDetail && (
        <ServiceDetailModal
          service={selectedServiceDetail}
          onClose={() => setSelectedServiceDetail(null)}
          onOpenBooking={(srvId) => handleOpenBooking(srvId)}
          onOpenQuote={(srvId) => handleOpenQuote(srvId)}
        />
      )}

      {/* 8-Step Interactive Booking Engine Modal */}
      {bookingModalOpen && (
        <BookingSystemModal
          initialServiceId={bookingPreselectedService}
          onClose={() => setBookingModalOpen(false)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      {/* Dynamic Price & Quote Calculator Modal */}
      {quoteModalOpen && (
        <DynamicQuoteModal
          initialServiceId={quotePreselectedService}
          onClose={() => setQuoteModalOpen(false)}
          onProceedToBook={(srvId) => handleOpenBooking(srvId)}
        />
      )}

      {/* Booking Confirmation Receipt Screen with Confetti */}
      {confirmedBookingData && (
        <BookingConfirmationModal
          booking={confirmedBookingData}
          onClose={() => setConfirmedBookingData(null)}
          onOpenContact={handleScrollToContact}
        />
      )}

      {/* Dedicated Offers Modal */}
      {offersModalOpen && (
        <OffersModal
          onClose={() => setOffersModalOpen(false)}
          onOpenBooking={() => handleOpenBooking()}
          onOpenContact={handleScrollToContact}
        />
      )}

      {/* Dedicated About Us Modal */}
      {aboutModalOpen && (
        <AboutModal
          onClose={() => setAboutModalOpen(false)}
          onOpenBooking={() => handleOpenBooking()}
        />
      )}

      {/* Developer Backend & Database Schema Modal */}
      {schemaModalOpen && (
        <BackendSchemaModal
          onClose={() => setSchemaModalOpen(false)}
        />
      )}

    </div>
  );
}

export default App;
