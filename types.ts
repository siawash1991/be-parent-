export type Language = 'fa' | 'en' | 'ar';

export type Direction = 'ltr' | 'rtl';

export interface LanguageConfig {
  code: Language;
  name: string;
  dir: Direction;
  fontFamily: 'sans' | 'fa' | 'ar';
}

export interface Category {
  slug: string;
  name: { [key in Language]: string };
  emoji: string;
  color: string;
}

export interface PopularQuestion {
  id: number;
  question: { [key in Language]: string };
  categorySlug: string;
}
