
import { Category, Tool, CategoryData } from './types';

export const CATEGORIES: CategoryData[] = [
  { title: Category.TEXT, slug: 'text-tools', description: 'Analyze, convert, and manipulate text with ease.', icon: 'M16.5 3.5l3 3L7 19H4v-3L16.5 3.5z' },
  { title: Category.SECURITY, slug: 'security-tools', description: 'Generate passwords and check your digital safety.', icon: 'M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z' },
  { title: Category.CALCULATORS, slug: 'calculators', description: 'Accurate calculators for finance, health, and math.', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 15H6V6h12v12z' },
  { title: Category.DEVELOPER, slug: 'developer-tools', description: 'Tools for coding, formatting, and data conversion.', icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z' },
  { title: Category.IMAGE, slug: 'image-tools', description: 'Fast client-side image editing and compression.', icon: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' },
];

export const TOOLS: Tool[] = [
  {
    id: 'word-counter',
    name: 'Word Counter',
    slug: 'word-counter',
    category: Category.TEXT,
    description: 'Count words, characters, and lines in your text instantly.',
    icon: 'M4 9h16v2H4V9zm0 4h10v2H4v-2z',
    howItWorks: 'Paste or type your content into the text area. The tool automatically splits the text by whitespace to count words and calculates total characters including and excluding spaces. It works 100% in your browser.',
    faqs: [
      { question: 'Is my data saved?', answer: 'No, all calculations happen in your browser. We do not store or transmit your text.' },
      { question: 'Does it count punctuation?', answer: 'Yes, character count includes punctuation. Word count considers space-separated strings.' }
    ]
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    slug: 'password-generator',
    category: Category.SECURITY,
    description: 'Create strong, secure passwords with customizable length and characters.',
    icon: 'M12 17a2 2 0 0 0 2-2c0-1.11-.89-2-2-2a2 2 0 0 0-2 2c0 1.11.89 2 2 2zM18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z',
    howItWorks: 'The generator uses cryptographically secure random number generation (where available) or standard pseudo-random math to pick characters from your selected sets (Uppercase, Lowercase, Numbers, Symbols).',
    faqs: [
      { question: 'What is a strong password?', answer: 'A password with at least 12 characters, including mixed case, numbers, and symbols.' },
      { question: 'Are these passwords truly random?', answer: 'Yes, they are generated using secure client-side randomization logic.' }
    ]
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    slug: 'json-formatter',
    category: Category.DEVELOPER,
    description: 'Prettify, validate, and format messy JSON code.',
    icon: 'M4 7h16v2H4V7zm0 4h16v2H4v-2zm0 4h16v2H4v-2z',
    howItWorks: 'Input your raw JSON. The tool uses standard JSON parsing to validate the structure. If valid, it returns a formatted string with 2-space indentation.',
    faqs: [
      { question: 'Will it fix my JSON errors?', answer: 'It will highlight where the error is, but you must manually fix syntax errors.' }
    ]
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    slug: 'bmi-calculator',
    category: Category.CALCULATORS,
    description: 'Calculate your Body Mass Index (BMI) using height and weight.',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
    howItWorks: 'The BMI formula is weight (kg) / [height (m)]². This tool converts metric/imperial units automatically to provide your score and classification.',
    faqs: [
        { question: 'What is a healthy BMI?', answer: 'For most adults, a BMI between 18.5 and 24.9 is considered healthy.' }
    ]
  },
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    slug: 'uuid-generator',
    category: Category.DEVELOPER,
    description: 'Generate Version 4 UUIDs (Universally Unique Identifiers).',
    icon: 'M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    howItWorks: 'Generates random 128-bit identifiers compliant with the RFC 4122 standard.',
    faqs: []
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    slug: 'case-converter',
    category: Category.TEXT,
    description: 'Convert text to Uppercase, Lowercase, Title Case, or Sentence Case.',
    icon: 'M12.5 15.5l-2.5-2.5L11.5 11l1 1 2-2 1 1-3 3zM21 7L9 19l-6-6 1.5-1.5L9 16 19.5 5.5 21 7z',
    howItWorks: 'Text is transformed using standard string manipulation algorithms to match your chosen casing style.',
    faqs: []
  },
  {
    id: 'sha256-generator',
    name: 'SHA256 Hash Generator',
    slug: 'sha256-generator',
    category: Category.DEVELOPER,
    description: 'Generate a secure SHA-256 hash for any input string.',
    icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
    howItWorks: 'Uses the Web Crypto API to generate a cryptographic hash of your input text.',
    faqs: []
  },
  {
    id: 'base64-encode-decode',
    name: 'Base64 Encoder/Decoder',
    slug: 'base64-encode-decode',
    category: Category.DEVELOPER,
    description: 'Easily encode text to Base64 or decode it back.',
    icon: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
    howItWorks: 'Utilizes standard atob and btoa methods for encoding and decoding binary-to-text data.',
    faqs: []
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    slug: 'age-calculator',
    category: Category.CALCULATORS,
    description: 'Calculate exactly how old you are in years, months, and days.',
    icon: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z',
    howItWorks: 'Takes your date of birth and calculates the difference between it and today\'s date.',
    faqs: []
  }
];
