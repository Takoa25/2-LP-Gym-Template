import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Colors {
  primary: string;
  primaryDark: string;
  primaryHighlight: string; // Cor para textos destacados e ícones soltos
  textOnPrimary: string;    // Cor do texto que fica SOBRE fundos primários (contraste)
  secondary: string;
  background: string;
  text: string;
  textMuted: string;
  success: string;
}

export interface Fonts {
  display: string;
  body: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  domain: string;
  path: string;
  themeColor: string;
  keywords: string;
  og: {
    title: string;
    description: string;
    type: string;
    siteName: string;
    image: string;
    locale: string;
  };
  twitter: {
    card: string;
  };
}

export interface CompanyInfos {
  name: string;
  cnpj: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  mapsLink: string;
  mapsEmbed: string;
}

export interface Images {
  logo: string;
  heroDesktop: string;
  heroMobile: string;
  solution: string;
  team: string;
  ctaBackground: string;
  // Services
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  // Testimonials
  testimonial1: string;
  testimonial2: string;
  testimonial3: string;
  // Team
  team1: string;
  team2: string;
  team3: string;
  team4: string;
}

export interface BannerConfig {
  enabled: boolean;
  message: string;
  highlightText: string;
  endDate: string;
  styles: {
    backgroundColor: string;
    textColor: string;
    highlightColor: string;
  };
}

export interface NavbarConfig {
  enabled: boolean;
  logoText: string;
  logoTextHighlight: string;
  ctaButtonText: string;
  menuItems: NavItem[];
}

export interface HeroConfig {
  enabled: boolean;
  badge: string;
  headline: {
    part1: string;
    part2: string;
    highlight: string;
  };
  subheadline: {
    text: string;
    highlight: string;
  };
  ctaPrimary: {
    text: string;
    link: string;
  };
  ctaSecondary: {
    text: string;
    whatsappMessage: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
  icon: string | LucideIcon;
}

export interface StatsConfig {
  enabled: boolean;
  items: StatItem[];
}

export interface ProblemCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProblemConfig {
  enabled: boolean;
  headline: string;
  headlineHighlight: string;
  description: string;
  cards: ProblemCard[];
}

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionConfig {
  enabled: boolean;
  label: string;
  headline: string;
  headlineHighlight: string;
  features: SolutionFeature[];
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  enabled: boolean;
  headline: string;
  headlineHighlight: string;
  items: ServiceItem[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface TestimonialsConfig {
  enabled: boolean;
  label: string;
  headline: string;
  headlineHighlight: string;
  items: TestimonialItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  instagram: string;
}

export interface TeamConfig {
  enabled: boolean;
  headline: string;
  headlineHighlight: string;
  members: TeamMember[];
}

export interface LocationHour {
  label: string;
  time: string;
}

export interface LocationFacility {
  icon: LucideIcon;
  text: string;
}

export interface LocationConfig {
  enabled: boolean;
  headline: string;
  hours: LocationHour[];
  facilities: LocationFacility[];
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  badgeText: string | null;
  discountText: string | null;
  buttonText: string;
  whatsappMessage: string;
}

export interface PricingConfig {
  enabled: boolean;
  headline: string;
  headlineHighlight: string;
  subtitle: string;
  plans: Plan[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  enabled: boolean;
  headline: string;
  headlineHighlight: string;
  items: FAQItem[];
}

export interface FinalCTAConfig {
  enabled: boolean;
  headline: string;
  headlineHighlight: string;
  subtitle: string;
  buttonText: string;
  whatsappMessage: string;
}

export interface FooterConfig {
  enabled: boolean;
  description: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  quickLinks: NavItem[];
  policies: NavItem[];
  copyright: string;
  developedBy: string;
  developerName: string;
  developerUrl: string;
}

export interface CookieBannerConfig {
  enabled: boolean;
  message: string;
  acceptButtonText: string;
  privacyButtonText: string;
}

export interface ContentConfig {
  colors: Colors;
  fonts: Fonts;
  seo: SeoConfig;
  infos: CompanyInfos;
  images: Images;
  banner: BannerConfig;
  navbar: NavbarConfig;
  hero: HeroConfig;
  stats: StatsConfig;
  problem: ProblemConfig;
  solution: SolutionConfig;
  services: ServicesConfig;
  testimonials: TestimonialsConfig;
  team: TeamConfig;
  location: LocationConfig;
  pricing: PricingConfig;
  faq: FAQConfig;
  finalCta: FinalCTAConfig;
  footer: FooterConfig;
  cookieBanner: CookieBannerConfig;
}