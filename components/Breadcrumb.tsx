'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                    <Link href="/" className="breadcrumb-link">
                        <Home size={14} />
                        <span>Startseite</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                        <ChevronRight size={14} className="breadcrumb-separator" />
                        {item.href ? (
                            <Link href={item.href} className="breadcrumb-link">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="breadcrumb-current">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
