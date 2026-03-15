'use client';

import React from 'react';
import Link from 'next/link';
import { Question } from '@/lib/types';
import QuestionCard from './QuestionCard';

interface RelatedQuestionsProps {
    questions: Question[];
}

export default function RelatedQuestions({ questions }: RelatedQuestionsProps) {
    if (questions.length === 0) return null;

    return (
        <section className="related-questions-section">
            <h3 className="section-title">Verwandte Fragen</h3>
            <div className="related-questions-grid">
                {questions.map((q, i) => (
                    <QuestionCard key={q.id} question={q} index={i} />
                ))}
            </div>
        </section>
    );
}
