'use client';

import React from 'react';
import ArabicText from './ArabicText';

interface QuranVerseProps {
    text_ar: string;
    text_de: string;
    reference: string;
}

export default function QuranVerse({ text_ar, text_de, reference }: QuranVerseProps) {
    return (
        <div className="quran-verse-box">
            <div className="quran-verse-inner">
                <ArabicText size="lg" className="quran-arabic">
                    {text_ar}
                </ArabicText>
                <p className="quran-translation">{text_de}</p>
                <span className="quran-reference">{reference}</span>
            </div>
        </div>
    );
}
