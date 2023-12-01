"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/shadcn/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import SidebarProfile from "./sidebar-profile";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/state/store";
import Link from "next/link";

export function ProfileDropdown() {
	const { data: session } = useSession();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div>
					<SidebarCard />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-44" align="start" side="left">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link
							href="/dashboard"
							className="flex items-center justify-between w-full "
						>
							<div className="flex items-center">
								<PiUserFocusThin className="mr-2 h-4 w-4" />
								<span>Dashboard</span>
							</div>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link
							href={{
								pathname: `/${session?.user.username}`,
								query: { tab: "projects" },
							}}
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center">
								<PiFolderNotchOpenThin className="mr-2 h-4 w-4" />
								<span>My Projects</span>
							</div>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link
							href="/blog"
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center">
								<PiTextTLight className="mr-2 h-4 w-4" />
								<span>My Blog</span>
							</div>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link
							href="/social"
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center">
								<PiGraphThin className="mr-2 h-4 w-4" />
								<span>Social</span>
							</div>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link
							href="/friends"
							className="flex items-center justify-between w-full"
						>
							<div className="flex items-center">
								<PiUsersThin className="mr-2 h-4 w-4" />
								<span>Friends</span>
							</div>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link
						href="/settings"
						className="flex items-center justify-between w-full"
					>
						<div className="flex items-center">
							<PiFadersThin className="mr-2 h-4 w-4" />
							Settings
						</div>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<button onClick={() => signOut()} className="w-full">
						<LogOut className="mr-2 h-4 w-4" />
						Log out
					</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default function SidebarCard() {
	const { data, status } = useSession();
	const { isOpen } = useSidebar();

	if (status === "loading") {
		return <>Loading...</>;
	}

	return (
		<div
			className={cn(
				"flex items-center gap-4  px-1 py-1 transition-all rounded-md  font-semibold",
				"overflow-hidden hover:overflow-visible  transition-all group flex-grow-0 hover:bg-accent cursor-pointer"
			)}
		>
			<div className="text-xl shrink-0">
				{status === "authenticated" ? (
					<Image
						src={data?.user?.image || "/images/placeholder.png"}
						width={65}
						height={65}
						alt="user image"
						className="w-6 rounded flex-shrink-0 block"
					/>
				) : (
					<>
						<PiUserFocusThin />
					</>
				)}
			</div>
			<div
				className={cn(
					"transition-all whitespace-nowrap w-[130px] truncate overflow-hidden text-muted-foreground text-xs font-normal",
					{
						"group-hover:bg-accent/60 group-hover:w-auto group-hover:overflow-visible px-2 rounded":
							!isOpen,
					}
				)}
			>
				{status === "authenticated"
					? "@ " + data?.user?.name
					: "Sign In"}
			</div>
		</div>
	);
}

import {
	PiFolderNotchOpenThin,
	PiTextTLight,
	PiUserFocusThin,
	PiUsersThin,
	PiGraphThin,
	PiFadersThin,
} from "react-icons/pi";
