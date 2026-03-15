// TypeScript interfaces for all IjmaView data structures

export interface Subcategory {
  id: string;
  name_de: string;
  name_ar: string;
}

export interface Category {
  id: string;
  name_de: string;
  name_ar: string;
  icon: string;
  description: string;
  subcategories: Subcategory[];
}

export interface Scholar {
  id: string;
  name_de: string;
  name_ar: string;
  full_name_ar: string;
  madhab: MadhabId;
  birth_year_hijri: number;
  death_year_hijri: number;
  birth_year_ce: number;
  death_year_ce: number;
  era: string;
  region: string;
  bio_de: string;
  key_works: string[];
  image_placeholder: string;
}

export type MadhabId = 'hanafi' | 'shafii' | 'maliki' | 'hanbali';

export type HadithGrade = 'sahih' | 'hasan' | 'daif';

export type EvidenceType = 'quran' | 'hadith' | 'athar' | 'ijma' | 'qiyas';

export interface EvidenceItem {
  type: EvidenceType;
  reference: string;
  text_ar: string;
  text_de: string;
  explanation_de: string;
  hadith_grade?: HadithGrade;
  graded_by?: string;
}

export interface Position {
  id: string;
  label_de: string;
  label_ar: string;
  description_de: string;
  scholars: string[];
  madhabs: MadhabId[];
  evidence_chain: EvidenceItem[];
  historical_context_de: string;
}

export interface Source {
  title: string;
  author: string;
  url: string;
}

export interface Question {
  id: string;
  slug: string;
  category: string;
  subcategory: string;
  question_de: string;
  question_ar: string;
  search_aliases: string[];
  context_de: string;
  positions: Position[];
  related_questions: string[];
  sources: Source[];
}

export interface SearchResult {
  item: Question;
  score: number;
}

export interface BookmarkItem {
  questionId: string;
  slug: string;
  question_de: string;
  category: string;
  addedAt: string;
}
