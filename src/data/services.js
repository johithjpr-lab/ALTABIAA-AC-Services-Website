import { IMAGES } from "./images";

export const SERVICE_PAGES = {
  ac: {
    slug: "ac-services",
    title: "AC Services",
    metaDescription:
      "Professional AC installation, repair, cleaning, and maintenance in Doha, Qatar. Al Tabiaa Cooling Service — trusted local experts.",
    heroSubtitle: "Split, Window & Central AC Solutions",
    intro:
      "Keep your space perfectly cool with our comprehensive air conditioning services. From new installations to emergency repairs, we handle all AC brands and types across Qatar.",
    features: [
      "AC installation & commissioning",
      "Repair & troubleshooting",
      "Deep cleaning & sanitization",
      "Gas refill & leak detection",
      "Compressor & PCB replacement",
      "Preventive maintenance plans",
    ],
    gallery: [
      IMAGES.acCleaningBanner,
      IMAGES.acTechnicianService,
      IMAGES.acTechnicianCustomer,
      IMAGES.acInstallationCollage,
    ],
    faqs: [
      {
        q: "How often should I service my AC in Qatar?",
        a: "We recommend professional AC cleaning every 3–4 months due to dust and high usage during summer months.",
      },
      {
        q: "Do you service all AC brands?",
        a: "Yes — we work with Samsung, LG, GREE, O-General, Hisense, and all major brands available in Qatar.",
      },
      {
        q: "Do you offer same-day AC repair?",
        a: "Yes, same-day service is available across Doha, Qatar and surrounding areas subject to scheduling.",
      },
    ],
  },
  hvac: {
    slug: "hvac-services",
    title: "HVAC Services",
    metaDescription:
      "Complete HVAC design, installation, and maintenance for residential and commercial properties in Qatar. Al Tabiaa Cooling Service.",
    heroSubtitle: "Complete Climate Control Systems",
    intro:
      "Our HVAC specialists deliver end-to-end heating, ventilation, and air conditioning solutions engineered for Qatar's demanding climate and your comfort requirements.",
    features: [
      "HVAC system design & planning",
      "Ductwork installation & sealing",
      "Chiller & AHU servicing",
      "Ventilation & air quality",
      "Energy efficiency audits",
      "Commercial HVAC contracts",
    ],
    gallery: [
      IMAGES.hvacCollage,
      IMAGES.acInstallationCollage,
      IMAGES.fleetVan,
      IMAGES.acTechnicianService,
    ],
    faqs: [
      {
        q: "What is the difference between AC and HVAC?",
        a: "AC focuses on cooling units; HVAC encompasses heating, ventilation, and full building climate systems including ducts and air handlers.",
      },
      {
        q: "Do you handle commercial HVAC projects?",
        a: "Yes, we provide commercial HVAC installation, maintenance contracts, and 24/7 support for businesses across Qatar.",
      },
      {
        q: "Can you improve indoor air quality?",
        a: "Absolutely — we offer filtration upgrades, duct cleaning, and ventilation solutions for healthier indoor environments.",
      },
    ],
  },
  vrf: {
    slug: "vrf-vrv-systems",
    title: "VRF / VRV Systems",
    metaDescription:
      "VRF and VRV system installation, maintenance, and repair in Qatar. Energy-efficient multi-zone cooling by Al Tabiaa Cooling Service.",
    heroSubtitle: "Multi-Zone Commercial Cooling",
    intro:
      "Variable Refrigerant Flow (VRF/VRV) systems offer superior energy efficiency and independent zone control — ideal for offices, retail spaces, and large villas in Qatar.",
    features: [
      "VRF/VRV system design",
      "Multi-zone installation",
      "Indoor & outdoor unit service",
      "Refrigerant line diagnostics",
      "BMS integration support",
      "Annual maintenance contracts",
    ],
    gallery: [
      IMAGES.vrfCompressor,
      IMAGES.hvacCollage,
      IMAGES.fleetPickup,
      IMAGES.acCleaningPromo,
    ],
    faqs: [
      {
        q: "What brands of VRF systems do you install?",
        a: "We work with leading VRF brands including Daikin, Mitsubishi, LG Multi V, and Samsung DVM systems.",
      },
      {
        q: "Is VRF more efficient than traditional AC?",
        a: "Yes — VRF systems typically offer 20–30% better energy efficiency with precise zone control.",
      },
      {
        q: "Do you provide VRF maintenance contracts?",
        a: "Yes, we offer tailored annual maintenance plans for commercial VRF installations.",
      },
    ],
  },
  appliance: {
    slug: "appliance-services",
    title: "Appliance Services",
    metaDescription:
      "Home appliance repair in Qatar — refrigerators, washers, ovens, and more. Al Tabiaa Cooling Service, Doha, Qatar.",
    heroSubtitle: "Home & Kitchen Appliance Repair",
    intro:
      "Beyond cooling, our certified technicians repair and maintain all major home appliances — keeping your household running smoothly with minimal downtime.",
    features: [
      "Refrigerator & freezer repair",
      "Washing machine service",
      "Dryer & dishwasher repair",
      "Oven & microwave servicing",
      "Water heater maintenance",
      "Genuine spare parts supply",
    ],
    gallery: [
      IMAGES.refrigeratorBanner,
      IMAGES.washingMachineBanner,
      IMAGES.refrigeratorCollage,
      IMAGES.refrigeratorGauges,
    ],
    faqs: [
      {
        q: "Which appliance brands do you repair?",
        a: "We service Samsung, LG, Whirlpool, Bosch, Panasonic, and most major brands sold in Qatar.",
      },
      {
        q: "Do you offer home visit appliance repair?",
        a: "Yes, our technicians come to your location in Doha, Qatar and across Qatar.",
      },
      {
        q: "Is there a warranty on appliance repairs?",
        a: "Yes, all repairs include a service warranty on parts and labor as specified in your quote.",
      },
    ],
  },
};
