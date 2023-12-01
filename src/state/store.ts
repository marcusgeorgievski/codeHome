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
