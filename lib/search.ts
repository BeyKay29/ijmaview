import Fuse from 'fuse.js';
import { Question } from './types';
import { getAllQuestions } from './data';

let fuseInstance: Fuse<Question> | null = null;

export function getSearchInstance(): Fuse<Question> {
    if (!fuseInstance) {
        const questions = getAllQuestions();
        fuseInstance = new Fuse(questions, {
            keys: [
                { name: 'question_de', weight: 0.4 },
                { name: 'search_aliases', weight: 0.3 },
                { name: 'category', weight: 0.15 },
                { name: 'subcategory', weight: 0.15 },
            ],
            threshold: 0.4,
            includeScore: true,
            minMatchCharLength: 2,
        });
    }
    return fuseInstance;
}

export function searchQuestions(
    query: string
): { item: Question; score: number }[] {
    const fuse = getSearchInstance();
    const results = fuse.search(query);
    return results.map((r) => ({
        item: r.item,
        score: r.score ?? 1,
    }));
}
