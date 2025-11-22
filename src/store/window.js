import { create } from 'zustand';
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '@/constants';

const useWindowStore = create((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set((state) => {
        const newWindows = { ...state.windows };
        if (newWindows[windowKey]) {
            newWindows[windowKey] = {
                ...newWindows[windowKey],
                isOpen: true,
                zIndex: state.nextZIndex,
                data: data ?? newWindows[windowKey].data
            };
            return { windows: newWindows, nextZIndex: state.nextZIndex + 1 };
        }
        return state;
    }),

    closeWindow: (windowKey) => set((state) => {
        const newWindows = { ...state.windows };
        if (newWindows[windowKey]) {
            newWindows[windowKey] = {
                ...newWindows[windowKey],
                isOpen: false,
                zIndex: INITIAL_Z_INDEX,
                data: null
            };
            return { windows: newWindows };
        }
        return state;
    }),

    focusWindow: (windowKey) => set((state) => {
        const newWindows = { ...state.windows };
        if (newWindows[windowKey]) {
            newWindows[windowKey] = {
                ...newWindows[windowKey],
                zIndex: state.nextZIndex
            };
            return { windows: newWindows, nextZIndex: state.nextZIndex + 1 };
        }
        return state;
    }),
}));

export default useWindowStore;
