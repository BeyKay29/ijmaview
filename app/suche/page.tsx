'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { searchQuestions } from '@/lib/search';
import { getAllQuestions, getQuestionsByCategory } from '@/lib/data';
import { Question } from '@/lib/types';
import SearchBar from '@/components/SearchBar';
import QuestionCard from '@/components/QuestionCard';
import { Search } from 'lucide-react';

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const kategorie = searchParams.get('kategorie') || '';
    const [results, setResults] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (query) {
            const res = searchQuestions(query);
            setResults(res.map((r) => r.item));
        } else if (kategorie) {
            setResults(getQuestionsByCategory(kategorie));
        } else {
            setResults(getAllQuestions());
        }
        setLoading(false);
    }, [query, kategorie]);

    const title = query
        ? `Suchergebnisse für „${query}"`
        : kategorie
            ? `Fragen zu ${kategorie}`
            : 'Alle Fragen';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
                <SearchBar variant="hero" initialQuery={query} />
            </div>

            <h1 className="section-title">{title}</h1>
            <p className="section-subtitle">
                {results.length} {results.length === 1 ? 'Ergebnis' : 'Ergebnisse'} gefunden
            </p>

            {results.length > 0 ? (
                <div className="search-results-grid">
                    {results.map((q, i) => (
                        <QuestionCard key={q.id} question={q} index={i} />
                    ))}
                </div>
            ) : (
                <div className="search-empty">
                    <Search size={48} className="text-[#8899aa] mx-auto mb-4" />
                    <h2 className="search-empty-title">Keine Ergebnisse gefunden</h2>
                    <p className="search-empty-text">
                        Versuche es mit anderen Suchbegriffen oder durchsuche die Kategorien auf der Startseite.
                    </p>
                </div>
            )}
        </motion.div>
    );
}

export default function SearchPage() {
    return (
        <div className="page-container">
            <Suspense fallback={<div className="loading-spinner">Suche wird geladen...</div>}>
                <SearchResults />
            </Suspense>
        </div>
    );
}
