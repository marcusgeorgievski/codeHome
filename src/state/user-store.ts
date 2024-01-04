import { create } from "zustand";

// Current profile

type ProfileState = {
	username: string;
	setUsername: (name: string | null) => void;
};

export const useProfile = create<ProfileState>((set, get) => ({
	username: "",
	setUsername: (username) => set({ username: username || "" }),
}));

// Sidebar state

// type SidebarState = {
// 	isOpen: boolean;
// 	openSidebar: () => void;
// 	closeSidebar: () => void;
// 	toggleSidebar: () => void;
// 	setSidebar: (state: boolean) => void;
// };

// export const useSidebar = create<SidebarState>((set, get) => ({
// 	isOpen: false,
// 	openSidebar: () => set({ isOpen: true }),
// 	closeSidebar: () => set({ isOpen: false }),
// 	toggleSidebar: () => set({ isOpen: !get().isOpen }),
// 	setSidebar: (state) => set({ isOpen: state }),
// }));
