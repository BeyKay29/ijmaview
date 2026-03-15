'use client';

import React from 'react';
import { EvidenceItem } from '@/lib/types';
import EvidenceNode from './EvidenceNode';

interface EvidenceChainProps {
    evidence: EvidenceItem[];
}

export default function EvidenceChain({ evidence }: EvidenceChainProps) {
    return (
        <div className="evidence-chain">
            <h4 className="evidence-chain-title">Beweiskette</h4>
            <div className="evidence-timeline">
                {evidence.map((item, index) => (
                    <EvidenceNode key={index} evidence={item} index={index} />
                ))}
            </div>
        </div>
    );
}
