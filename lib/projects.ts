import {
  Building2,
  Gem,
  GraduationCap,
  Landmark,
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
  mockup?: string;
  mockupRatio?: number;
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
    imageRatio: 4 / 3,
    image: "/projects/indias-future-tycoon/cover.png",
    imageAlt: "India's Future Tycoon landing page cover",
    mockup: "/projects/indias-future-tycoon/mockup.png",
    mockupRatio: 16 / 9,
    tagline:
      "A national-level entrepreneurship search and mentorship platform for young innovators aged 13–18.",
    year: "2026",
    client: "ENpower / India's Future Tycoons",
    role: "Front-end Developer",
    status: "Live",
    team: "Solo",
    timeline: "Apr 2026",
    tags: ["Landing Page", "HTML/CSS/JS", "GSAP", "Completed"],
    liveUrl: "#",
    overview:
      "India's Future Tycoons (IFT) is a national-level entrepreneurship search and mentorship platform designed for young innovators aged 13–18. The challenge was to present a large-scale program engagingly to a youth audience, while keeping program value clear, holding attention through interactivity, and ultimately driving registrations.",
    approach:
      "A visually dynamic, single-page experience focused on storytelling and engagement. Smooth animations, a structured content flow, and interactive elements guide users through the program journey — balancing informative content with strong visual appeal.",
    features: [
      "Single-page responsive landing experience",
      "Structured storytelling flow from introduction to participation",
      "Scroll-based animations using GSAP and ScrollTrigger",
      "Interactive UI elements (typing effects, transitions)",
      "Clean, modern layout via Tailwind CSS",
      "Optimised for fast loading and performance",
      "Clear, repeated call-to-action sections",
    ],
    stack: {
      frontend: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "ScrollTrigger"],
      infrastructure: ["Google Fonts (Inter)", "Material Icons", "Static Hosting"],
    },
    whyBuilt: [
      "Simplify a complex national program for a student audience",
      "Retain young users through highly engaging, interactive UI",
      "Replace traditional static education pages with dynamic storytelling",
      "Drive registrations via compelling CTAs and seamless navigation",
    ],
    impact: [
      "Enhanced visibility and appeal of the IFT program",
      "Improved user engagement through interactive design",
      "Clear communication of program value and structure",
      "Increased likelihood of participation and conversions",
      "Strong visual identity for a youth-focused initiative",
      "Lightweight, scalable campaign solution",
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
    imageRatio: 4 / 3,
    image: "/projects/spenta-enquiry-crm/cover.png",
    imageAlt: "Spenta real estate CRM cover",
    mockup: "/projects/spenta-enquiry-crm/mockup.png",
    mockupRatio: 16 / 9,
    tagline:
      "A custom CRM that centralises customer enquiry and lead management across multiple premium properties.",
    year: "2026",
    client: "Spenta Corporation",
    role: "Front-end Developer",
    status: "In Production",
    team: "Team of 3",
    timeline: "Feb 2026 – Present",
    tags: ["CRM", "Django", "Bootstrap", "In Production"],
    liveUrl: "#",
    overview:
      "The existing enquiry and lead management process at Spenta was highly fragmented, with customer data scattered across multiple platforms and manual systems. Sales teams depended on spreadsheets rather than integrated tools, which hindered lead tracking across properties and made RERA compliance harder than it needed to be.",
    approach:
      "A custom CRM platform engineered to consolidate enquiry management, standardise sales workflows, and deliver real-time operational visibility. The system unifies customer data while supporting multiple premium properties through role-based access and structured tracking mechanisms.",
    features: [
      "Centralised enquiry and customer data repository",
      "Multi-property management — Altavista, Ornata, Medius, Spenta Stardeous, Spenta Anthea",
      "Detailed enquiry forms capturing preferences, budgets and requirements",
      "Structured sales pipeline with lead qualification and booking workflows",
      "Referral tracking and sales performance monitoring",
      "Real-time dashboard for team and lead status management",
      "Role-based authentication with secure admin access",
      "Email integration for streamlined communication",
    ],
    stack: {
      platform: ["Django 5.2", "Python"],
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      backend: ["Django REST Framework", "SQLite"],
      infrastructure: ["PythonAnywhere", "VPS Deployment"],
    },
    whyBuilt: [
      "Eliminate fragmented data across disconnected platforms",
      "Replace manual spreadsheet workflows with structured automation",
      "Enable real-time sales visibility and performance monitoring",
      "Support RERA compliance requirements and multi-property operations",
    ],
    impact: [
      "Consolidated customer and sales data management",
      "Reduced manual effort and enhanced team productivity",
      "Improved sales pipeline visibility and conversion tracking",
      "Faster response times and better customer handling",
      "Scalable infrastructure supporting multiple properties",
      "Enhanced compliance documentation and tracking",
      "Improved customer experience end-to-end",
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
    imageRatio: 4 / 3,
    image: "/projects/enpower-school-revamp/cover.png",
    imageAlt: "ENpower school learning platform cover",
    mockup: "/projects/enpower-school-revamp/mockup.png",
    mockupRatio: 16 / 9,
    tagline:
      "A comprehensive entrepreneurship learning ecosystem for schools, restructured for clarity and engagement.",
    year: "2026",
    client: "ENpower",
    role: "Web Developer",
    status: "Live",
    team: "Solo",
    timeline: "Apr 2026",
    tags: ["EdTech", "HTML/CSS/JS", "GSAP", "Completed"],
    liveUrl: "#",
    overview:
      "The existing ENpower website struggled to effectively communicate its diverse ecosystem of offerings due to poor structure and outdated design. Users found it difficult to understand the different programs and navigate between them, resulting in a fragmented experience.",
    approach:
      "The revamp focused on improving information architecture and visual clarity through structured layouts, modern UI design, and interactive elements — creating an intuitive platform that reflects the brand's innovation-driven mission.",
    features: [
      "Revamped information architecture with clear content organisation",
      "Categorised offerings: FSL, CSL, TIL, Impact Programs, Training Academy",
      "Modern, clean UI with strong typography and grid-based layouts",
      "Scroll-based animations and transitions using GSAP",
      "Fully responsive design across all devices",
      "Improved navigation and content hierarchy",
      "Integrated form handling via EmailJS",
    ],
    stack: {
      frontend: ["HTML5", "CSS3", "Vanilla JavaScript", "Bootstrap 5.3.2"],
      platform: ["GSAP", "EmailJS"],
      infrastructure: ["Google Fonts", "Material Symbols", "Static Hosting"],
    },
    whyBuilt: [
      "Address fragmented user experience caused by unstructured content",
      "Establish modern credibility reflecting an innovation-driven approach",
      "Enable seamless navigation between diverse programs",
      "Create an engaging, interactive platform for schools and educators",
    ],
    impact: [
      "Enhanced clarity in communicating multiple offerings",
      "Strengthened user experience via structured navigation",
      "Increased engagement through interactive UI and animations",
      "Positioned the brand as a modern EdTech ecosystem",
      "Established a scalable foundation for future expansion",
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
    imageRatio: 4 / 3,
    image: "/projects/partagalimath-landing/cover.png",
    imageAlt: "Partagalimath heritage landing page cover",
    mockup: "/projects/partagalimath-landing/mockup.png",
    mockupRatio: 16 / 9,
    tagline:
      "A hand-coded, mobile-first landing page replacing a heavy CMS setup.",
    year: "2025",
    client: "Partagalimath",
    role: "Developer & Designer",
    status: "Completed",
    team: "Solo",
    timeline: "2025",
    tags: ["Landing Page", "HTML/CSS/JS", "Completed"],
    liveUrl: "#",
    overview:
      "The previous landing solution used a heavy CMS or builder that resulted in slow page load speeds and poor mobile performance. Inconsistent styling, missing interactive elements, asset bloat, and the lack of a mobile-first approach were driving high bounce rates and weak engagement.",
    approach:
      "Built a fully hand-coded landing page using clean HTML, CSS and JavaScript without any CMS dependency. Mobile-first responsive design, optimised assets (minified code, lazy-loaded images), and interactive features including scroll animations, form validation and dynamic media displays were used to drive user engagement.",
    features: [
      "Responsive design across desktop, tablet and mobile",
      "Scroll-based animations and dynamic form validation",
      "Cross-browser compatibility testing",
      "Asset optimisation (minified CSS/JS, lazy-loading)",
      "Mobile-first layout approach",
      "Brand-aligned visual design",
    ],
    stack: {
      frontend: ["HTML (hand-coded)", "CSS (optimised)", "JavaScript"],
      infrastructure: ["Static Hosting", "CDN"],
    },
    whyBuilt: [
      "The previous CMS solution caused slow load speeds",
      "Inconsistent styling broke layouts on mobile and tablet",
      "Lack of interactivity reduced user engagement",
      "Asset bloat degraded performance and SEO",
    ],
    impact: [
      "Improved page load times and mobile performance",
      "Lower bounce rates and higher time-on-page",
      "Increased visitor interaction with interactive elements",
      "Better conversion tracking and ROI calculation",
      "Improved SEO ranking signals",
      "Enhanced lead generation and conversion metrics",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1600&q=80",
      "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=1600&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&q=80",
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
    imageRatio: 4 / 3,
    image: "/projects/eatprot-ecommerce-revamp/cover.png",
    imageAlt: "EatProt e-commerce storefront cover",
    mockup: "/projects/eatprot-ecommerce-revamp/mockup.png",
    mockupRatio: 16 / 9,
    tagline:
      "A plant-based, high-protein vegetarian snack brand redesigned on Shopify.",
    year: "2025",
    client: "EatProt",
    role: "Shopify Developer",
    status: "Live",
    team: "Solo",
    timeline: "Oct 2024 – Feb 2025",
    tags: ["Shopify", "E-commerce", "Live"],
    liveUrl: "#",
    overview:
      "EatProt is a plant-based food brand offering high-protein vegetarian snacks. The original website lacked a modern, user-friendly interface and did not effectively support e-commerce functionality. Product presentation was inadequate, limiting users' ability to understand the benefits of each item.",
    approach:
      "A customer-first approach focused on seamless navigation, strong brand storytelling and optimised e-commerce functionality. Migrating to Shopify ensured a mobile-friendly experience while emphasising the value of plant-based products through visual performance designed to drive engagement and conversions.",
    features: [
      "Streamlined dashboard for easy store setup",
      "Improved product presentation",
      "Streamlined checkout process",
      "Fully responsive, mobile-friendly design",
      "Stronger brand storytelling throughout the journey",
    ],
    stack: {
      platform: ["Shopify"],
      frontend: ["Liquid", "HTML5", "CSS3", "JavaScript"],
      infrastructure: ["Shopify CDN"],
    },
    whyBuilt: [
      "Old site lacked modern UX and e-commerce capability",
      "Inadequate product presentation hindered understanding",
      "Poor mobile responsiveness and checkout flow limited conversions",
      "Need to establish trust through brand storytelling and customer testimonials",
    ],
    impact: [
      "Increased user engagement and higher conversion rates",
      "Reduced bounce rates through mobile responsiveness",
      "Boosted sales via a streamlined checkout",
      "Scalable growth support on Shopify",
      "Strengthened competitive positioning in the plant-based market",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80",
      "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1600&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80",
    ],
  },
  {
    slug: "bespokebliss",
    icon: Gem,
    iconLabel: "Bespoke Bliss",
    title: "A refined WordPress site for a premium bespoke lifestyle brand.",
    description:
      "Custom-designed WordPress site for Bespoke Bliss — media-rich, polished and responsive, built to mirror the brand's premium positioning.",
    meta: "WordPress Developer, 2024",
    imageRatio: 4 / 3,
    image: "/projects/bespokebliss/cover.png",
    imageAlt: "Bespoke Bliss website cover",
    mockup: "/projects/bespokebliss/mockup.png",
    mockupRatio: 16 / 9,
    tagline:
      "A refined digital experience for a premium bespoke lifestyle and design brand.",
    year: "2024",
    client: "Bespoke Bliss",
    role: "WordPress Developer",
    status: "Live",
    team: "Solo",
    timeline: "Mid 2024 – Late 2024",
    tags: ["WordPress", "Custom Website", "Luxury Brand", "Live"],
    liveUrl: "https://bespokebliss.in/",
    overview:
      "Bespoke Bliss needed a website that reflected the elegance and premium positioning of its brand while remaining easy to navigate and visually balanced. The challenge was creating a polished experience that could showcase detailed visual content without making the site feel heavy or cluttered. The platform also needed to support smooth browsing across devices while maintaining a consistent aesthetic identity.",
    approach:
      "I focused on building a clean, media-focused experience aligned with the client's visual direction. The structure was designed to keep content organised while allowing imagery and layouts to feel immersive without affecting usability. Responsive sections, optimised loading behaviour for media-heavy pages and refined styling details kept things consistent and stable across the site.",
    features: [
      "Responsive multi-device layout",
      "Custom-designed landing and inner pages",
      "Optimised media and image presentation",
      "Smooth scrolling and interaction effects",
      "Structured content sections for service visibility",
      "Clean navigation flow across pages",
      "Consistent typography and spacing system",
      "SEO-friendly page structure",
    ],
    stack: {
      platform: ["WordPress"],
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["PHP", "WordPress CMS"],
      infrastructure: ["Managed Hosting", "SSL"],
    },
    whyBuilt: [
      "Create a premium digital presence aligned with the brand identity",
      "Improve usability while handling visually rich content",
      "Ensure the site remained responsive and easy to maintain",
      "Support future content updates and scalability",
    ],
    impact: [
      "Improved overall visual presentation of the brand",
      "Smoother browsing experience across devices",
      "Content easier to navigate and manage",
      "Delivered a stable and polished live website experience",
      "Maintained a consistent premium aesthetic throughout the site",
    ],
    gallery: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
