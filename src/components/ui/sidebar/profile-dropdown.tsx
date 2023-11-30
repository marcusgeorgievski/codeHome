"use client";
import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/shadcn/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import SidebarProfile from "./sidebar-profile";
import { PiUserFocusThin } from "react-icons/pi";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/state/store";

export function ProfileDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div>
					<SidebarCard />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start" side="left">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="mr-2 h-4 w-4" />
						<span>Dashboard</span>
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CreditCard className="mr-2 h-4 w-4" />
						<span>Billing</span>
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Keyboard className="mr-2 h-4 w-4" />
						<span>Keyboard shortcuts</span>
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Users className="mr-2 h-4 w-4" />
						<span>Team</span>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<UserPlus className="mr-2 h-4 w-4" />
							<span>Invite users</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>
									<Mail className="mr-2 h-4 w-4" />
									<span>Email</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<MessageSquare className="mr-2 h-4 w-4" />
									<span>Message</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<PlusCircle className="mr-2 h-4 w-4" />
									<span>More...</span>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuItem>
						<Plus className="mr-2 h-4 w-4" />
						<span>New Team</span>
						<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut className="mr-2 h-4 w-4" />
					<button onClick={() => signOut()}>Log out</button>
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
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
