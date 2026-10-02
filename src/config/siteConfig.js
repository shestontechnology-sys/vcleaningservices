/**
 * V CLEANING SERVICES - Central Configuration File
 * 
 * Edit business details, numbers, services, campaign offers,
 * pricing formulas, and content here without modifying individual components.
 */

export const siteConfig = {
  // Brand & Contact Information
  brand: {
    name: "V Cleaning Services",
    shortName: "V Cleaning",
    tagline: "Cleaner Spaces | Healthier Lives",
    secondaryTagline: "Professional Cleaning for a Brighter Tomorrow",
    email: "vcleaningservices@gmail.com",
    phone: null, // Phone number hidden as of now
    phoneDisplay: null,
    whatsappNumber: null, // Disabled until business number is provided
    whatsappPrefillText: "Hello V Cleaning Services, I would like to enquire about cleaning services.",
    address: {
      street: "Service Hub, City Center",
      city: "Bengaluru / Chennai / Hyderabad",
      region: "South India",
      country: "India"
    },
    serviceAreas: ["Residential Communities & Villas", "Independent Houses & Plots", "Tech Parks & Commercial Hubs", "Educational Campuses", "Retail & Hospitality"],
    workingHours: "Monday – Sunday: 7:00 AM – 9:00 PM",
    socialLinks: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      youtube: "https://youtube.com"
    }
  },

  // Key Statistics & Achievements
  statistics: {
    housesCleaned: 1000,
    housesCleanedDisplay: "1000+",
    campusesCleaned: 10,
    campusesCleanedDisplay: "10+",
    satisfactionRate: "99.4%",
    trainedCrew: "100%",
    yearsExperience: "5+"
  },

  // Credibility & Training Standards
  credibility: {
    heading: "TRAINED PROFESSIONALS",
    subheading: "Our cleaning professionals are trained through experience and rigorous training associated with Urban Company and NoBroker standards.",
    legalDisclaimer: "Note: V Cleaning Services operates independently with staff equipped with multi-platform training and industry experience.",
    pillars: [
      {
        title: "SKILLED",
        description: "Trained in specialized surface handling, marble buffing, grease extraction, adhesive sticker removal, and sanitization protocols.",
        icon: "ShieldCheck"
      },
      {
        title: "VERIFIED",
        description: "Background-verified, identity-authenticated, and health-screened team members for complete peace of mind.",
        icon: "UserCheck"
      },
      {
        title: "RELIABLE",
        description: "Punctual, fully-equipped with industrial-grade tools, eco-friendly agents, and supervised work execution.",
        icon: "Sparkles"
      }
    ]
  },

  // Seasonal High-Impact Campaign (Aayudha Pooja)
  campaigns: {
    aayudhaPooja: {
      id: "aayudha-pooja-special",
      badge: "FESTIVE CAMPAIGN",
      title: "AAYUDHA POOJA SPECIAL OFFER",
      headline: "Give Your Home, Villa or Workplace a Fresh Start This Aayudha Pooja",
      subtext: "Get Exclusive Offers on Deep Cleaning & Equipment Care Services for Apartments, Villas, Plots, Offices, and Campuses.",
      ctaPrimary: "BOOK FESTIVE CLEANING",
      ctaSecondary: "CONTACT US FOR OFFERS",
      promoCode: "AAYUDHA2026",
      offerHighlight: "Special festive package with tool & machinery sanitization, floor scrubbing, sticker mark removal, and sparkling brass fixture polish.",
      isActive: true,
      perks: [
        "Priority festive slot reservation",
        "Free complimentary appliance exterior detailing",
        "Deep mechanized floor scrubbing & dust removal",
        "Custom vehicle/machinery puja cleaning on request"
      ]
    }
  },

  // Comprehensive Services Catalog
  services: [
    {
      id: "full-home-cleaning",
      title: "APARTMENT FULL HOME DEEP CLEANING",
      category: "residential",
      shortDescription: "Complete full home deep cleaning for 1 BHK to 5+ BHK apartments and flats.",
      detailedDescription: "A thorough top-to-bottom deep sanitization and transformation for your apartment. In Full Home Cleaning, we strictly perform comprehensive DEEP CLEANING covering all rooms, balconies, kitchen degreasing, bathroom descaling, fan/switchboard dusting, and mechanized rotary floor scrubbing.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Starting From ₹4,000 (Empty: ₹4,000 | Occupied: ₹4,500)",
      startingPrice: 4000,
      pricingType: "rateCard",
      rateCardType: "apartment",
      duration: "4 - 8 Hours (Depending on BHK size)",
      rating: "4.95",
      reviewsCount: "680+",
      included: [
        "Living room deep vacuuming, dusting & mechanized floor scrubbing",
        "Bedroom cleaning, wardrobe exterior dusting & under-bed clearance",
        "Kitchen deep degreasing (countertops, tiles, sink & cabinet fronts)",
        "Bathroom deep descaling (tiles, commode, washbasin, taps & glass)",
        "Balcony floor washing, railing wipe-down & cobweb removal",
        "Rotary floor machine buffing with eco-friendly solutions",
        "Window glass cleaning, mosquito mesh dusting & sill wiping",
        "Full surface sanitization, switchboards & light fixtures detailing"
      ],
      notIncluded: [
        "Interior wardrobe reorganization (unless cleared beforehand)",
        "Wall painting or heavy plaster restoration",
        "Severe post-construction paint scraping (available in Heavy Stains package)"
      ],
      cleaningProcess: [
        "Dry vacuuming and high-reach cobweb removal",
        "Deep degreasing and tile scrubbing with rotary machines",
        "Sanitizing high-touch surfaces & bathroom fittings",
        "Final quality inspection and client walkthrough checklist"
      ],
      equipmentUsed: ["Single Disc Rotary Scrubber", "High-Pressure Wet/Dry Vacuum", "Microfiber Color-Coded Cloths", "Eco-Friendly Alkaline Cleaners", "Glass Squeegees"],
      benefits: ["Eliminates 99.9% dust mites and allergens", "Restores gleam to dull marble/vitrified tiles", "Saves 10+ hours of exhausting weekend labor"]
    },
    {
      id: "villa-deep-cleaning",
      title: "INDIVIDUAL VILLA & PLOT DEEP CLEANING",
      category: "residential",
      shortDescription: "Specialized deep cleaning for independent villas, duplexes, plots, and bungalows by sq. ft.",
      detailedDescription: "Designed specifically for independent houses, luxury villas, plots, row houses, and multi-floor duplex homes. Includes complete multi-story dusting, extensive balcony/terrace washing, exterior entryways, detailed bathroom descaling, kitchen grease removal, and heavy-duty mechanized floor buffing.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Starting From ₹4,200 (Tiered by Sq. Ft. & Occupancy)",
      startingPrice: 4200,
      pricingType: "rateCard",
      rateCardType: "villa",
      duration: "5 - 9 Hours",
      rating: "4.97",
      reviewsCount: "340+",
      included: [
        "Multi-story staircase railing, steps, and skirting board scrub",
        "All bedrooms, master suites, guest rooms & wardrobe exterior polish",
        "Modular kitchen chimney hood, tiles & countertop degreasing",
        "All bathrooms complete limescale removal & sanitary ware polish",
        "Terrace, sit-out & balcony high-pressure washing",
        "Compound gate, portico & entryway mechanized floor scrubbing",
        "Large French windows, sliding glass doors & mosquito mesh detailing",
        "Ceiling fans, chandeliers & high-ceiling cobweb extraction"
      ],
      notIncluded: [
        "Garden landscaping or tree trimming",
        "Underground water sump cleaning (available on custom request)"
      ],
      cleaningProcess: [
        "Multi-floor zoning and high-reach dust elimination",
        "Rotary floor scrubbing across all rooms & corridors",
        "Intensive bathroom descaling & chrome fixture polishing",
        "Balcony & porch pressure wash with final sanitization"
      ],
      equipmentUsed: ["Heavy-Duty Rotary Scrubbers", "High-Pressure Water Jets", "Industrial HEPA Wet/Dry Extractors", "Multi-surface Eco Degreasers"],
      benefits: ["Handles large square footages effortlessly", "Restores shine to premium marble & granite floors", "Guarantees complete multi-floor spotless turnover"]
    },
    {
      id: "heavy-stains-cleaning",
      title: "STICKER MARKS & HEAVY STAINS DEEP CLEANING",
      category: "residential",
      shortDescription: "Intensive deep removal of stubborn adhesive sticker marks, heavy floor stains & paint splatters.",
      detailedDescription: "Specialized intensive restoration deep cleaning for homes with tough adhesive residues, tape & sticker marks on tiles/doors/windows, hard chemical stains, post-renovation paint splatters, cement residue, and stubborn oil deposits that standard cleaning cannot remove.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Starting From ₹5,000 (Based on BHK / Property Size)",
      startingPrice: 5000,
      pricingType: "rateCard",
      rateCardType: "heavyStains",
      duration: "6 - 10 Hours",
      rating: "4.98",
      reviewsCount: "290+",
      included: [
        "Safe extraction of adhesive sticker marks from glass, wood, and tiles",
        "Heavy stain treatment on vitrified, marble, and ceramic floorings",
        "Post-painting paint splatter, adhesive tape, and cement haze removal",
        "Intense chemical descaling of severely stained bathroom tiles & fixtures",
        "Deep degreasing of carbonized oil & grease on kitchen surfaces",
        "Full mechanized heavy scrubbing with specialized non-abrasive solvents",
        "Comprehensive whole-house deep cleaning combined with stain treatment"
      ],
      notIncluded: [
        "Permanent chemical burn or acid-etched stone discoloration reversal",
        "Repainting damaged drywall"
      ],
      cleaningProcess: [
        "Surface assessment and solvent testing",
        "Adhesive softening & precision blade scraper treatment",
        "Rotary mechanized agitation with stain-lifting agents",
        "Full neutral rinse, buffing, and whole-house deep clean"
      ],
      equipmentUsed: ["Specialized Adhesive Solvents", "Industrial Floor Polishers", "Precision Non-Scratch Scrapers", "Heavy-Duty Extractors"],
      benefits: ["Restores ruined-looking tiles and glass without scratching", "Completely lifts stubborn tenant/builder stickers and tape", "Leaves property 100% pristine and spotless"]
    },
    {
      id: "commercial-property-cleaning",
      title: "COMMERCIAL PROPERTY CLEANING",
      category: "commercial",
      shortDescription: "Professional cleaning solutions for offices, commercial buildings, shops, and business spaces.",
      detailedDescription: "Keep your workspace hygienic, spotless, and impressive for clients and employees. We offer scheduled weekend deep cleans or recurring maintenance tailored to modern offices, tech parks, retail showrooms, and clinics.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Get a Customized Corporate Quote based on sq. ft. & shift requirements",
      startingPrice: 4999,
      duration: "Flexible Shift Hours / Overnight Options",
      rating: "4.92",
      reviewsCount: "190+",
      included: [
        "Office workstation, cubicle, and desk sanitization",
        "Conference room & reception area glass wiping and buffing",
        "Carpet vacuuming and spot stain shampooing",
        "Commercial washroom multi-point sanitization",
        "Pantry & cafeteria kitchen degreasing and fridge wipe",
        "Common-area corridors, lifts, staircases, and lobby cleaning",
        "Dust removal from HVAC vents, light diffusers & server room floors"
      ],
      notIncluded: [
        "Direct internal hardware maintenance of live servers",
        "Disposal of confidential documentation without authorization"
      ],
      cleaningProcess: [
        "Site assessment & traffic zoning",
        "HEPA filtration vacuuming of carpets and chairs",
        "Touchpoint microbial sanitization",
        "High-gloss hard floor machine maintenance"
      ],
      equipmentUsed: ["Commercial Backpack Vacuums", "Rotary Floor Polishers", "Glass Extension Telescopic Poles", "Hospital-Grade Disinfectants"],
      benefits: ["Reduces employee sick leaves", "Elevates brand reputation for client visits", "Custom SLA and GST invoices"]
    },
    {
      id: "college-campus-cleaning",
      title: "COLLEGE CAMPUS CLEANING",
      category: "commercial",
      shortDescription: "Large-scale cleaning solutions for educational institutions, schools, and university campuses.",
      detailedDescription: "Specialized high-capacity sanitization and deep maintenance for educational institutions. From high-footfall lecture halls and laboratory floors to athletic auditoriums and student hostels.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Institutional Quote on Request (10+ Campuses Cleaned)",
      startingPrice: 14999,
      duration: "Term Breaks / Weekend Intensive Drives",
      rating: "4.98",
      reviewsCount: "10+ Campuses",
      included: [
        "Classrooms, student benches, podiums & blackboard surrounds",
        "Vast corridors, multi-floor stairways & ramp scrub-downs",
        "Large-scale student washroom deep descaling and continuous sanitization",
        "Staff rooms, administrative blocks, and library reading tables",
        "Auditorium seating, stage clearing, and acoustics dusting",
        "Outdoor courtyards, sports complex seating & campus walkways",
        "Comprehensive campus pre-term and post-event turnaround"
      ],
      notIncluded: [
        "Chemical laboratory specialized hazardous waste handling",
        "Civil structural engineering repairs"
      ],
      cleaningProcess: [
        "Phased wing-by-wing mobilization",
        "Heavy-duty water-jet and mechanized floor scrubbing",
        "Odor-neutralizing washroom enzyme treatments",
        "Institutional health & safety sign-off"
      ],
      equipmentUsed: ["Heavy-Duty Ride-On/Walk-Behind Scrubbers", "High-Pressure Water Jets", "Industrial Dryers", "Non-Toxic Child-Safe Detergents"],
      benefits: ["Meets university accreditation cleanliness benchmarks", "Safe, chemical-residue-free environment for students", "Handled 10+ major campuses seamlessly"]
    },
    {
      id: "kitchen-deep-cleaning",
      title: "KITCHEN DEEP CLEANING",
      category: "residential",
      shortDescription: "Intensive degreasing and sanitization for modular and traditional kitchens.",
      detailedDescription: "Transform grease-laden kitchen tiles, sticky exhaust hoods, oil-splattered stove surrounds, and countertop grime into a hygienic culinary haven.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Starting From ₹1,299 (Based on kitchen configuration)",
      startingPrice: 1299,
      duration: "2 - 3.5 Hours",
      rating: "4.90",
      reviewsCount: "420+",
      included: [
        "Kitchen countertops, backsplash tiles and grout scrub",
        "Cabinets and drawers exterior degreasing and handles polish",
        "Appliances exterior (Chimney hood exterior, Microwave, Refrigerator, Stove)",
        "Heavy grease, oil burnt marks, and carbon deposit removal",
        "Stainless steel sink descaling, tap buffing & drain deodorizing",
        "Kitchen floor mechanized scrubbing to eliminate slippery oil film"
      ],
      notIncluded: [
        "Chimney motor dismantling (motor deep repair)",
        "Internal refrigerator defrosting unless cleared beforehand"
      ],
      cleaningProcess: [
        "Application of biodegradable grease softeners",
        "Steam extraction on hard-to-reach tile crevices",
        "Buffing of stainless steel fixtures to chrome shine",
        "Sanitization of food-prep countertops"
      ],
      equipmentUsed: ["High-Temperature Steam Vaporizer", "Industrial Degreasing Formulations", "Non-Scratch Abrasive Pads", "Microfiber Towels"],
      benefits: ["Removes persistent cooking odors", "Restores shine to chimney and gas hobs", "Ensures 100% food-grade hygiene"]
    },
    {
      id: "bathroom-deep-cleaning",
      title: "BATHROOM DEEP CLEANING",
      category: "residential",
      shortDescription: "Hard-water stain removal, deep descaling, tile scrubbing, and fixture sanitization.",
      detailedDescription: "Eliminate yellow hard-water calcium stains, soap scum on glass partitions, blackened tile grout, and commode scale with professional bathroom descaling.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Starting From ₹599 per bathroom",
      startingPrice: 599,
      duration: "1 - 2 Hours per bathroom",
      rating: "4.94",
      reviewsCount: "750+",
      included: [
        "Tile walls, corners, and floor rotary brushing",
        "Toilet bowl interior & exterior multi-point descaling",
        "Washbasin, vanity counter, and mirror gleaming wipe",
        "Chrome fittings (taps, shower heads, jet sprays) scale removal",
        "Glass shower partition limescale scrubbing and clarity restoration",
        "Exhaust fan and geyser exterior wiping",
        "Anti-bacterial floor sanitization and drainage freshening"
      ],
      notIncluded: [
        "Replacing broken grout cement or silicon sealing",
        "Plumbing pipe repairs"
      ],
      cleaningProcess: [
        "Hard-water acidic descaler application",
        "Hand & mechanized scrubbing of tile joints",
        "Pressure rinse & chrome metal polish",
        "Anti-fungal dry buff"
      ],
      equipmentUsed: ["Rotary Hand Scrubbers", "Acid-Free Eco Descalers", "Glass Restorers", "Sanitizing Germicide Sprays"],
      benefits: ["Crystal-clear shower cubicle glass", "Gleaming chrome fixtures without corrosion", "Foul odor elimination"]
    },
    {
      id: "sofa-upholstery-cleaning",
      title: "SOFA & UPHOLSTERY CLEANING",
      category: "residential",
      shortDescription: "Fabric shampooing, deep vacuum extraction, and stain treatment for sofas, chairs & mattresses.",
      detailedDescription: "Revitalize your living room furniture. Our injection-extraction shampoo process pulls out deep dirt, food stains, body oils, and pet hair without damaging sensitive fabric fibers.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Starting From ₹699 (Calculated per seat / size)",
      startingPrice: 699,
      duration: "1.5 - 2.5 Hours",
      rating: "4.91",
      reviewsCount: "310+",
      included: [
        "High-power dry vacuuming to remove loose debris, crumbs & dust mites",
        "Fabric pre-conditioning and specialized stain spot treatment",
        "Deep foam shampoo injection & gentle agitation",
        "Powerful moisture extraction with industrial vacuum (fast dry)",
        "Leather conditioning and protective buffing for leatherette couches",
        "Cushion and backrest 360-degree freshness treatment"
      ],
      notIncluded: [
        "Torn fabric stitching or re-upholstery",
        "Permanent chemical dye bleeding reversal"
      ],
      cleaningProcess: [
        "Fabric test for color fastness",
        "Dry debris extraction",
        "Foam shampoo application",
        "Vacuum moisture extraction (dries within 3-4 hours)"
      ],
      equipmentUsed: ["Injection-Extraction Carpet & Upholstery Machine", "Fabric Spotting Agents", "High-Velocity Air Movers"],
      benefits: ["Restores original fabric color and fluffiness", "Removes stubborn tea, coffee & ink spots", "Eliminates pet odors and microscopic allergens"]
    },
    {
      id: "move-in-move-out-cleaning",
      title: "MOVE-IN / MOVE-OUT DEEP CLEANING",
      category: "residential",
      shortDescription: "Turnkey deep cleaning for new homeowners, tenants, landlords, and renovated properties.",
      detailedDescription: "Move into an immaculate, germ-free home or secure your full rental security deposit. We deep-clean interior cabinets, scrub paint spatters, and disinfect every corner before your moving boxes arrive.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Starting From ₹4,000 (Based on Property Type & BHK)",
      startingPrice: 4000,
      duration: "5 - 8 Hours",
      rating: "4.96",
      reviewsCount: "280+",
      included: [
        "Inside-and-out cleaning of all wardrobes, drawers & kitchen cabinets",
        "Removal of renovation plaster dust, tape residues & paint flecks",
        "Exhaustive floor scrubbing, skirting board wipedown",
        "All bathrooms, kitchens, balconies & utility areas deep sanitization",
        "Door frames, ceiling fans, light switches & glass panels polish",
        "Ready-to-occupy inspection checklist certification"
      ],
      notIncluded: [
        "Debris hauling of heavy construction concrete rubbles",
        "Wall painting"
      ],
      cleaningProcess: [
        "Full interior cabinetry clearance & dust wipe",
        "Rotary floor machine scrubbing",
        "Complete bathroom & kitchen sterilization",
        "Final fragrance mist and signoff"
      ],
      equipmentUsed: ["Heavy Dust HEPA Vacuums", "Floor Polishing Buffers", "Scraper Blades & Adhesive Solvents"],
      benefits: ["100% peace of mind before unpacking personal belongings", "Zero post-renovation dust inhalation", "Guaranteed rental deposit clearance standards"]
    },
    {
      id: "custom-cleaning",
      title: "CUSTOM CLEANING",
      category: "commercial",
      shortDescription: "Tailored cleaning services for event venues, terrace spaces, warehouses, or specific rooms.",
      detailedDescription: "Need cleaning after a wedding, puja, birthday party, or have custom requests like terrace pressure washing, garage detailing, or showroom floors? We build a bespoke cleaning plan just for you.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80",
      pricingNote: "Custom Quote on Request based on scope of work",
      startingPrice: 1999,
      duration: "Tailored to scope",
      rating: "4.93",
      reviewsCount: "140+",
      included: [
        "Pre-event / Post-event rapid cleanup",
        "Terrace, patio & driveway high-pressure washing",
        "Basement, storage room & garage deep organization & scrub",
        "Single-room focus (e.g. Master Suite + Walk-in Closet)",
        "Custom equipment allocation based on your checklist"
      ],
      notIncluded: [
        "Unapproved hazardous materials handling"
      ],
      cleaningProcess: [
        "Phone/WhatsApp consultation of specific requirements",
        "Custom crew and machinery deployment",
        "Execution according to client priority list",
        "On-spot verification and signoff"
      ],
      equipmentUsed: ["Pressure Washers", "Scrubbing Machines", "Specialized Chemical Kits", "Wet Vacuums"],
      benefits: ["Pay only for what you need", "Maximum flexibility for unusual spaces", "Rapid turnaround times"]
    }
  ],

  // Interactive Before & After Data
  beforeAfterCases: [
    {
      id: "kitchen",
      category: "Kitchen Deep Cleaning",
      title: "Modular Kitchen Chimney & Backsplash Grease Removal",
      beforeLabel: "Heavy Oil & Carbon Stain Layer",
      afterLabel: "Sparkling Food-Safe Finish",
      beforeImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=60",
      afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
      description: "Tough 2-year old oil buildup around gas stove and chimney tiles dissolved using eco-degreasers without scratching the finish."
    },
    {
      id: "bathroom",
      category: "Bathroom Deep Cleaning",
      title: "Hard Water Limescale & Tile Grout Descaling",
      beforeLabel: "Severe Mineral & Soap Residue",
      afterLabel: "Crystal Clear Glass & Tiles",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=60",
      afterImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      description: "Challenging hard water stains removed from shower partition glass and floor tiles restored to original brightness."
    },
    {
      id: "living-home",
      category: "Home Cleaning",
      title: "Apartment Vitrified Floor Rotary Scrubbing",
      beforeLabel: "Dull Traffic Marks & Dust",
      afterLabel: "High Gloss Mirror Reflection",
      beforeImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=60",
      afterImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      description: "Deep machine scrubbing eliminated ingrained construction micro-dust and restored floor sheen."
    },
    {
      id: "commercial",
      category: "Commercial Cleaning",
      title: "Corporate Office Glass & Workstation Sanitization",
      beforeLabel: "Fingerprint Smudges & Dusty Desks",
      afterLabel: "Spotless Corporate Standard",
      beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=60",
      afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      description: "3,500 sq.ft office space thoroughly sanitized and made welcoming for Monday morning staff arrival."
    }
  ],

  // 4-Step How It Works
  howItWorks: [
    {
      step: "01",
      title: "CHOOSE YOUR SERVICE",
      description: "Select from full home deep cleaning, villa/plot cleaning, heavy stain removal, or commercial spaces.",
      icon: "ListChecks"
    },
    {
      step: "02",
      title: "TELL US YOUR REQUIREMENTS",
      description: "Specify your property type, BHK size or square feet, occupancy condition (Empty vs Occupied), and add-ons.",
      icon: "FileText"
    },
    {
      step: "03",
      title: "SCHEDULE YOUR SERVICE",
      description: "Pick your preferred date and time slot. Receive instant confirmation and your dedicated crew assignment.",
      icon: "Calendar"
    },
    {
      step: "04",
      title: "ENJOY A CLEANER SPACE",
      description: "Our verified, equipped crew arrives on time and transforms your space while you relax. Pay after satisfaction.",
      icon: "Sparkle"
    }
  ],

  // Why Choose Us Cards
  whyChooseUs: [
    {
      title: "Trained Professionals",
      description: "Staff trained to rigorous industry standards with multi-platform cleaning experience.",
      icon: "GraduationCap"
    },
    {
      title: "Professional Deep Cleaning Process",
      description: "Standardized 50+ checkpoint checklists to ensure not a single spot or corner is overlooked.",
      icon: "ClipboardCheck"
    },
    {
      title: "Quality Industrial Equipment",
      description: "Industrial wet/dry vacuum extractors, single-disc rotary scrubbers, and eco-safe formulations.",
      icon: "Wrench"
    },
    {
      title: "Reliable & Punctual Service",
      description: "On-time arrival guarantee with real-time updates and dedicated job supervisor on site.",
      icon: "Clock"
    },
    {
      title: "Residential & Commercial Expertise",
      description: "Proven track record handling 1000+ luxury homes, villas, plots, and 10+ major university campuses.",
      icon: "Building2"
    },
    {
      title: "Customized Cleaning Solutions",
      description: "Transparent rate cards for empty vs occupied homes, sq.ft tiers, and stubborn sticker/stain treatments.",
      icon: "Sliders"
    },
    {
      title: "Experienced Cleaning Team",
      description: "Over 5+ years of operational expertise delivering spotless, hygienic transformations.",
      icon: "Users"
    },
    {
      title: "Customer-Focused Service",
      description: "100% satisfaction commitment with re-touch guarantee if you spot any missed area.",
      icon: "HeartHandshake"
    }
  ],

  // Official Pricing Matrices from Rate Cards
  pricingMatrix: {
    // Property Categories
    propertyTypes: [
      { id: "apartment", name: "Apartment / Flat", icon: "Home", category: "apartment" },
      { id: "villa", name: "Individual Villa / Plot / Bungalow", icon: "Home", category: "villa" },
      { id: "heavy-stains-home", name: "Sticker Marks & Heavy Stains Treatment", icon: "Sparkles", category: "heavyStains" },
      { id: "office", name: "Office Workspace", icon: "Building2", category: "commercial" },
      { id: "shop", name: "Retail Shop / Showroom", icon: "Building2", category: "commercial" },
      { id: "commercial-building", name: "Commercial Building", icon: "Building2", category: "commercial" },
      { id: "college-institution", name: "College / Campus / Institution", icon: "GraduationCap", category: "commercial" },
      { id: "other", name: "Other / Custom Space", icon: "Layers", category: "custom" }
    ],

    // Occupancy Status
    occupancyTypes: [
      { id: "empty", name: "Empty / Vacant House (Unfurnished)", label: "Empty" },
      { id: "occupied", name: "Occupied / Furnished House (In-Use)", label: "Occupied" }
    ],

    // 1. Apartment Full Home Deep Cleaning Rates (Image 3)
    apartmentPricing: [
      { id: "1bhk", name: "1 BHK Apartment", bhk: "1 BHK", emptyPrice: 4000, occupiedPrice: 4500, sqftRange: "400 - 650 sq.ft" },
      { id: "2bhk", name: "2 BHK Apartment", bhk: "2 BHK", emptyPrice: 4800, occupiedPrice: 5800, sqftRange: "700 - 1100 sq.ft" },
      { id: "3bhk", name: "3 BHK Apartment", bhk: "3 BHK", emptyPrice: 5200, occupiedPrice: 6000, sqftRange: "1200 - 1800 sq.ft" },
      { id: "4bhk", name: "4 BHK Apartment", bhk: "4 BHK", emptyPrice: 7500, occupiedPrice: 8300, sqftRange: "1900 - 2600 sq.ft" },
      { id: "5plus-bhk", name: "5+ BHK / Luxury Penthouse", bhk: "5+ BHK", emptyPrice: 9500, occupiedPrice: 11000, sqftRange: "2700+ sq.ft" }
    ],

    // 2. Individual Villa / Plot / Independent House Deep Cleaning Rates (Image 1)
    villaPricing: [
      { id: "villa-1", tier: "Tier 1", name: "Up to 1,200 sq.ft (1-2 BHK Villa / Plot)", sqftRange: "Up to 1,200 sq.ft", emptyPrice: 4200, occupiedPrice: 4700 },
      { id: "villa-2", tier: "Tier 2", name: "1,200 - 1,800 sq.ft (2-3 BHK Villa / Plot)", sqftRange: "1,200 - 1,800 sq.ft", emptyPrice: 5000, occupiedPrice: 5800 },
      { id: "villa-3", tier: "Tier 3", name: "1,800 - 2,500 sq.ft (3-4 BHK Villa / Plot)", sqftRange: "1,800 - 2,500 sq.ft", emptyPrice: 6500, occupiedPrice: 7200 },
      { id: "villa-4", tier: "Tier 4", name: "2,500 - 3,500 sq.ft (4-5 BHK Villa / Plot)", sqftRange: "2,500 - 3,500 sq.ft", emptyPrice: 8500, occupiedPrice: 9700 },
      { id: "villa-5", tier: "Tier 5", name: "3,500+ sq.ft (5+ BHK / Large Villa / Estate)", sqftRange: "3,500+ sq.ft", emptyPrice: 13000, occupiedPrice: 15000 }
    ],

    // 3. Sticker Marks, Heavy Stains & Post-Construction Deep Cleaning Rates (Image 2)
    heavyStainsPricing: [
      { id: "stain-1", tier: "Tier 1", name: "1 BHK / Small Space", sqftRange: "Under 700 sq.ft", price: 5000 },
      { id: "stain-2", tier: "Tier 2", name: "2 BHK / Medium Space", sqftRange: "700 - 1,200 sq.ft", price: 6500 },
      { id: "stain-3", tier: "Tier 3", name: "3 BHK / Large Space", sqftRange: "1,200 - 1,800 sq.ft", price: 8500 },
      { id: "stain-4", tier: "Tier 4", name: "4 BHK / XL Space", sqftRange: "1,800 - 2,500 sq.ft", price: 12000 },
      { id: "stain-5", tier: "Tier 5", name: "5+ BHK / Villa / XXL Space", sqftRange: "2,500+ sq.ft", price: 15000 }
    ],

    // Commercial Property Sizing
    sizes: {
      commercial: [
        { id: "comm-small", name: "Small Office (< 1,000 sq.ft)", basePrice: 4999 },
        { id: "comm-med", name: "Medium Workspace (1,000 - 3,500 sq.ft)", basePrice: 8499 },
        { id: "comm-large", name: "Large Commercial Floor (3,500 - 10,000 sq.ft)", basePrice: 15999 },
        { id: "comm-custom", name: "Large Campus / Custom (10,000+ sq.ft)", basePrice: 24999 }
      ]
    },

    // Add-On Services
    addOns: [
      { id: "balcony", name: "Extra Balcony Machine Scrubbing", price: 350 },
      { id: "fridge", name: "Refrigerator Interior Detailing", price: 450 },
      { id: "chimney", name: "Kitchen Chimney & Filter Degreasing", price: 599 },
      { id: "sofa-2seat", name: "Sofa Shampooing (2-3 Seater)", price: 699 },
      { id: "sofa-5seat", name: "Sofa Shampooing (5+ Seater / L-Shape)", price: 1299 },
      { id: "mattress", name: "Mattress Sanitization", price: 650 },
      { id: "fan-lights", name: "Ceiling Fan & Chandelier Detailing", price: 400 },
      { id: "disinfection", name: "Hospital-Grade Antimicrobial Fogging", price: 799 }
    ],

    timeSlots: [
      "Morning Slot (08:00 AM – 11:00 AM)",
      "Midday Slot (11:30 AM – 02:30 PM)",
      "Afternoon Slot (03:00 PM – 06:00 PM)",
      "Evening Slot (06:00 PM – 08:30 PM)",
      "Custom / Shift Timings"
    ]
  },

  // Customer Reviews
  testimonials: [
    {
      id: "rev-1",
      customerName: "Siddharth R.",
      location: "Indiranagar, Bengaluru",
      service: "Full Home Deep Cleaning (3 BHK Occupied)",
      rating: 5,
      date: "Recent Customer",
      comment: "Outstanding attention to detail! The team cleaned every corner, tiles look brand new, and they were very polite and punctual. Clear and exact pricing as listed.",
      isPlaceholder: false
    },
    {
      id: "rev-2",
      customerName: "Dr. Ananya Sharma",
      location: "Anna Nagar, Chennai",
      service: "College Campus Deep Sanitization",
      rating: 5,
      date: "Campus Admin",
      comment: "V Cleaning Services handled our entire academic block before college reopening. Punctual, well-equipped with industrial scrubbers, and spotless results.",
      isPlaceholder: false
    },
    {
      id: "rev-3",
      customerName: "Karthik & Priya V.",
      location: "Gachibowli, Hyderabad",
      service: "Individual Villa Deep Cleaning (3,000 sq.ft)",
      rating: 5,
      date: "Villa Owner",
      comment: "Moved into our new villa with zero post-construction dust or sticker marks left behind. The bathrooms and modular kitchen were handed over in sparkling state.",
      isPlaceholder: false
    },
    {
      id: "rev-4",
      customerName: "Rajesh Menon",
      location: "Koramangala, Bengaluru",
      service: "Sticker Marks & Heavy Stains Deep Cleaning",
      rating: 5,
      date: "Verified Booking",
      comment: "Our previous tenants had left heavy tape and sticker glue all over the tiles and doors. V Cleaning erased every trace without scratching the surfaces!",
      isPlaceholder: false
    }
  ],

  // Gallery Works
  gallery: [
    {
      id: "gal-1",
      title: "Luxury Living Room Vitrified Floor Buffing",
      category: "Home Cleaning",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
      description: "Apartment deep vacuuming, wall dust removal, and floor shine restoration."
    },
    {
      id: "gal-2",
      title: "Commercial Office Glass & Desk Sanitization",
      category: "Commercial Cleaning",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      description: "Corporate workstations and glass conference partitions cleaned with streak-free solution."
    },
    {
      id: "gal-3",
      title: "University Corridor & Lecture Hall Maintenance",
      category: "College Cleaning",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
      description: "Large institutional hallway mechanized rotary scrubbing across 10+ college projects."
    },
    {
      id: "gal-4",
      title: "Modular Kitchen Chimney & Tile Degreasing",
      category: "Kitchen Cleaning",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
      description: "Eliminating tough grease stains from stainless steel chimney hoods and granite counters."
    },
    {
      id: "gal-5",
      title: "Bathroom Descaling & Chrome Fixture Polish",
      category: "Bathroom Cleaning",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      description: "Hard water scale removal from shower enclosures, commodes, and ceramic tiles."
    },
    {
      id: "gal-6",
      title: "Upholstery Injection Shampooing",
      category: "Home Cleaning",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
      description: "Deep fabric stain extraction and allergen removal from living room sofa sets."
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What cleaning services do you provide?",
      answer: "V Cleaning Services provides end-to-end residential, commercial, and institutional deep cleaning services. Our specialized offerings include Apartment Full Home Deep Cleaning, Individual Villa & Plot Deep Cleaning, Sticker Marks & Heavy Stains Deep Cleaning, Commercial Property & Office Cleaning, College & Campus Cleaning, Kitchen Deep Cleaning, Bathroom Descaling, Sofa & Upholstery Shampooing, Move-In / Move-Out Deep Cleaning, and Custom Event & Venue Cleaning."
    },
    {
      question: "Do you provide full home deep cleaning for villas and plots?",
      answer: "Yes! In Full Home Cleaning, we strictly perform deep cleaning for all types of houses including apartments, independent villas, plots, duplexes, and row houses. Our pricing is transparently structured according to BHK, square footage, and whether the property is Empty (Vacant) or Occupied (Furnished)."
    },
    {
      question: "How much does Full Home Deep Cleaning cost?",
      answer: "Apartment Deep Cleaning starts from ₹4,000 for Empty 1 BHK (₹4,500 Occupied), ₹4,800 for Empty 2 BHK (₹5,800 Occupied), ₹5,200 for Empty 3 BHK (₹6,000 Occupied), and ₹7,500 for Empty 4 BHK (₹8,300 Occupied). Individual Villas start from ₹4,200 (up to 1,200 sq.ft) up to ₹13,000–₹15,000 for 3,500+ sq.ft estates."
    },
    {
      question: "Do you remove tough sticker marks, paint splatters, and heavy stains?",
      answer: "Yes! We offer a dedicated 'Sticker Marks & Heavy Stains Deep Cleaning' service designed specifically to eliminate tough adhesive residues, tape glue, paint spatters, cement residues, and heavy floor discoloration starting from ₹5,000."
    },
    {
      question: "Do you clean commercial properties?",
      answer: "Yes. We clean corporate offices, retail stores, co-working spaces, clinics, and commercial complexes. We offer flexible scheduling including after-hours, overnight, and weekend deep cleaning to avoid interrupting your business operations."
    },
    {
      question: "Do you provide college/campus cleaning?",
      answer: "Yes! We have proudly cleaned 10+ college campuses and educational institutions. We deploy large teams with heavy-duty walk-behind floor scrubbers and pressure washers for lecture halls, corridors, staff rooms, restrooms, and outdoor campus grounds."
    },
    {
      question: "How long does a cleaning service take?",
      answer: "Service duration depends on the property type and size: A 2 BHK deep cleaning typically takes 4–5 hours, a 3–4 BHK takes 5–7 hours, an individual bathroom takes ~1.5 hours, while large villas and campus projects are scheduled per milestone or full-day drives."
    },
    {
      question: "Do I need to provide cleaning equipment?",
      answer: "No, you do not need to provide any equipment or chemicals. Our crew arrives fully equipped with single-disc rotary scrubbers, industrial wet & dry vacuums, microfiber wipes, ladders, squeegees, adhesive removers, and specialized eco-friendly chemicals. We only require access to electricity and water."
    },
    {
      question: "How can I book a service?",
      answer: "Booking is simple: Click the 'Book Now' button anywhere on our website, select your service, property type, preferred date, and time slot in our interactive booking system, and confirm. You can also reach us via email at vcleaningservices@gmail.com."
    },
    {
      question: "How is the price calculated?",
      answer: "Our pricing is 100% transparent and calculated based on your exact property category (Apartment, Villa/Plot, Heavy Stains, Commercial), size (BHK or sq.ft), occupancy status (Empty vs Occupied), and any custom add-ons you select. No hidden fees or surprise charges."
    },
    {
      question: "Can I request customized cleaning?",
      answer: "Absolutely! We offer 'Custom Cleaning' where you can select specific zones (e.g., only balconies, kitchen + 2 bathrooms, terrace pressure washing, or post-party cleanups). Simply specify your requirements during booking."
    },
    {
      question: "Do you provide cleaning before/after functions or special events?",
      answer: "Yes! We specialize in pre-event preparation and post-event cleanup for weddings, housewarmings, Aayudha Pooja & festive occasions, corporate conferences, and college fests."
    }
  ],

  // Backend Database Schemas
  databaseSchemaInfo: {
    engine: "PostgreSQL / Supabase / MongoDB",
    tables: [
      {
        name: "customers",
        fields: "id (UUID), full_name (VARCHAR), phone (VARCHAR), email (VARCHAR), address (TEXT), city (VARCHAR), created_at (TIMESTAMP)"
      },
      {
        name: "bookings",
        fields: "id (UUID), booking_reference (VARCHAR), customer_id (UUID), service_id (VARCHAR), property_type (VARCHAR), property_size (VARCHAR), occupancy_status (VARCHAR), add_ons (JSONB), preferred_date (DATE), preferred_time_slot (VARCHAR), estimated_price (NUMERIC), status (ENUM: pending, confirmed, in_progress, completed, cancelled), notes (TEXT), created_at (TIMESTAMP)"
      },
      {
        name: "services",
        fields: "id (VARCHAR PK), title (VARCHAR), category (VARCHAR), base_price (NUMERIC), description (TEXT), is_active (BOOLEAN)"
      },
      {
        name: "enquiries",
        fields: "id (UUID), name (VARCHAR), phone (VARCHAR), email (VARCHAR), service_required (VARCHAR), property_type (VARCHAR), message (TEXT), status (VARCHAR), created_at (TIMESTAMP)"
      },
      {
        name: "campaign_offers",
        fields: "id (VARCHAR PK), code (VARCHAR), campaign_title (VARCHAR), discount_type (VARCHAR), is_active (BOOLEAN), valid_until (DATE)"
      }
    ]
  }
};
