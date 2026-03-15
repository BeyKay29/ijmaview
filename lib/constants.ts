import { MadhabId } from './types';

export const MADHAB_COLORS: Record<MadhabId, string> = {
    hanafi: '#2dd4bf',
    shafii: '#a78bfa',
    maliki: '#fb923c',
    hanbali: '#60a5fa',
};

export const MADHAB_LABELS: Record<MadhabId, { de: string; ar: string }> = {
    hanafi: { de: 'Hanafi', ar: 'حنفي' },
    shafii: { de: "Schafi'i", ar: 'شافعي' },
    maliki: { de: 'Maliki', ar: 'مالكي' },
    hanbali: { de: 'Hanbali', ar: 'حنبلي' },
};

export const HADITH_GRADE_COLORS: Record<string, string> = {
    sahih: '#4ade80',
    hasan: '#fbbf24',
    daif: '#f87171',
};

export const HADITH_GRADE_LABELS: Record<string, string> = {
    sahih: 'Sahih (authentisch)',
    hasan: 'Hasan (gut)',
    daif: "Da'if (schwach)",
};

export const EVIDENCE_TYPE_LABELS: Record<string, string> = {
    quran: 'Quran',
    hadith: 'Hadith',
    athar: 'Athar (Gefährtenaussage)',
    ijma: 'Ijma (Konsens)',
    qiyas: 'Qiyas (Analogieschluss)',
};

export const POSITION_COLORS = [
    '#c9a84c',
    '#60a5fa',
    '#a78bfa',
    '#2dd4bf',
    '#fb923c',
    '#f87171',
];

export const ICON_MAP: Record<string, string> = {
    droplets: 'Droplets',
    moon: 'Moon',
    sunset: 'Sunset',
    coins: 'Coins',
    compass: 'Compass',
    handshake: 'Handshake',
    heart: 'Heart',
};

export const SITE_NAME = 'IjmaView';
export const SITE_DESCRIPTION = 'Islamische Rechtsmeinungen im Überblick – quellenbasiert, neutral, vergleichbar';
