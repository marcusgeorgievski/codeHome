"use client";
import { useSidebar } from "@/state/store";
import { cn } from "@/lib/utils";
import Breadcrumbs from "./ui/breadcrumbs";
import { Input } from "./shadcn/ui/input";
import { PiWarningThin } from "react-icons/pi";
import { Button } from "./shadcn/ui/button";

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	const { isOpen } = useSidebar();
	return (
		<div
			className={cn("w-full h-full transition-all", {
				"md:pl-[53px]": !isOpen,
				"md:pl-[210px]": isOpen,
			})}
		>
			<div className="border-b h-14 flex items-center pl-12 justify-between pr-4">
				<Breadcrumbs />

				<div className="px-4 py-1.5 bg-yellow-200 text-sm text-yellow-900 font-medium flex items-center rounded border border-yellow-300">
					<PiWarningThin className="mr-2" />
					In development
				</div>
			</div>
			{children}
		</div>
	);
}
