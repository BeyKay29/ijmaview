'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { getScholarById, getScholarQuestions } from '@/lib/data';
import { MadhabId } from '@/lib/types';
import { MADHAB_COLORS, MADHAB_LABELS } from '@/lib/constants';
import ScholarAvatar from '@/components/ScholarAvatar';
import ArabicText from '@/components/ArabicText';
import QuestionCard from '@/components/QuestionCard';
import Breadcrumb from '@/components/Breadcrumb';
import { Calendar, MapPin, BookOpen, Clock } from 'lucide-react';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ScholarDetailPage({ params }: PageProps) {
    const { id } = use(params);
    const scholar = getScholarById(id);

    if (!scholar) {
        notFound();
    }

    const questions = getScholarQuestions(scholar.id);
    const madhab = scholar.madhab as MadhabId;
    const color = MADHAB_COLORS[madhab];

    return (
        <div className="page-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Breadcrumb
                    items={[
                        { label: 'Gelehrte', href: '/gelehrte' },
                        { label: scholar.name_de },
                    ]}
                />

                <div className="scholar-detail-header">
                    <ScholarAvatar
                        initials={scholar.image_placeholder}
                        madhab={madhab}
                        size="lg"
                        name={scholar.name_de}
                    />
                    <div className="scholar-detail-info">
                        <h1 className="scholar-detail-name">{scholar.name_de}</h1>
                        <ArabicText size="lg" className="text-[#e6c66e] opacity-80">
                            {scholar.full_name_ar}
                        </ArabicText>
                        <span
                            className="madhab-badge"
                            style={{
                                backgroundColor: `${color}15`,
                                color: color,
                                borderColor: `${color}40`,
                                display: 'inline-block',
                                marginTop: '0.5rem',
                            }}
                        >
                            {MADHAB_LABELS[madhab].de}
                        </span>
                        <div className="scholar-detail-meta">
                            <span className="scholar-detail-meta-item">
                                <Calendar size={14} />
                                {scholar.birth_year_ce}–{scholar.death_year_ce} n. Chr.
                            </span>
                            <span className="scholar-detail-meta-item">
                                <Clock size={14} />
                                {scholar.birth_year_hijri}–{scholar.death_year_hijri} n. H.
                            </span>
                            <span className="scholar-detail-meta-item">
                                <MapPin size={14} />
                                {scholar.region}
                            </span>
                        </div>
                        <p className="scholar-detail-bio">{scholar.bio_de}</p>
                        <div className="scholar-detail-works">
                            <h3 className="scholar-detail-works-title">
                                <BookOpen size={16} className="inline mr-1" />
                                Hauptwerke
                            </h3>
                            <div className="scholar-detail-works-list">
                                {scholar.key_works.map((work) => (
                                    <span key={work} className="scholar-detail-work">
                                        {work}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {questions.length > 0 && (
                    <section>
                        <h2 className="section-title">
                            Fragen mit Meinungen von {scholar.name_de}
                        </h2>
                        <p className="section-subtitle">
                            {questions.length} {questions.length === 1 ? 'Frage' : 'Fragen'}
                        </p>
                        <div className="search-results-grid">
                            {questions.map((q, i) => (
                                <QuestionCard key={q.id} question={q} index={i} />
                            ))}
                        </div>
                    </section>
                )}
            </motion.div>
        </div>
    );
}
