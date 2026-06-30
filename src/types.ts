export interface Service {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  icon: string; // lucide icon name
  image: string; // placeholder image URL
  basePriceRange: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Site Work' | 'Underground Pipe' | 'Material Sales' | 'All';
  description: string;
  location: string;
  image: string;
  completedDate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  avatar: string;
}

export type ActiveSection = 'home' | 'about' | 'services' | 'pricing' | 'work' | 'contact';
