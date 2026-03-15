'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import CategoryGrid from '@/components/CategoryGrid';
import { getCategories, getTotalStats, getAllQuestions } from '@/lib/data';
import Link from 'next/link';

const exampleQuestions = [
  { label: 'Berührt Frau den Wudu?', slug: 'beruehrung-frau-wudu' },
  { label: 'Nagellack im Gebet?', slug: 'nagellack-gebet-wudu' },
  { label: 'Hände binden im Gebet?', slug: 'haende-binden-gebet' },
  { label: 'Zahnpasta im Ramadan?', slug: 'zahnpasta-fasten-ramadan' },
  { label: 'Basmala vor Fatiha?', slug: 'basmala-fatiha-laut-leise' },
];

export default function HomePage() {
  const categories = getCategories();
  const stats = getTotalStats();

  return (
    <div className="page-container">
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-bg-pattern" />
        <h1 className="hero-title">
          Ijma<span className="hero-title-accent">View</span>
        </h1>
        <p className="hero-subtitle">
          Islamische Rechtsmeinungen im Überblick – quellenbasiert, neutral, vergleichbar
        </p>
        <div className="hero-search-wrapper">
          <SearchBar variant="hero" />
        </div>
        <div className="hero-tags">
          {exampleQuestions.map((eq) => (
            <Link
              key={eq.slug}
              href={`/frage/${eq.slug}`}
              className="hero-tag"
            >
              {eq.label}
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.div
        className="stats-bar"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="stat-item">
          <div className="stat-number">{stats.questions}</div>
          <div className="stat-label">Fragen</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.opinions}</div>
          <div className="stat-label">Gelehrtenmeinungen</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.sources}</div>
          <div className="stat-label">Quellenbelege</div>
        </div>
      </motion.div>

      <CategoryGrid categories={categories} />
    </div>
  );
}
