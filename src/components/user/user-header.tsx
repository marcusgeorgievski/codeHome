"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import {
	PiFolderNotchOpenThin,
	PiTextTLight,
	PiUserFocusThin,
	PiUsersThin,
	PiGraphThin,
} from "react-icons/pi";

export default function UserHeader({ user }: any) {
	return (
		<div className="flex flex-col">
			<div className="flex gap-4 pb-4">
				<Image
					src={user.image}
					alt="Picture of the author"
					height={80}
					width={80}
					className="rounded-lg"
				/>
				<div className="flex flex-col justify-end">
					<p className="font-medium text-xl">{user.name}</p>
					<p className="text-muted-foreground">
						<span>@</span>
						{user.username}
					</p>
				</div>
			</div>

			<UserTabs />
		</div>
	);
}

import { useSearchParams } from "next/navigation";

function UserTabs() {
	const searchParams = useSearchParams();
	const searchTab = searchParams.get("tab");

	useEffect(() => {
		setTab(searchTab || "about");
	}, [searchTab]);

	const [tab, setTab] = useState(searchTab || "about");

	return (
		<div className="flex justify-center md:justify-start border-b ">
			{tabs.map((item) => (
				<Link
					href={{ query: { tab: item.name.toLocaleLowerCase() } }}
					key={item.name}
					onClick={() => setTab(item.name.toLocaleLowerCase())}
					className={cn(
						"flex items-center  gap-3 px-10 py-1 border-b rounded-t-sm text-center font-medium flex-1 md:flex-none translate-y-[1px]",
						{
							"bg-primary/10 text-primary border-primary":
								tab === item.name.toLocaleLowerCase(),
						},
						{
							"hover:bg-accent/70 hover:text-foreground":
								tab !== item.name.toLocaleLowerCase(),
						}
					)}
				>
					<span>{item.icon}</span>
					{item.name}
				</Link>
			))}
		</div>
	);
}

const tabs = [
	{
		name: "About",
		icon: <PiUserFocusThin />,
	},
	{
		name: "Projects",
		icon: <PiFolderNotchOpenThin />,
	},
	{
		name: "Blog",
		icon: <PiTextTLight />,
	},
];
