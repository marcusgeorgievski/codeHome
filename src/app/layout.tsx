import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/components/providers"
import Sidebar from "@/components/ui/sidebar/sidebar"
import MainLayout from "@/components/main-layout"

import { CiFaceSmile } from "react-icons/ci"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
}

export const metadata: Metadata = {
    title: "codeHome",
    description: "",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <Sidebar />
                    <MainLayout>
                        <div className="max-w-md rounded py-1 bg-yellow-100 flex gap-3 items-center text-yellow-600 justify-center border border-yellow-500 mx-auto text-xs -mt-6">
                            <CiFaceSmile />
                            in development
                        </div>
                        {children}
                    </MainLayout>
                </Providers>
            </body>
        </html>
    )
}
