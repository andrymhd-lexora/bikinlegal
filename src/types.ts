/**
 * Types and interfaces for BikinPT.id
 */

export interface PricingPackage {
  id: string;
  name: string;
  badge: string;
  subtitle: string;
  basePrice: number;
  features: string[];
  recommendedFor: string;
  colorScheme: 'emerald' | 'blue' | 'purple';
}

export interface CalculatorState {
  companyType: 'pt' | 'cv' | 'pt_perorangan' | 'yayasan' | 'koperasi';
  packageId?: string;
  officeType: 'virtual' | 'physical' | 'none';
  includeHaki: boolean;
  includeOsm: boolean;
  includeSppl: boolean;
  includePbgSlf: boolean;
  includeIso: boolean;
  selectedAddonIds: string[];
  durationMonths: number; // For virtual office
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  suggestedPrompts?: string[];
}

export type BusinessIndustry = 'tech' | 'f&b' | 'construction' | 'trading' | 'tourism' | 'other';

export interface DiagnosticResult {
  industry: BusinessIndustry;
  capitalSize: 'micro' | 'small' | 'medium' | 'large';
  readyToProceed: boolean;
  fullName: string;
  phone: string;
  needsSpace: boolean;
  recommendedPackageId: string;
}

export interface ClientReview {
  name: string;
  company: string;
  role: string;
  stars: number;
  content: string;
  date: string;
}
