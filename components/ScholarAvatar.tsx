'use client';

import React from 'react';
import { MADHAB_COLORS } from '@/lib/constants';
import { MadhabId } from '@/lib/types';

interface ScholarAvatarProps {
    initials: string;
    madhab: MadhabId;
    size?: 'sm' | 'md' | 'lg';
    name?: string;
}

export default function ScholarAvatar({
    initials,
    madhab,
    size = 'md',
    name,
}: ScholarAvatarProps) {
    const color = MADHAB_COLORS[madhab];
    const sizeClasses = {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-14 h-14 text-base',
    };

    return (
        <div
            className={`scholar-avatar ${sizeClasses[size]}`}
            style={{
                backgroundColor: `${color}20`,
                borderColor: `${color}60`,
                color: color,
            }}
            title={name}
            aria-label={name ? `Gelehrter: ${name}` : undefined}
        >
            {initials}
        </div>
    );
}
