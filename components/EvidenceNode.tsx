'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EvidenceItem } from '@/lib/types';
import { EVIDENCE_TYPE_LABELS } from '@/lib/constants';
import QuranVerse from './QuranVerse';
import HadithBadge from './HadithBadge';
import ArabicText from './ArabicText';
import { BookOpen, MessageSquareQuote, Scale } from 'lucide-react';

interface EvidenceNodeProps {
    evidence: EvidenceItem;
    index: number;
}

function getEvidenceIcon(type: string) {
    switch (type) {
        case 'quran':
            return <BookOpen size={18} />;
        case 'hadith':
            return <MessageSquareQuote size={18} />;
        default:
            return <Scale size={18} />;
    }
}

export default function EvidenceNode({ evidence, index }: EvidenceNodeProps) {
    return (
        <motion.div
            className="evidence-node"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
        >
            <div className="evidence-timeline-dot">
                {getEvidenceIcon(evidence.type)}
            </div>
            <div className="evidence-content">
                <div className="evidence-header">
                    <span className="evidence-type-badge">
                        {EVIDENCE_TYPE_LABELS[evidence.type] || evidence.type}
                    </span>
                    <span className="evidence-reference">{evidence.reference}</span>
                    {evidence.hadith_grade && (
                        <HadithBadge
                            grade={evidence.hadith_grade}
                            gradedBy={evidence.graded_by}
                        />
                    )}
                </div>

                {evidence.type === 'quran' ? (
                    <QuranVerse
                        text_ar={evidence.text_ar}
                        text_de={evidence.text_de}
                        reference={evidence.reference}
                    />
                ) : (
                    <div className="evidence-text-block">
                        {evidence.text_ar && (
                            <div className="evidence-arabic">
                                <ArabicText size="md">{evidence.text_ar}</ArabicText>
                            </div>
                        )}
                        <p className="evidence-translation">{evidence.text_de}</p>
                    </div>
                )}

                <p className="evidence-explanation">{evidence.explanation_de}</p>
            </div>
        </motion.div>
    );
}
