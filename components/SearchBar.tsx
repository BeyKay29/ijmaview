'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { searchQuestions } from '@/lib/search';
import { Question } from '@/lib/types';
import Link from 'next/link';

interface SearchBarProps {
    variant?: 'hero' | 'compact';
    initialQuery?: string;
}

export default function SearchBar({ variant = 'hero', initialQuery = '' }: SearchBarProps) {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState<{ item: Question; score: number }[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [focused, setFocused] = useState(false);
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        if (query.length < 2) {
            setResults([]);
            setShowDropdown(false);
            return;
        }
        debounceRef.current = setTimeout(() => {
            const res = searchQuestions(query);
            setResults(res.slice(0, 6));
            setShowDropdown(true);
        }, 300);
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [query]);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            setShowDropdown(false);
            router.push(`/suche?q=${encodeURIComponent(query.trim())}`);
        }
    };

    const isHero = variant === 'hero';

    return (
        <div ref={wrapperRef} className={`search-wrapper ${isHero ? 'search-hero' : 'search-compact'}`}>
            <form onSubmit={handleSubmit} className="search-form">
                <Search size={isHero ? 22 : 18} className="search-icon" />
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => {
                        setFocused(true);
                        if (results.length > 0) setShowDropdown(true);
                    }}
                    onBlur={() => setFocused(false)}
                    placeholder="Frage eingeben, z.B. Darf ich mit Nagellack beten?"
                    className="search-input"
                    aria-label="Frage suchen"
                    id="main-search"
                />
                {query && (
                    <button
                        type="button"
                        onClick={() => {
                            setQuery('');
                            setResults([]);
                            setShowDropdown(false);
                        }}
                        className="search-clear"
                        aria-label="Suche leeren"
                    >
                        <X size={16} />
                    </button>
                )}
            </form>

            {showDropdown && results.length > 0 && (
                <div className="search-dropdown">
                    {results.map((r) => (
                        <Link
                            key={r.item.id}
                            href={`/frage/${r.item.slug}`}
                            className="search-dropdown-item"
                            onClick={() => setShowDropdown(false)}
                        >
                            <span className="search-dropdown-question">{r.item.question_de}</span>
                            <span className="search-dropdown-category">{r.item.category}</span>
                        </Link>
                    ))}
                    <Link
                        href={`/suche?q=${encodeURIComponent(query)}`}
                        className="search-dropdown-all"
                        onClick={() => setShowDropdown(false)}
                    >
                        Alle Ergebnisse anzeigen →
                    </Link>
                </div>
            )}
        </div>
    );
}
