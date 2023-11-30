import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Sidebar from "@/components/ui/sidebar/sidebar";
import MainLayout from "@/components/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "codeHome",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Providers>
					<Sidebar />
					<MainLayout>{children}</MainLayout>
				</Providers>
			</body>
		</html>
	);
}
