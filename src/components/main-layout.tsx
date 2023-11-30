"use client";
import { useSidebar } from "@/state/store";
import { cn } from "@/lib/utils";
import Breadcrumbs from "./ui/breadcrumbs";

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
				<>hi</>
			</div>
			{children}
		</div>
	);
}
