'use client';

import React from 'react';
import Link from 'next/link';
import { Scholar, MadhabId } from '@/lib/types';
import { MADHAB_COLORS, MADHAB_LABELS } from '@/lib/constants';
import ScholarAvatar from './ScholarAvatar';
import ArabicText from './ArabicText';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

interface ScholarCardProps {
    scholar: Scholar;
    index: number;
    questionCount?: number;
}

export default function ScholarCard({ scholar, index, questionCount }: ScholarCardProps) {
    const madhab = scholar.madhab as MadhabId;
    const color = MADHAB_COLORS[madhab];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Link
                href={`/gelehrte/${scholar.id}`}
                className="scholar-card group"
                id={`scholar-${scholar.id}`}
            >
                <div className="scholar-card-top">
                    <ScholarAvatar
                        initials={scholar.image_placeholder}
                        madhab={madhab}
                        size="lg"
                        name={scholar.name_de}
                    />
                    <span
                        className="scholar-madhab-badge"
                        style={{
                            backgroundColor: `${color}15`,
                            color: color,
                            borderColor: `${color}40`,
                        }}
                    >
                        {MADHAB_LABELS[madhab].de}
                    </span>
                </div>
                <h3 className="scholar-card-name">{scholar.name_de}</h3>
                <ArabicText size="sm" className="scholar-card-arabic">
                    {scholar.name_ar}
                </ArabicText>
                <div className="scholar-card-meta">
                    <span className="scholar-card-meta-item">
                        <Calendar size={14} />
                        {scholar.birth_year_ce}–{scholar.death_year_ce} n. Chr.
                    </span>
                    <span className="scholar-card-meta-item">
                        <MapPin size={14} />
                        {scholar.region}
                    </span>
                </div>
                <p className="scholar-card-bio">{scholar.bio_de}</p>
                {questionCount !== undefined && (
                    <span className="scholar-card-questions">
                        {questionCount} {questionCount === 1 ? 'Frage' : 'Fragen'}
                    </span>
                )}
            </Link>
        </motion.div>
    );
}
