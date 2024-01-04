"use client"
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function Providers({ children }: Props) {
    const queryClient = new QueryClient()

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
        >
            <QueryClientProvider client={queryClient}>
                <AuthProvider>{children}</AuthProvider>
            </QueryClientProvider>
        </ThemeProvider>
    )
}

// Auth Provider

interface Props {
    children: React.ReactNode
}

export function AuthProvider({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>
}

// Next Themes

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
