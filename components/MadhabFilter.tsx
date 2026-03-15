'use client';

import React from 'react';
import { useFilterStore } from '@/store/useFilterStore';
import { MADHAB_COLORS, MADHAB_LABELS } from '@/lib/constants';
import { MadhabId } from '@/lib/types';

const ALL_MADHABS: MadhabId[] = ['hanafi', 'shafii', 'maliki', 'hanbali'];

export default function MadhabFilter() {
    const { activeMadhabs, toggleMadhab, setAllActive } = useFilterStore();
    const allActive = activeMadhabs.length === ALL_MADHABS.length;

    return (
        <div className="madhab-filter" role="group" aria-label="Rechtsschul-Filter">
            <button
                onClick={setAllActive}
                className={`madhab-filter-btn ${allActive ? 'active' : ''}`}
                style={allActive ? { borderColor: '#c9a84c', color: '#c9a84c' } : {}}
            >
                Alle
            </button>
            {ALL_MADHABS.map((madhab) => {
                const isActive = activeMadhabs.includes(madhab);
                const color = MADHAB_COLORS[madhab];
                return (
                    <button
                        key={madhab}
                        onClick={() => toggleMadhab(madhab)}
                        className={`madhab-filter-btn ${isActive ? 'active' : ''}`}
                        style={
                            isActive
                                ? { borderColor: color, color: color, backgroundColor: `${color}15` }
                                : {}
                        }
                        aria-pressed={isActive}
                    >
                        <span
                            className="madhab-dot"
                            style={{ backgroundColor: isActive ? color : '#8899aa' }}
                        />
                        {MADHAB_LABELS[madhab].de}
                    </button>
                );
            })}
        </div>
    );
}
