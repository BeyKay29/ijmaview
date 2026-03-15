import { create } from 'zustand';
import { BookmarkItem } from '@/lib/types';

interface BookmarkState {
    bookmarks: BookmarkItem[];
    addBookmark: (item: BookmarkItem) => void;
    removeBookmark: (questionId: string) => void;
    isBookmarked: (questionId: string) => boolean;
    loadBookmarks: () => void;
}

export const useBookmarkStore = create<BookmarkState>((set, get) => ({
    bookmarks: [],
    addBookmark: (item: BookmarkItem) => {
        const current = get().bookmarks;
        if (!current.find((b) => b.questionId === item.questionId)) {
            const updated = [...current, item];
            set({ bookmarks: updated });
            if (typeof window !== 'undefined') {
                localStorage.setItem('ijmaview-bookmarks', JSON.stringify(updated));
            }
        }
    },
    removeBookmark: (questionId: string) => {
        const updated = get().bookmarks.filter((b) => b.questionId !== questionId);
        set({ bookmarks: updated });
        if (typeof window !== 'undefined') {
            localStorage.setItem('ijmaview-bookmarks', JSON.stringify(updated));
        }
    },
    isBookmarked: (questionId: string) => {
        return get().bookmarks.some((b) => b.questionId === questionId);
    },
    loadBookmarks: () => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('ijmaview-bookmarks');
            if (stored) {
                try {
                    set({ bookmarks: JSON.parse(stored) });
                } catch {
                    set({ bookmarks: [] });
                }
            }
        }
    },
}));
