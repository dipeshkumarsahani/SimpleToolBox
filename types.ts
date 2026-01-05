
export enum Category {
  TEXT = 'Text Tools',
  SECURITY = 'Security Tools',
  CALCULATORS = 'Calculators',
  IMAGE = 'Image Tools',
  DEVELOPER = 'Developer Tools',
  WEB_SEO = 'Web / SEO Tools',
  UTILITY = 'Random & Utility Tools',
  STUDENT = 'Student Tools'
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: Category;
  description: string;
  icon: string;
  howItWorks: string;
  faqs: { question: string; answer: string }[];
}

export interface CategoryData {
  title: Category;
  slug: string;
  description: string;
  icon: string;
}
