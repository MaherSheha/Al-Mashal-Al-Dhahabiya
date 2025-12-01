import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PartnerItem {
  id: string;
  name: string;
  logoUrl: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
}