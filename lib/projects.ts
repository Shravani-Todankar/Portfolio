import {
  Briefcase,
  Building2,
  GraduationCap,
  Landmark,
  Leaf,
  Mouse,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";

export type StackByCategory = {
  platform?: string[];
  frontend?: string[];
  backend?: string[];
  infrastructure?: string[];
};

export type Project = {
  slug: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  tagline: string;
  year: string;
  client: string;
  role: string;
  status: string;
  team: string;
  timeline: string;
  tags: string[];
  liveUrl: string;
  overview: string;
  approach: string;
  features: string[];
  stack: StackByCategory;
  whyBuilt: string[];
  impact: string[];
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "indias-future-tycoon",
    icon: Sparkles,
    iconLabel: "India's Future Tycoon",
    title: "Brand landing experience for India's Future Tycoon.",
    description:
      "Hard-coded marketing site built with HTML, CSS and JavaScript, designed to capture leads and present the program with cinematic polish.",
    meta: "Web Developer, 2026",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1024&q=80",
    imageAlt: "India's Future Tycoon landing page mockup",
    tagline: "National-level entrepreneurship search and mentorship platform.",
    year: "2026",
    client: "ENpower",
    role: "Front-end Developer",
    status: "Live",
    team: "Solo",
    timeline: "Jan – Mar 2026",
    tags: ["Landing Page", "HTML/CSS/JS", "GSAP", "Completed"],
    liveUrl: "#",
    overview:
      "A national program for young innovators aged 13–18 needed a landing experience that could simplify complex storytelling, hold attention, and convert visits into registrations — all from a single page.",
    approach:
      "A single-page responsive landing built around scroll-driven storytelling. Sections unfold as the visitor scrolls, with structured content flow guiding them toward a clear participation CTA.",
    features: [
      "Scroll-triggered animations using GSAP & ScrollTrigger",
      "Typing effects and section transitions",
      "Responsive single-page architecture",
      "Clear, repeated registration CTAs",
    ],
    stack: {
      frontend: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "ScrollTrigger"],
      infrastructure: ["Google Fonts", "Static Hosting"],
    },
    whyBuilt: [
      "Reach 13–18 year olds with simple, action-driven storytelling",
      "Drive registrations without depending on a separate marketing site",
      "Keep the campaign lightweight and easy to update",
      "Stand out visually from the typical EdTech landing template",
    ],
    impact: [
      "Stronger program visibility and brand appeal",
      "Higher engagement through interactive design",
      "Increased likelihood of participant registration",
      "Lightweight, scalable campaign foundation",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
    ],
  },
  {
    slug: "spenta-enquiry-crm",
    icon: Building2,
    iconLabel: "Spenta",
    title: "Real Estate CRM front-end for Spenta.",
    description:
      "Built the CRM front-end for one of Mumbai's premier real estate developers, focused on clean data presentation and an effortless agent workflow.",
    meta: "Front-end Developer, 2026",
    imageRatio: 752 / 497,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&q=80",
    imageAlt: "Spenta real estate CRM mockup",
    tagline:
      "A custom CRM that centralises customer enquiry and lead management.",
    year: "2026",
    client: "Spenta Corporation",
    role: "Front-end Developer",
    status: "In Production",
    team: "Team of 3",
    timeline: "Feb 2026 – Present",
    tags: ["CRM", "Django", "Bootstrap", "In Production"],
    liveUrl: "#",
    overview:
      "Sales teams were juggling scattered customer data across multiple properties and managing leads through spreadsheets. There was no central tracking, no standard workflow, and no real-time visibility into the sales funnel.",
    approach:
      "A custom platform that centralises enquiries, streamlines the sales workflow, and surfaces real-time insights across five premium properties — with role-based access for managers, agents, and admins.",
    features: [
      "Centralised enquiry and customer data",
      "Multi-property management across 5 sites",
      "Structured sales pipeline with lead qualification",
      "Referral tracking and performance dashboards",
      "Role-based authentication",
      "Email integration",
    ],
    stack: {
      platform: ["Django 5.2", "Python"],
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      backend: ["Django REST Framework", "SQLite"],
      infrastructure: ["PythonAnywhere", "VPS Deployment"],
    },
    whyBuilt: [
      "Replace spreadsheet-based lead tracking with a single source of truth",
      "Give managers real-time visibility into the sales funnel",
      "Enforce a standard qualification workflow across teams",
      "Cut time-to-response on incoming enquiries",
    ],
    impact: [
      "Operational efficiency up across sales teams",
      "Reduced manual effort with centralised data",
      "Faster customer response times",
      "Improved compliance and audit tracking",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1600&q=80",
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1600&q=80",
    ],
  },
  {
    slug: "enpower-school-revamp",
    icon: GraduationCap,
    iconLabel: "ENpower",
    title: "School learning platform revamp for ENpower.",
    description:
      "Redesigned and re-engineered the dashboards, report cards and admin tools for the neoRiSE Skill Passport program used across partner schools.",
    meta: "Full-stack Developer, 2026",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1024&q=80",
    imageAlt: "ENpower school learning platform mockup",
    tagline:
      "India's first comprehensive entrepreneurship learning ecosystem for schools.",
    year: "2026",
    client: "ENpower",
    role: "Web Developer",
    status: "Live",
    team: "Solo",
    timeline: "2026",
    tags: ["EdTech", "HTML/CSS/JS", "GSAP", "Completed"],
    liveUrl: "#",
    overview:
      "The existing site suffered from poor structure and an outdated visual language. Content was unorganised, programs blurred together, navigation was weak, and engagement was low — failing to communicate ENpower's innovation-led approach.",
    approach:
      "A full overhaul focused on information architecture, visual clarity, and interactive moments — modern typography, grid-based layouts, and scroll-based animations that bring the curriculum to life.",
    features: [
      "Reorganised offerings: FSL, CSL, TIL, Impact Programs, Training Academy",
      "Modern UI with refined typography and grids",
      "GSAP scroll-based animations",
      "Responsive across devices",
      "Improved navigation hierarchy",
      "EmailJS-powered enquiry forms",
    ],
    stack: {
      frontend: ["HTML5", "CSS3", "Vanilla JavaScript", "Bootstrap 5.3"],
      platform: ["GSAP", "EmailJS"],
      infrastructure: ["Static Hosting"],
    },
    whyBuilt: [
      "Differentiate ENpower from generic school program sites",
      "Clarify five distinct programs without overwhelming visitors",
      "Position the brand as modern, innovation-led EdTech",
      "Enable schools and parents to enquire directly from the site",
    ],
    impact: [
      "Clearer presentation of program offerings",
      "Improved user experience and time on page",
      "Stronger brand positioning as modern EdTech",
      "Scalable foundation for future expansion",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80",
    ],
  },
  {
    slug: "partagalimath-landing",
    icon: Landmark,
    iconLabel: "Partagalimath",
    title: "Hard-coded landing page for Partagalimath.",
    description:
      "A static, performance-first landing page hand-coded in HTML/CSS/JS, designed to honour the institution's heritage while staying fast on any device.",
    meta: "Front-end Developer, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1024&q=80",
    imageAlt: "Partagalimath heritage landing page mockup",
    tagline:
      "A custom hand-coded landing page with responsive design and interactive elements.",
    year: "2025",
    client: "Partagalimath",
    role: "Developer & Designer",
    status: "Completed",
    team: "Solo",
    timeline: "2025",
    tags: ["Landing Page", "HTML/CSS/JS", "Completed"],
    liveUrl: "#",
    overview:
      "The previous CMS-based solution suffered from slow load times, poor mobile responsiveness, and inconsistent cross-device styling. Asset bloat was hurting both SEO and overall UX.",
    approach:
      "A mobile-first custom landing page with no CMS dependency. Clean HTML structure, minimal CSS aligned to the brand, and JavaScript that handles interactivity, form validation, and smooth scrolling.",
    features: [
      "Fully responsive across desktop, tablet, mobile",
      "Scroll-based animations",
      "Dynamic form validation",
      "Minified CSS/JS and lazy-loaded images",
      "Cross-browser tested",
    ],
    stack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      infrastructure: ["Static Hosting", "CDN"],
    },
    whyBuilt: [
      "Cut load times that the old CMS could not improve",
      "Honour the institution's heritage with a refined visual feel",
      "Remove CMS bloat to lift SEO and Core Web Vitals",
      "Deliver a campaign-ready page that works on low-end devices",
    ],
    impact: [
      "Significantly faster page load times",
      "Lower bounce rate, higher time-on-page",
      "Better SEO performance",
      "Stronger lead generation",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1600&q=80",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=1600&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&q=80",
    ],
  },
  {
    slug: "mosaic-minds-lms",
    icon: Leaf,
    iconLabel: "Mosaic Minds",
    title: "WordPress + LMS education website for Mosaic Minds.",
    description:
      "Built a WordPress site with an integrated LMS, custom course flows and a streamlined enrolment journey for learners and parents.",
    meta: "WordPress Developer, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1024&q=80",
    imageAlt: "Mosaic Minds LMS website mockup",
    tagline:
      "A modern learning platform built to inspire high-school students through live, project-based online courses.",
    year: "2025",
    client: "Mosaic Minds",
    role: "WordPress & LMS Developer",
    status: "Live",
    team: "Solo",
    timeline: "2025",
    tags: ["WordPress", "LMS", "EdTech", "Live"],
    liveUrl: "#",
    overview:
      "A new startup with no digital presence and no infrastructure to deliver courses. They needed a website, course management, an LMS for live classes and progress tracking, and a way to build brand credibility — all at once.",
    approach:
      "A student-centric platform with engaging UI/UX, structured course pages, an integrated LMS for live classes and dashboards, and a scalable WordPress backbone that lets the team launch new courses without engineering help.",
    features: [
      "Live class support with student dashboards",
      "Assignment management and progress tracking",
      "Automated enrolment flow",
      "Course detail pages with outcomes and mentor info",
      "Contact and enquiry forms",
      "Mobile-responsive design",
    ],
    stack: {
      platform: ["WordPress", "LMS Plugin"],
      frontend: ["Custom CSS", "JavaScript"],
      infrastructure: ["Managed Hosting", "Framer (landing)"],
    },
    whyBuilt: [
      "Launch a fully online, project-based school from scratch",
      "Give the team a self-serve way to add new courses",
      "Support live classes without juggling 3 different tools",
      "Build parent trust through a polished, credible web presence",
    ],
    impact: [
      "Launched the brand's digital presence end-to-end",
      "Enabled scalable online course delivery",
      "Improved enrolment conversion",
      "Built credibility with students and parents",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&q=80",
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=1600&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
    ],
  },
  {
    slug: "sarvatra-technologies-revamp",
    icon: Briefcase,
    iconLabel: "Sarvatra Technologies",
    title: "Corporate website revamp for Sarvatra Technologies.",
    description:
      "Reimagined the marketing site for a fintech infrastructure company — clearer storytelling, modern UI patterns and a tighter content system.",
    meta: "Web Developer, 2024",
    imageRatio: 752 / 497,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1024&q=80",
    imageAlt: "Sarvatra Technologies website revamp mockup",
    tagline: "A modern fintech website redesign with content-managed flexibility.",
    year: "2024",
    client: "Sarvatra Technologies",
    role: "Webflow Developer",
    status: "Completed",
    team: "Solo",
    timeline: "Sep 2024 – Jan 2025",
    tags: ["Webflow", "CMS", "Fintech", "Completed"],
    liveUrl: "#",
    overview:
      "The earlier site had an outdated design and a static layout with limited mobile responsiveness. It lacked modern visuals and the interactive elements expected of a fintech infrastructure brand.",
    approach:
      "Mobile-first responsive design, simplified navigation, a consistent visual hierarchy, and tasteful interactive animations — all powered by Webflow CMS so the team can update content without code.",
    features: [
      "Mobile-responsive design",
      "Webflow CMS for dynamic content",
      "Interactive animations and hover states",
      "Optimised load times",
      "Professional fintech visual identity",
    ],
    stack: {
      platform: ["Webflow", "Webflow CMS"],
      frontend: ["Custom CSS", "JavaScript"],
      infrastructure: ["Webflow Hosting"],
    },
    whyBuilt: [
      "Modernise a brand that had outgrown its old website",
      "Give marketing the ability to update content without code",
      "Communicate technical depth without overwhelming visitors",
      "Improve mobile experience for an enterprise audience",
    ],
    impact: [
      "Refreshed, modern brand image",
      "Improved engagement and mobile reach",
      "Streamlined content management for the team",
      "Increased lead generation through clearer CTAs",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
    ],
  },
  {
    slug: "eatprot-ecommerce-revamp",
    icon: ShoppingBag,
    iconLabel: "EatProt",
    title: "E-commerce revamp for EatProt.",
    description:
      "Reworked the Shopify storefront and product flows for a high-protein food brand — faster pages, sharper PDPs, smoother checkout.",
    meta: "Shopify Developer, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1024&q=80",
    imageAlt: "EatProt e-commerce storefront mockup",
    tagline: "A plant-based food brand redesigned on Shopify.",
    year: "2025",
    client: "EatProt",
    role: "Shopify Developer",
    status: "Live",
    team: "Solo",
    timeline: "Oct 2024 – Feb 2025",
    tags: ["Shopify", "E-commerce", "Live"],
    liveUrl: "#",
    overview:
      "The original storefront lacked a modern look and didn't make the most of Shopify's commerce features. Product presentation was flat and conversion was suffering as a result.",
    approach:
      "A customer-focused redesign emphasising mobile responsiveness, brand storytelling, and an optimised checkout — leaning into Shopify's strengths for scale, speed, and reliability.",
    features: [
      "Shopify migration for scalability",
      "Responsive, clean storefront",
      "Enhanced product pages with nutritional info",
      "Integrated reviews and brand narrative",
      "Optimised checkout and page speed",
    ],
    stack: {
      platform: ["Shopify"],
      frontend: ["Liquid", "HTML5", "CSS3", "JavaScript"],
      infrastructure: ["Shopify CDN"],
    },
    whyBuilt: [
      "Lift conversion on a brand with strong product, weak storefront",
      "Move from a fragile setup onto Shopify for reliability and scale",
      "Bring nutritional storytelling into the product page itself",
      "Tighten the path from product discovery to checkout",
    ],
    impact: [
      "Increased engagement and conversions",
      "Reduced bounce rate on mobile",
      "Improved mobile shopping experience",
      "Strengthened brand position in a competitive category",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80",
    ],
  },
  {
    slug: "rapoo-india-ecommerce-revamp",
    icon: Mouse,
    iconLabel: "Rapoo India",
    title: "E-commerce website revamp for Rapoo India.",
    description:
      "Rebuilt the Rapoo India storefront with a richer product catalogue, cleaner navigation and a more confident brand presence.",
    meta: "E-commerce Developer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=1024&q=80",
    imageAlt: "Rapoo India e-commerce website mockup",
    tagline:
      "A modern e-commerce transformation for a global tech brand's Indian division.",
    year: "2024",
    client: "Rapoo India",
    role: "UI/UX, Development, SEO Setup",
    status: "Live",
    team: "Solo",
    timeline: "2024",
    tags: ["WordPress", "WooCommerce", "E-commerce", "Live"],
    liveUrl: "#",
    overview:
      "The legacy site lacked interactivity and proper e-commerce functionality. It needed modern storefront capabilities, a sharper brand presence, and a proper online shopping experience.",
    approach:
      "User-centred design driven by pain-point analysis, restructured information architecture, and a refined visual hierarchy using minimalist design, considered colour, and clear typography.",
    features: [
      "Responsive across devices",
      "Full WooCommerce integration",
      "Speed and performance optimisation",
      "Improved SEO setup",
      "Strengthened security measures",
      "Subtle animations for transitions",
    ],
    stack: {
      platform: ["WordPress", "WooCommerce"],
      frontend: ["Custom CSS", "JavaScript"],
      backend: ["PHP", "MySQL"],
      infrastructure: ["Managed Hosting", "SSL"],
    },
    whyBuilt: [
      "Bring a global hardware brand's storefront in line with its product quality",
      "Replace a legacy stack with a maintainable WooCommerce setup",
      "Improve discoverability through better SEO architecture",
      "Earn customer trust through visible security and faster pages",
    ],
    impact: [
      "Increased online sales",
      "Higher user engagement and session length",
      "Improved organic traffic via better SEO",
      "Stronger customer trust through security upgrades",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=1600&q=80",
      "https://images.unsplash.com/photo-1593344484962-796055d4a3a4?w=1600&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1600&q=80",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
