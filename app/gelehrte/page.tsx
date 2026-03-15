'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getScholars, getScholarQuestions } from '@/lib/data';
import { MadhabId } from '@/lib/types';
import { MADHAB_COLORS, MADHAB_LABELS } from '@/lib/constants';
import ScholarCard from '@/components/ScholarCard';

const ALL_MADHABS: MadhabId[] = ['hanafi', 'shafii', 'maliki', 'hanbali'];

export default function ScholarsPage() {
    const [filter, setFilter] = useState<MadhabId | 'all'>('all');
    const scholars = getScholars();
    const filtered =
        filter === 'all'
            ? scholars
            : scholars.filter((s) => s.madhab === filter);

    return (
        <div className="page-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h1 className="section-title">Gelehrte</h1>
                <p className="section-subtitle">
                    Die Gründer der vier großen sunnitischen Rechtsschulen
                </p>

                <div className="madhab-filter" role="group" aria-label="Filter nach Rechtsschule">
                    <button
                        onClick={() => setFilter('all')}
                        className={`madhab-filter-btn ${filter === 'all' ? 'active' : ''}`}
                        style={filter === 'all' ? { borderColor: '#c9a84c', color: '#c9a84c' } : {}}
                    >
                        Alle
                    </button>
                    {ALL_MADHABS.map((m) => (
                        <button
                            key={m}
                            onClick={() => setFilter(m)}
                            className={`madhab-filter-btn ${filter === m ? 'active' : ''}`}
                            style={
                                filter === m
                                    ? {
                                        borderColor: MADHAB_COLORS[m],
                                        color: MADHAB_COLORS[m],
                                        backgroundColor: `${MADHAB_COLORS[m]}15`,
                                    }
                                    : {}
                            }
                        >
                            <span
                                className="madhab-dot"
                                style={{
                                    backgroundColor:
                                        filter === m ? MADHAB_COLORS[m] : '#8899aa',
                                }}
                            />
                            {MADHAB_LABELS[m].de}
                        </button>
                    ))}
                </div>

                <div className="scholars-grid">
                    {filtered.map((scholar, i) => (
                        <ScholarCard
                            key={scholar.id}
                            scholar={scholar}
                            index={i}
                            questionCount={getScholarQuestions(scholar.id).length}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
