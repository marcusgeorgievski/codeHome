"use client";
import { cn } from "@/lib/utils";
import { PiUserFocusThin } from "react-icons/pi";
import { useSession } from "next-auth/react";
import { useSidebar } from "@/state/store";
import { signIn } from "next-auth/react";
import { ProfileDropdown } from "./profile-dropdown";
import { PiSpinnerLight } from "react-icons/pi";
import { SidebarItem } from "./sidebar-item";

export default function SidebarProfile() {
	const { status } = useSession();

	if (status === "loading") {
		return (
			<SidebarItem>
				<div className="flex items-center gap-2 pl-1.5">
					<PiSpinnerLight className="animate-spin text-xl" />
					Fetching profile
				</div>
			</SidebarItem>
		);
	}

	if (status === "unauthenticated") {
		return <SidebarLogin />;
	}

	return <ProfileDropdown />;
}

function SidebarLogin() {
	const { isOpen } = useSidebar();

	return (
		<div
			onClick={() => signIn()}
			className={cn(
				"flex items-center gap-4  px-1 py-1 transition-all rounded-md  font-semibold",
				"overflow-hidden hover:overflow-visible  transition-all group flex-grow-0 hover:bg-accent cursor-pointer"
			)}
		>
			<div className="text-xl shrink-0">
				<PiUserFocusThin />
			</div>
			<div
				className={cn(
					"transition-all whitespace-nowrap w-[130px] truncate overflow-hidden text-muted-foreground ",
					{
						"group-hover:bg-accent/60 group-hover:w-auto group-hover:overflow-visible px-2 rounded":
							!isOpen,
					}
				)}
			>
				Sign in
			</div>
		</div>
	);
}
