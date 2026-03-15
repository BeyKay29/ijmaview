'use client';

import React, { useState } from 'react';
import { Position, MadhabId } from '@/lib/types';
import { MADHAB_COLORS, MADHAB_LABELS } from '@/lib/constants';
import PositionCard from './PositionCard';
import { ArrowLeftRight } from 'lucide-react';

interface CompareViewProps {
    positions: Position[];
}

const ALL_MADHABS: MadhabId[] = ['hanafi', 'shafii', 'maliki', 'hanbali'];

export default function CompareView({ positions }: CompareViewProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [leftMadhab, setLeftMadhab] = useState<MadhabId>('hanafi');
    const [rightMadhab, setRightMadhab] = useState<MadhabId>('shafii');

    const leftPositions = positions.filter((p) =>
        p.madhabs.includes(leftMadhab)
    );
    const rightPositions = positions.filter((p) =>
        p.madhabs.includes(rightMadhab)
    );

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="compare-toggle-btn"
                id="compare-toggle"
            >
                <ArrowLeftRight size={18} />
                <span>Rechtsschulen vergleichen</span>
            </button>
        );
    }

    return (
        <div className="compare-view">
            <div className="compare-header">
                <h3 className="compare-title">Rechtsschul-Vergleich</h3>
                <button
                    onClick={() => setIsOpen(false)}
                    className="compare-close"
                >
                    Schließen
                </button>
            </div>
            <div className="compare-columns">
                <div className="compare-column">
                    <select
                        value={leftMadhab}
                        onChange={(e) => setLeftMadhab(e.target.value as MadhabId)}
                        className="compare-select"
                        style={{ borderColor: MADHAB_COLORS[leftMadhab] }}
                        aria-label="Linke Rechtsschule wählen"
                    >
                        {ALL_MADHABS.map((m) => (
                            <option key={m} value={m}>
                                {MADHAB_LABELS[m].de}
                            </option>
                        ))}
                    </select>
                    {leftPositions.length > 0 ? (
                        leftPositions.map((p, i) => (
                            <PositionCard key={p.id} position={p} index={i} colorIndex={ALL_MADHABS.indexOf(leftMadhab)} />
                        ))
                    ) : (
                        <p className="compare-empty">Keine Position für diese Rechtsschule</p>
                    )}
                </div>
                <div className="compare-divider">
                    <ArrowLeftRight size={20} className="text-[#8899aa]" />
                </div>
                <div className="compare-column">
                    <select
                        value={rightMadhab}
                        onChange={(e) => setRightMadhab(e.target.value as MadhabId)}
                        className="compare-select"
                        style={{ borderColor: MADHAB_COLORS[rightMadhab] }}
                        aria-label="Rechte Rechtsschule wählen"
                    >
                        {ALL_MADHABS.map((m) => (
                            <option key={m} value={m}>
                                {MADHAB_LABELS[m].de}
                            </option>
                        ))}
                    </select>
                    {rightPositions.length > 0 ? (
                        rightPositions.map((p, i) => (
                            <PositionCard key={p.id} position={p} index={i} colorIndex={ALL_MADHABS.indexOf(rightMadhab)} />
                        ))
                    ) : (
                        <p className="compare-empty">Keine Position für diese Rechtsschule</p>
                    )}
                </div>
            </div>
        </div>
    );
}
