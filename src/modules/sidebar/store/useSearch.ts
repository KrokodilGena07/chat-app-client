import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

interface SearchState {
    isFocused: boolean;
    setIsFocused: (b: boolean) => void;
}

export const useSearch = create<SearchState>()(immer(set => ({
    isFocused: false,
    setIsFocused: b => {
        set({isFocused: b});
    }
})));