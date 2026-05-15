import { IMAGES } from "./images";

export const COMPANY = {
  name: "Al Tabiaa Cooling Service",
  nameAr: "الطبيعة لخدمات التكييف",
  tagline: "Advanced Cooling & HVAC Solutions",
  subtitle: "Comfort | Efficiency | Reliability",
  phone: "+974 30612147",
  phoneTel: "+97430612147",
  email: "altabiaacoolingservice@gmail.com",
  location: "Doha, Qatar",
  whatsapp: "https://wa.me/97430612147",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.0!2d51.4!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzAwLjAiTiA1McKwMjQnMDAuMCJF!5e0!3m2!1sen!2sqa!4v1",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "AC Services", path: "/ac-services" },
  { label: "HVAC Services", path: "/hvac-services" },
  { label: "VRF / VRV", path: "/vrf-vrv-systems" },
  { label: "Appliance Services", path: "/appliance-services" },
  { label: "Brands", path: "/brands" },
  { label: "Contact", path: "/contact" },
];

export const HOME_SERVICES = [
  {
    icon: "Snowflake",
    title: "AC Services",
    description: "Installation, repair, and maintenance for all split and window AC units across Qatar.",
    path: "/ac-services",
    image: IMAGES.acCleaningBanner,
    imageVariant: "square",
  },
  {
    icon: "Wind",
    title: "HVAC Services",
    description: "Complete heating, ventilation, and air conditioning solutions for homes and businesses.",
    path: "/hvac-services",
    image: IMAGES.hvacCollage,
    imageVariant: "wide",
  },
  {
    icon: "Building2",
    title: "VRF / VRV Systems",
    description: "Energy-efficient variable refrigerant flow systems for commercial and large-scale projects.",
    path: "/vrf-vrv-systems",
    image: IMAGES.vrfCompressor,
    imageVariant: "wide",
  },
  {
    icon: "WashingMachine",
    title: "Appliance Services",
    description: "Expert repair for refrigerators, washers, dryers, and all major home appliances.",
    path: "/appliance-services",
    image: IMAGES.refrigeratorBanner,
    imageVariant: "square",
  },
  {
    icon: "Sparkles",
    title: "AC Cleaning & Repair",
    description: "Deep cleaning, coil servicing, gas refill, and preventive maintenance packages.",
    path: "/ac-services",
    image: IMAGES.acCleaningPromo,
    imageVariant: "square",
  },
  {
    icon: "Home",
    title: "Home Appliances",
    description: "Reliable servicing for refrigerators, washing machines, and kitchen appliances.",
    path: "/appliance-services",
    image: IMAGES.washingMachineBanner,
    imageVariant: "square",
  },
];

export const USP_ITEMS = [
  {
    icon: "Users",
    title: "Expert Technicians",
    description: "Certified HVAC professionals with years of hands-on experience in Qatar's climate.",
    stat: 15,
    suffix: "+",
    statLabel: "Years Experience",
  },
  {
    icon: "Zap",
    title: "Fast & Reliable",
    description: "Same-day service available with rapid response across Doha, Qatar and nearby areas.",
    stat: 24,
    suffix: "/7",
    statLabel: "Support",
  },
  {
    icon: "BadgeDollarSign",
    title: "Affordable Pricing",
    description: "Transparent quotes with no hidden fees — premium service at competitive Qatar rates.",
    stat: 500,
    suffix: "+",
    statLabel: "Happy Clients",
  },
  {
    icon: "ShieldCheck",
    title: "Quality Assurance",
    description: "Genuine parts, warranty-backed work, and thorough quality checks on every job.",
    stat: 100,
    suffix: "%",
    statLabel: "Satisfaction",
  },
];

export const BRANDS = [
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/320px-Samsung_Logo.svg.png",
  },
  {
    name: "LG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/LG_logo_%282015%29.svg/320px-LG_logo_%282015%29.svg.png",
  },
  {
    name: "GREE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gree_Electric_Appliances_logo.png/320px-Gree_Electric_Appliances_logo.png",
  },
  {
    name: "O-General",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Daikin_logo.svg/320px-Daikin_logo.svg.png",
  },
  {
    name: "Hisense",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Hisense_logo.svg/320px-Hisense_logo.svg.png",
  },
  {
    name: "Whirlpool",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Whirlpool_Corporation_Logo.svg/320px-Whirlpool_Corporation_Logo.svg.png",
  },
  {
    name: "Bosch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/320px-Bosch-logo.svg.png",
  },
  {
    name: "Panasonic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Panasonic_logo_%28Blue%29.svg/320px-Panasonic_logo_%28Blue%29.svg.png",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ahmed Al-Mansouri",
    role: "Homeowner, Doha",
    rating: 5,
    quote:
      "Al Tabiaa fixed our AC within hours during peak summer. Professional team, fair pricing, and excellent follow-up.",
    initials: "AM",
  },
  {
    name: "Sarah Khan",
    role: "Villa Owner, Doha, Qatar",
    rating: 5,
    quote:
      "Their maintenance package saved us from costly breakdowns. Highly recommend for anyone in Qatar needing reliable HVAC.",
    initials: "SK",
  },
  {
    name: "Khalid Hassan",
    role: "Business Owner",
    rating: 5,
    quote:
      "Installed VRF system for our office — flawless execution. True professionals who understand commercial cooling needs.",
    initials: "KH",
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Major Brands" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: "Share2" },
  { label: "Instagram", href: "#", icon: "Camera" },
  { label: "X", href: "#", icon: "X" },
];
