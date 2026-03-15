'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useBookmarkStore } from '@/store/useBookmarkStore';
import { getQuestionBySlug, getCategoryById } from '@/lib/data';
import { Bookmark, Trash2, ArrowRight } from 'lucide-react';

export default function BookmarksPage() {
    const { bookmarks, removeBookmark, loadBookmarks } = useBookmarkStore();

    useEffect(() => {
        loadBookmarks();
    }, [loadBookmarks]);

    return (
        <div className="page-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h1 className="section-title">Merkliste</h1>
                <p className="section-subtitle">
                    Deine gespeicherten Fragen ({bookmarks.length})
                </p>

                {bookmarks.length > 0 ? (
                    <div className="search-results-grid">
                        {bookmarks.map((bm, i) => {
                            const category = getCategoryById(bm.category);
                            return (
                                <motion.div
                                    key={bm.questionId}
                                    className="question-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                >
                                    <div className="question-card-top">
                                        {category && (
                                            <span className="question-category-badge">
                                                {category.name_de}
                                            </span>
                                        )}
                                        <button
                                            onClick={() => removeBookmark(bm.questionId)}
                                            className="search-clear"
                                            title="Lesezeichen entfernen"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                    <Link
                                        href={`/frage/${bm.slug}`}
                                        className="block"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <h3 className="question-card-title">{bm.question_de}</h3>
                                        <div className="question-card-bottom">
                                            <span style={{ fontSize: '0.75rem', color: '#8899aa' }}>
                                                Gespeichert am{' '}
                                                {new Date(bm.addedAt).toLocaleDateString('de-DE')}
                                            </span>
                                            <ArrowRight size={16} className="question-card-arrow" />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bookmark-empty">
                        <Bookmark size={48} className="text-[#8899aa] mx-auto mb-4" />
                        <h2 className="bookmark-empty-title">Keine Lesezeichen</h2>
                        <p className="bookmark-empty-text">
                            Du hast noch keine Fragen gemerkt. Klicke auf das Lesezeichen-Symbol bei einer Frage, um sie hier zu speichern.
                        </p>
                        <Link href="/" className="bookmark-empty-link">
                            Zur Startseite →
                        </Link>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
