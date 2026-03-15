'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getQuestionBySlug, getCategoryById, getRelatedQuestions } from '@/lib/data';
import { useFilterStore } from '@/store/useFilterStore';
import ArabicText from '@/components/ArabicText';
import Breadcrumb from '@/components/Breadcrumb';
import BookmarkButton from '@/components/BookmarkButton';
import MadhabFilter from '@/components/MadhabFilter';
import ConsensusChart from '@/components/ConsensusChart';
import PositionCard from '@/components/PositionCard';
import CompareView from '@/components/CompareView';
import RelatedQuestions from '@/components/RelatedQuestions';
import { ExternalLink, BookOpen } from 'lucide-react';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function QuestionDetailPage({ params }: PageProps) {
    const { slug } = use(params);
    const question = getQuestionBySlug(slug);
    const { activeMadhabs } = useFilterStore();

    if (!question) {
        notFound();
    }

    const category = getCategoryById(question.category);
    const filteredPositions = question.positions.filter((p) =>
        p.madhabs.some((m) => activeMadhabs.includes(m))
    );
    const relatedQuestions = getRelatedQuestions(question.related_questions);

    const breadcrumbItems = [
        ...(category
            ? [{ label: category.name_de, href: `/suche?kategorie=${category.id}` }]
            : []),
        { label: question.question_de },
    ];

    return (
        <div className="page-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Breadcrumb items={breadcrumbItems} />

                <div className="question-detail-header">
                    <h1 className="question-detail-title">{question.question_de}</h1>
                    <ArabicText size="xl" className="question-detail-arabic text-[#e6c66e] opacity-80">
                        {question.question_ar}
                    </ArabicText>
                    <p className="question-detail-context">{question.context_de}</p>
                    <div className="question-detail-actions">
                        <BookmarkButton question={question} />
                    </div>
                </div>

                <ConsensusChart
                    positions={question.positions}
                    activeMadhabs={activeMadhabs}
                />

                <MadhabFilter />

                <div>
                    {filteredPositions.map((position, i) => (
                        <PositionCard
                            key={position.id}
                            position={position}
                            index={i}
                            colorIndex={question.positions.indexOf(position)}
                        />
                    ))}
                </div>

                {filteredPositions.length === 0 && (
                    <div className="search-empty">
                        <p className="search-empty-text">
                            Keine Positionen für die ausgewählten Rechtsschulen.
                        </p>
                    </div>
                )}

                <CompareView positions={question.positions} />

                <div className="sources-section">
                    <h3 className="sources-title">Quellenverzeichnis</h3>
                    <div className="sources-list">
                        {question.sources.map((source, i) => (
                            <div key={i} className="source-item">
                                <BookOpen size={18} className="source-icon" />
                                <div className="source-info">
                                    <div className="source-title-text">{source.title}</div>
                                    <div className="source-author">{source.author}</div>
                                </div>
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="source-link"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <RelatedQuestions questions={relatedQuestions} />
            </motion.div>
        </div>
    );
}
