"use client";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: Props) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			// disableTransitionOnChange
		>
			<AuthProvider>{children}</AuthProvider>
		</ThemeProvider>
	);
}

// Auth Provider

interface Props {
	children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
	return <SessionProvider>{children}</SessionProvider>;
}

// Next Themes

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
