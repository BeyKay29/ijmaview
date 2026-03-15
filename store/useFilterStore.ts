import { create } from 'zustand';
import { MadhabId } from '@/lib/types';

interface FilterState {
    activeMadhabs: MadhabId[];
    toggleMadhab: (madhab: MadhabId) => void;
    setAllActive: () => void;
    isActive: (madhab: MadhabId) => boolean;
}

const ALL_MADHABS: MadhabId[] = ['hanafi', 'shafii', 'maliki', 'hanbali'];

export const useFilterStore = create<FilterState>((set, get) => ({
    activeMadhabs: [...ALL_MADHABS],
    toggleMadhab: (madhab: MadhabId) => {
        const current = get().activeMadhabs;
        if (current.includes(madhab)) {
            if (current.length === 1) return;
            set({ activeMadhabs: current.filter((m) => m !== madhab) });
        } else {
            set({ activeMadhabs: [...current, madhab] });
        }
    },
    setAllActive: () => set({ activeMadhabs: [...ALL_MADHABS] }),
    isActive: (madhab: MadhabId) => get().activeMadhabs.includes(madhab),
}));
