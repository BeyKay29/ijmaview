'use client';

import React from 'react';
import { Category } from '@/lib/types';
import CategoryCard from './CategoryCard';

interface CategoryGridProps {
    categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
    return (
        <section className="category-grid-section">
            <h2 className="section-title">Kategorien</h2>
            <p className="section-subtitle">
                Durchsuche Fiqh-Fragen nach Themengebiet
            </p>
            <div className="category-grid">
                {categories.map((cat, i) => (
                    <CategoryCard key={cat.id} category={cat} index={i} />
                ))}
            </div>
        </section>
    );
}
