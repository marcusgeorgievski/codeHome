"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/state/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
	icon?: React.ReactNode;
	href?: string;
	children?: React.ReactNode;
}
export function SidebarItem({ icon, href, children }: SidebarItemProps) {
	const { isOpen } = useSidebar();
	const pathname = usePathname();

	if (!href)
		return (
			<div
				className={cn(
					"flex items-center gap-4 text-muted-foreground px-0 py-1 transition-all rounded-md hover:text-foreground",
					{
						"justify-start": !icon,
					},
					"overflow-hidden hover:overflow-visible hover:gap-5 transition-all group"
				)}
			>
				{/* <div className="text-xl">{icon}</div> */}
				<div
					className={cn(
						"font-medium transition-all whitespace-nowrap group-hover:bg-accent/60 px-0 rounded"
					)}
				>
					{children}
				</div>
			</div>
		);

	return (
		<Link
			href={href}
			target={href.startsWith("http") ? "_blank" : ""}
			className={cn(
				"flex items-center gap-4 text-muted-foreground px-1.5 py-1 transition-all rounded-md ",
				{
					"bg-primary/10 text-primary font-semibold":
						pathname.endsWith(href),

					"hover:bg-accent/60 hover:text-foreground rounded":
						!pathname.endsWith(href),
				},
				"overflow-hidden hover:overflow-visible hover:gap-5 transition-all group"
			)}
		>
			<div className="text-xl">{icon}</div>
			<div
				className={cn("font-medium transition-all whitespace-nowrap", {
					"group-hover:bg-primary/10 px-2 rounded":
						!isOpen && pathname.endsWith(href),
					"group-hover:bg-accent/90 px-2 rounded":
						!isOpen && !pathname.endsWith(href),
				})}
			>
				{children}
			</div>
		</Link>
	);
}
