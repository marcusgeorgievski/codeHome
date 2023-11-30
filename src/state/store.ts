import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SidebarState = {
	isOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
	toggleSidebar: () => void;
};

export const useSidebar = create<SidebarState>((set) => ({
	isOpen: false,
	openSidebar: () => set({ isOpen: true }),
	closeSidebar: () => set({ isOpen: false }),
	toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

// export const useSidebar = create(
// 	persist<SidebarState>(
// 		(set, get) => ({
// 			isOpen: true,
// 			openSidebar: () => set({ isOpen: true }),
// 			closeSidebar: () => set({ isOpen: false }),
// 			toggleSidebar: () => set({ isOpen: !get().isOpen }),
// 		}),
// 		{
// 			name: "sidebar-storage",
// 			storage: createJSONStorage(() => localStorage),
// 		}
// 	)
// );
