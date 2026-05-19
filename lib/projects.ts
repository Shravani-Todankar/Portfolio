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
    imageRatio: 1024 / 768,
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1024&q=80",
    imageAlt: "Partagalimath heritage landing page mockup",
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
      "A live, project-based learning platform for high-school students — built on WordPress with an integrated LMS.",
    year: "2026",
    client: "Mosaic Minds",
    role: "WordPress & LMS Developer",
    status: "Live",
    team: "Solo",
    timeline: "Apr 2026",
    tags: ["WordPress", "LMS", "EdTech", "Live"],
    liveUrl: "#",
    overview:
      "Mosaic Minds needed a complete online presence to showcase and deliver their live, project-based learning programs for high-school students. Core issues included a lack of digital identity, no course management platform, absence of LMS functionality, unclear communication of teaching philosophy, and the need to establish brand credibility as a new venture.",
    approach:
      "Built a modern UI/UX reflecting brand creativity, structured course pages with clear learning outcomes, integrated a robust LMS for live classes and dashboards, emphasised storytelling in the content strategy, and deployed on a scalable WordPress infrastructure with mobile-first design optimised for performance.",
    features: [
      "Live class support with student dashboards",
      "Course enrolment and management system",
      "Assignment tracking and progress monitoring",
      "Contact forms and enquiry pages",
      "Mobile-responsive design",
      "Course scalability for adding new batches",
    ],
    stack: {
      platform: ["WordPress", "LMS Integration"],
      frontend: ["Custom CSS", "JavaScript"],
      infrastructure: ["Managed Hosting", "Framer (landing)"],
    },
    whyBuilt: [
      "Communicate a project-based learning philosophy effectively",
      "Manage live classes and student progress systematically",
      "Build trust with new audiences through professional design",
      "Scale course offerings without platform constraints",
    ],
    impact: [
      "Established a complete digital brand presence",
      "Enabled scalable online learning delivery",
      "Improved enrolment conversion rates",
      "Enhanced user experience for students and parents",
      "Built institutional credibility",
      "Created a foundation for program expansion",
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
    tagline:
      "A modern fintech website redesign for a UPI, AePS and mobile banking solutions provider.",
    year: "2024",
    client: "Sarvatra Technologies",
    role: "Webflow Developer",
    status: "Completed",
    team: "Solo",
    timeline: "Sep 2024 – Jan 2025",
    tags: ["Webflow", "CMS", "Fintech", "Completed"],
    liveUrl: "#",
    overview:
      "Sarvatra Technologies, a fintech company providing UPI, AePS and mobile banking solutions, operated with an outdated design and user experience. The site had a static layout, limited responsiveness on mobile devices, and lacked the modern visuals or interactive elements expected of a digital-first fintech brand.",
    approach:
      "A Webflow-based redesign emphasising a clean layout, responsive experience and improved content structure. Interactive animations and Webflow CMS were used to enhance visual storytelling and streamline future updates — creating a sleek, professional site aligned with Sarvatra's digital-first image.",
    features: [
      "Mobile-first responsive design across all devices",
      "Simplified navigation structure",
      "Consistent visual hierarchy via typography and spacing",
      "Subtle animations, hover effects and transitions",
      "Optimised image performance for faster load times",
      "Webflow CMS integration for real-time content updates",
      "Accessible layouts with focus on readability and contrast",
      "Section-based content architecture",
    ],
    stack: {
      platform: ["Webflow", "Webflow CMS"],
      frontend: ["Custom CSS", "JavaScript"],
      infrastructure: ["Webflow Hosting"],
    },
    whyBuilt: [
      "Reflect a modern fintech identity rather than the legacy design",
      "Improve mobile usability and device compatibility",
      "Enable scalable, maintainable content management",
      "Establish professional visual differentiation in a competitive market",
    ],
    impact: [
      "Modernised brand image with a professional aesthetic",
      "Enhanced user engagement through improved navigation",
      "Expanded audience reach via mobile responsiveness",
      "Simplified content management without layout breakage",
      "Generated increased leads",
      "Competitive advantage in the fintech sector",
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
      "The prior website had a basic layout with limited interactivity and lacked comprehensive e-commerce functionality. The revamp needed to transform this into a modern, responsive WordPress platform with full WooCommerce integration for product showcase and sales — together with improved SEO, security, speed optimisation and analytics.",
    approach:
      "A user-centred design process began by analysing the old site's pain points and defining clear objectives. The strategy created a modern, intuitive layout that prioritises ease of navigation and accessibility, with a focus on responsive design, fast performance and SEO optimisation backed by continuous testing and feedback loops.",
    features: [
      "Modern, responsive design across all devices",
      "Full WooCommerce integration for e-commerce functionality",
      "Enhanced site speed and performance optimisation",
      "Improved SEO setup for search visibility",
      "Strengthened security measures",
      "Minimalistic design with clear visual hierarchy",
      "Purposeful colour scheme guiding user navigation",
      "Consistent typography for platform clarity",
      "Subtle animations highlighting transitions",
    ],
    stack: {
      platform: ["WordPress", "WooCommerce"],
      frontend: ["Custom CSS", "JavaScript"],
      backend: ["PHP", "MySQL"],
      infrastructure: ["Managed Hosting", "SSL", "Analytics", "Security Tools"],
    },
    whyBuilt: [
      "Address an outdated website lacking interactivity and e-commerce capability",
      "Enable online product sales and distribution",
      "Improve search engine visibility and organic reach",
      "Build customer confidence through a modern, secure platform",
    ],
    impact: [
      "Increased online sales via a seamless e-commerce experience",
      "Higher user engagement from improved usability",
      "Enhanced brand credibility through a professional appearance",
      "Increased organic traffic from better SEO and performance",
      "Strengthened customer trust via improved security",
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
