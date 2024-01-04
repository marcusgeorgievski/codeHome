import { create } from "zustand";

// Sidebar state

type SidebarState = {
	isOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
	toggleSidebar: () => void;
	setSidebar: (state: boolean) => void;
};

export const useSidebar = create<SidebarState>((set, get) => ({
	isOpen: false,
	openSidebar: () => set({ isOpen: true }),
	closeSidebar: () => set({ isOpen: false }),
	toggleSidebar: () => set({ isOpen: !get().isOpen }),
	setSidebar: (state) => set({ isOpen: state }),
}));

// Route History

type RouteHistoryState = {
	routeHistory: string[];
	addRoute: (route: string) => void;
	getRoute: (i: number) => string;

	position: number;
	goBack: () => void;
	goForward: () => void;
	resetPosition: () => void;
};

export const useRouteHistory = create<RouteHistoryState>((set, get) => ({
	routeHistory: [],
	addRoute: (route) =>
		set((state) => ({
			routeHistory: [route, ...state.routeHistory],
			position: state.position + 1,
		})),
	getRoute: (i) => get().routeHistory[i],

	position: 0,
	goBack: () =>
		set({
			position: get().position - 1,
		}),
	goForward: () =>
		set({
			position: get().position + 1,
		}),
	resetPosition: () =>
		set((state) => ({
			position: state.routeHistory.length - 1,
		})),
}));
