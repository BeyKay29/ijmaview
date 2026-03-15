'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/lib/types';
import { getQuestionCountByCategory } from '@/lib/data';
import ArabicText from './ArabicText';
import {
    Droplets, Moon, Sunset, Coins, Compass, Handshake, Heart,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    droplets: <Droplets size={28} />,
    moon: <Moon size={28} />,
    sunset: <Sunset size={28} />,
    coins: <Coins size={28} />,
    compass: <Compass size={28} />,
    handshake: <Handshake size={28} />,
    heart: <Heart size={28} />,
};

interface CategoryCardProps {
    category: Category;
    index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
    const questionCount = getQuestionCountByCategory(category.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
        >
            <Link
                href={`/suche?kategorie=${category.id}`}
                className="category-card group"
                id={`category-${category.id}`}
            >
                <div className="category-card-icon">
                    {iconMap[category.icon] || <Droplets size={28} />}
                </div>
                <div className="category-card-content">
                    <h3 className="category-card-title">{category.name_de}</h3>
                    <ArabicText size="sm" className="category-card-arabic">
                        {category.name_ar}
                    </ArabicText>
                    <p className="category-card-desc">{category.description}</p>
                    <span className="category-card-count">
                        {questionCount} {questionCount === 1 ? 'Frage' : 'Fragen'}
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
