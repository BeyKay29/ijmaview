'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Position, MadhabId } from '@/lib/types';
import { MADHAB_COLORS, MADHAB_LABELS } from '@/lib/constants';
import { getScholarById } from '@/lib/data';
import ScholarAvatar from './ScholarAvatar';
import EvidenceChain from './EvidenceChain';
import { ChevronDown, History } from 'lucide-react';

interface PositionCardProps {
    position: Position;
    index: number;
    colorIndex: number;
}

export default function PositionCard({ position, index, colorIndex }: PositionCardProps) {
    const [showHistory, setShowHistory] = useState(false);

    const positionColors = [
        '#c9a84c', '#60a5fa', '#a78bfa', '#2dd4bf', '#fb923c', '#f87171',
    ];
    const accentColor = positionColors[colorIndex % positionColors.length];

    return (
        <motion.div
            className="position-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            layout
            style={{ borderTopColor: accentColor }}
        >
            <div className="position-card-header">
                <div className="position-label-group">
                    <h3 className="position-label" style={{ color: accentColor }}>
                        {position.label_de}
                    </h3>
                    <span className="position-label-ar">{position.label_ar}</span>
                </div>
                <div className="position-madhabs">
                    {position.madhabs.map((m) => (
                        <span
                            key={m}
                            className="madhab-badge"
                            style={{
                                backgroundColor: `${MADHAB_COLORS[m]}15`,
                                color: MADHAB_COLORS[m],
                                borderColor: `${MADHAB_COLORS[m]}40`,
                            }}
                        >
                            {MADHAB_LABELS[m].de}
                        </span>
                    ))}
                </div>
            </div>

            <div className="position-scholars">
                {position.scholars.map((sId) => {
                    const scholar = getScholarById(sId);
                    if (!scholar) return null;
                    return (
                        <div key={sId} className="position-scholar-chip">
                            <ScholarAvatar
                                initials={scholar.image_placeholder}
                                madhab={scholar.madhab as MadhabId}
                                size="sm"
                                name={scholar.name_de}
                            />
                            <span>{scholar.name_de}</span>
                        </div>
                    );
                })}
            </div>

            <p className="position-description">{position.description_de}</p>

            <EvidenceChain evidence={position.evidence_chain} />

            <div className="position-history-section">
                <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="position-history-toggle"
                    aria-expanded={showHistory}
                >
                    <History size={16} />
                    <span>Historischer Kontext</span>
                    <ChevronDown
                        size={16}
                        className={`transform transition-transform ${showHistory ? 'rotate-180' : ''
                            }`}
                    />
                </button>
                <AnimatePresence>
                    {showHistory && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="position-history-text">
                                {position.historical_context_de}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
