"use client";
import { useSidebar } from "@/state/store";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/shadcn/ui/separator";
import { ArrowRightLeftIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { SidebarItem } from "./sidebar-item";
import CodeHome from "../codehome";
import ThemeToggle from "../theme";
import { CgPathIntersect } from "react-icons/cg";

export default function Sidebar() {
	const { isOpen, toggleSidebar } = useSidebar();

	return (
		<aside
			className={cn(
				"fixed top-0 bottom-0  left-0 border-r transition-all z-40 py-4 bg-background",
				{
					"md:w-[53px] md:px-2.5 w-0 -translate-x-4 md:translate-x-0":
						!isOpen,
					"w-[210px] px-4 ": isOpen,
				}
			)}
		>
			<div
				className={cn(
					"transition-all h-full   flex flex-col  relative"
				)}
			>
				{/* TOGGLE BUTTON */}

				<button
					onClick={toggleSidebar}
					className="bg-slate-200 md:px-1.5 py-0 rounded absolute md:-right-11 -top-2s  transition-all -right-14 px-2 "
				>
					<ArrowRightLeftIcon className="w-3 text-slate-600" />
				</button>

				{/* HEADER */}

				<SidebarHeader />

				<Separator className="my-2 opacity-90" />

				{/* PROFILE */}

				<div className="flex flex-col text-sm flex-shrink-0">
					<SidebarProfile />
				</div>

				<Separator className="my-2 opacity-90" />

				<div className="flex flex-col gap-2 h-full justify-between text-sm">
					{/* MAIN */}

					<div className="flex flex-col gap-2">
						<SidebarMain />
					</div>

					{/* FOOTER */}

					<div className="flex flex-col gap-2 ">
						<SidebarFooter />
					</div>
				</div>
			</div>
		</aside>
	);
}

import { PiAtomThin, PiFingerprintThin } from "react-icons/pi";

function SidebarHeader() {
	return (
		<Link
			href="/"
			className="self-start translate-x-1 flex justify-between w-[90%] items-center overflow-hidden"
		>
			<div className="flex items-center gap-3">
				<CgPathIntersect className="text-2xl flex-shrink-0 " />

				<CodeHome className="text-xl font-bold  line-clamp-1 flex-shrink-0" />
			</div>
		</Link>
	);
}

import {
	PiFolderNotchOpenThin,
	PiTextTLight,
	PiFadersThin,
	PiFileDashedThin,
	PiLinkThin,
	PiLockKeyOpenThin,
	PiLockKeyThin,
	PiQuotesThin,
	PiUsersThin,
} from "react-icons/pi";
import SidebarProfile from "./sidebar-profile";

function SidebarMain() {
	return (
		<>
			<SidebarItem icon={<PiFadersThin />} href="/">
				Explore
			</SidebarItem>
			<SidebarItem icon={<PiFolderNotchOpenThin />} href="/n">
				Projects
			</SidebarItem>
			<SidebarItem icon={<PiTextTLight />} href="a">
				Blog
			</SidebarItem>
			<SidebarItem icon={<PiFadersThin />} href="/c">
				Settings
			</SidebarItem>
			<SidebarItem icon={<PiFileDashedThin />} href="/c">
				New Blog
			</SidebarItem>
			<SidebarItem icon={<PiLinkThin />} href="/c">
				Link
			</SidebarItem>
			<SidebarItem icon={<PiLockKeyOpenThin />} href="/c">
				Unlock
			</SidebarItem>
			<SidebarItem icon={<PiLockKeyThin />} href="/c">
				Lock
			</SidebarItem>
			<SidebarItem icon={<PiQuotesThin />} href="/c">
				Quote
			</SidebarItem>
			<SidebarItem icon={<PiUsersThin />} href="/c">
				Peeps
			</SidebarItem>
		</>
	);
}
function SidebarFooter() {
	return (
		<>
			<SidebarItem
				icon={<FaGithub />}
				href="https://github.com/marcusgeorgievski/codehome"
			>
				GitHub
			</SidebarItem>

			<SidebarItem>
				<ThemeToggle />
			</SidebarItem>
		</>
	);
}
