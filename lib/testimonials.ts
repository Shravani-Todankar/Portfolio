export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  quote: string;
  /** Short pull-quote shown big on feature cards. */
  headline: string;
  rating: number;
  /** Visual weight in the bento grid. */
  variant?: "feature" | "accent" | "standard";
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Kunal Darji",
    role: "Senior Full Stack Engineer",
    headline: "Ownership and attention to detail.",
    quote:
      "I've worked with many developers, and Shravani stands out for her ownership and attention to detail. She doesn't just implement requirements — she actively looks for ways to improve the user experience and overall product quality.",
    rating: 5,
    variant: "feature",
  },
  {
    name: "Vivek Pandey",
    role: "DevOps Engineer",
    headline: "Someone the team could always count on.",
    quote:
      "Shravani consistently delivered high-quality front-end solutions while maintaining clear communication throughout the development cycle. Her reliability made her someone the team could always count on.",
    rating: 5,
    variant: "standard",
  },
  {
    name: "Prasad",
    role: "Product Manager",
    headline: "Understands the “why” behind a feature.",
    quote:
      "One of Shravani's biggest strengths is understanding the “why” behind a feature. She asks thoughtful questions, contributes valuable ideas, and helps transform product requirements into polished user experiences.",
    rating: 5,
    variant: "standard",
  },
  {
    name: "Tarun D",
    role: "Full Stack Developer",
    headline: "Clean, well-structured code.",
    quote:
      "Working alongside Shravani was always easy. Her code was clean, well-structured, and easy to integrate with backend services, which saved the team a lot of development time.",
    rating: 5,
    variant: "standard",
  },
  {
    name: "Rupal Vilankar",
    role: "UI/UX Designer",
    headline: "Designs translated accurately into code.",
    quote:
      "Rare to see designs translated so accurately into code — every detail was spot on.",
    rating: 5,
    variant: "standard",
  },
  {
    name: "Rewa S",
    role: "Business Analyst",
    headline: "Business needs into intuitive interfaces.",
    quote:
      "Shravani has an exceptional ability to convert business requirements into intuitive and user-friendly interfaces. Her collaborative approach made it easy to align technical solutions with business goals.",
    rating: 5,
    variant: "accent",
  },
  {
    name: "Prashant Parmar",
    role: "Technical Lead",
    headline: "A strong growth mindset.",
    quote:
      "Shravani has a strong growth mindset and consistently takes initiative when tackling new challenges. Her dedication to delivering quality work has had a positive impact on every project she has been part of.",
    rating: 5,
    variant: "standard",
  },
  {
    name: "Kastle D'Souza",
    role: "Client Success Manager",
    headline: "The outcome exceeded expectations.",
    quote:
      "Professional, responsive, and the final outcome exceeded expectations.",
    rating: 5,
    variant: "standard",
  },
];

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0] ?? "";
  if (parts.length === 1) return first.slice(0, 2).toUpperCase();
  const last = parts[parts.length - 1] ?? "";
  return ((first[0] ?? "") + (last[0] ?? "")).toUpperCase();
}

export const TESTIMONIAL_SUMMARY = {
  averageRating: 5,
  count: TESTIMONIALS.length,
};
