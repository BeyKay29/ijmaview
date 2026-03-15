'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Question, MadhabId } from '@/lib/types';
import { MADHAB_COLORS } from '@/lib/constants';
import { getCategoryById } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

interface QuestionCardProps {
    question: Question;
    index?: number;
}

export default function QuestionCard({ question, index = 0 }: QuestionCardProps) {
    const category = getCategoryById(question.category);
    const allMadhabs = [...new Set(question.positions.flatMap((p) => p.madhabs))];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
        >
            <Link
                href={`/frage/${question.slug}`}
                className="question-card group"
                id={`question-${question.id}`}
            >
                <div className="question-card-top">
                    {category && (
                        <span className="question-category-badge">{category.name_de}</span>
                    )}
                    <span className="question-position-count">
                        {question.positions.length} Positionen
                    </span>
                </div>
                <h3 className="question-card-title">{question.question_de}</h3>
                <div className="question-card-bottom">
                    <div className="question-madhab-dots">
                        {allMadhabs.map((m) => (
                            <span
                                key={`madhab-${m}-${index}`}
                                className="madhab-dot-sm"
                                style={{ backgroundColor: MADHAB_COLORS[m as MadhabId] }}
                                title={m}
                            />
                        ))}
                    </div>
                    <ArrowRight
                        size={16}
                        className="question-card-arrow"
                    />
                </div>
            </Link>
        </motion.div>
    );
}
