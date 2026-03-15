'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Position, MadhabId } from '@/lib/types';
import { POSITION_COLORS, MADHAB_LABELS } from '@/lib/constants';

interface ConsensusChartProps {
    positions: Position[];
    activeMadhabs: MadhabId[];
}

export default function ConsensusChart({ positions, activeMadhabs }: ConsensusChartProps) {
    const filteredPositions = positions.filter((p) =>
        p.madhabs.some((m) => activeMadhabs.includes(m))
    );

    const totalMadhabs = filteredPositions.reduce(
        (acc, p) => acc + p.madhabs.filter((m) => activeMadhabs.includes(m)).length,
        0
    );

    const data = filteredPositions.map((p, i) => ({
        name: p.label_de,
        value: p.madhabs.filter((m) => activeMadhabs.includes(m)).length,
        color: POSITION_COLORS[i % POSITION_COLORS.length],
        madhabs: p.madhabs
            .filter((m) => activeMadhabs.includes(m))
            .map((m) => MADHAB_LABELS[m].de)
            .join(', '),
    }));

    const getConsensusLabel = () => {
        if (filteredPositions.length === 0) return 'Keine Daten';
        if (filteredPositions.length === 1) return 'Ijma (Konsens)';
        const maxCount = Math.max(
            ...filteredPositions.map(
                (p) => p.madhabs.filter((m) => activeMadhabs.includes(m)).length
            )
        );
        if (maxCount >= 3) return 'Mehrheitsmeinung';
        return 'Starke Meinungsverschiedenheit';
    };

    const consensusLabel = getConsensusLabel();
    const consensusColor =
        consensusLabel === 'Ijma (Konsens)'
            ? '#4ade80'
            : consensusLabel === 'Mehrheitsmeinung'
                ? '#fbbf24'
                : '#f87171';

    return (
        <div className="consensus-chart-wrapper">
            <div className="consensus-chart-container">
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={80}
                            paddingAngle={3}
                            dataKey="value"
                            animationDuration={800}
                            stroke="transparent"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            content={({ payload }) => {
                                if (!payload || !payload.length) return null;
                                const d = payload[0].payload;
                                const pct = totalMadhabs > 0
                                    ? Math.round((d.value / totalMadhabs) * 100)
                                    : 0;
                                return (
                                    <div className="chart-tooltip">
                                        <p className="chart-tooltip-label">{d.name}</p>
                                        <p className="chart-tooltip-value">{pct}%</p>
                                        <p className="chart-tooltip-madhabs">{d.madhabs}</p>
                                    </div>
                                );
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="consensus-center-label">
                    <span className="consensus-count">{filteredPositions.length}</span>
                    <span className="consensus-text">Positionen</span>
                </div>
            </div>
            <div className="consensus-label-wrapper">
                <span
                    className="consensus-badge"
                    style={{
                        backgroundColor: `${consensusColor}15`,
                        color: consensusColor,
                        borderColor: `${consensusColor}40`,
                    }}
                >
                    {consensusLabel}
                </span>
                <div className="consensus-legend">
                    {data.map((entry, i) => (
                        <div key={i} className="consensus-legend-item">
                            <span
                                className="consensus-legend-dot"
                                style={{ backgroundColor: entry.color }}
                            />
                            <span className="consensus-legend-label">
                                {entry.name} ({entry.madhabs})
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
