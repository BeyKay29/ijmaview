'use client';

import React from 'react';

interface ArabicTextProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ArabicText({
    children,
    className = '',
    size = 'md',
}: ArabicTextProps) {
    const sizeClasses = {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
    };

    return (
        <span
            dir="rtl"
            lang="ar"
            className={`font-amiri ${sizeClasses[size]} ${className}`}
            style={{ fontFamily: 'Amiri, serif' }}
        >
            {children}
        </span>
    );
}
