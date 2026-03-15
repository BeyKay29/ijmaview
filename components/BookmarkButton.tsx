'use client';

import React from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useBookmarkStore } from '@/store/useBookmarkStore';
import { Question } from '@/lib/types';

interface BookmarkButtonProps {
    question: Question;
}

export default function BookmarkButton({ question }: BookmarkButtonProps) {
    const { isBookmarked, addBookmark, removeBookmark } = useBookmarkStore();
    const bookmarked = isBookmarked(question.id);

    const handleToggle = () => {
        if (bookmarked) {
            removeBookmark(question.id);
        } else {
            addBookmark({
                questionId: question.id,
                slug: question.slug,
                question_de: question.question_de,
                category: question.category,
                addedAt: new Date().toISOString(),
            });
        }
    };

    return (
        <button
            onClick={handleToggle}
            className={`bookmark-btn ${bookmarked ? 'bookmarked' : ''}`}
            aria-label={bookmarked ? 'Lesezeichen entfernen' : 'Lesezeichen setzen'}
            title={bookmarked ? 'Lesezeichen entfernen' : 'Merken'}
        >
            {bookmarked ? (
                <BookmarkCheck size={20} className="text-[#c9a84c]" />
            ) : (
                <Bookmark size={20} />
            )}
            <span>{bookmarked ? 'Gemerkt' : 'Merken'}</span>
        </button>
    );
}
