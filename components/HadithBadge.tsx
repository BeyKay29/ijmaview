'use client';

import React from 'react';
import { HADITH_GRADE_COLORS, HADITH_GRADE_LABELS } from '@/lib/constants';

interface HadithBadgeProps {
    grade: string;
    gradedBy?: string;
}

export default function HadithBadge({ grade, gradedBy }: HadithBadgeProps) {
    const color = HADITH_GRADE_COLORS[grade] || '#8899aa';
    const label = HADITH_GRADE_LABELS[grade] || grade;

    return (
        <span className="hadith-badge-wrapper group relative inline-flex items-center">
            <span
                className="hadith-badge"
                style={{
                    backgroundColor: `${color}20`,
                    color: color,
                    borderColor: `${color}40`,
                }}
            >
                <span
                    className="hadith-dot"
                    style={{ backgroundColor: color }}
                />
                {label}
            </span>
            {gradedBy && (
                <span className="hadith-tooltip">
                    Bewertet von: {gradedBy}
                </span>
            )}
        </span>
    );
}
