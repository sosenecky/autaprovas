export interface ServiceOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  priceRange?: string;
}

export interface VehicleFilter {
  category: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}
