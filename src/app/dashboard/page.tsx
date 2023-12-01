"use client";
import prisma from "@/lib/prisma";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ProfileForm } from "../../components/profile/profile-form";
import Link from "next/link";
import UserHeader from "@/components/user/user-header";

export default function DashboardPage() {
	const { data, status } = useSession();

	console.log(data?.user);

	return (
		<div className="px-10 py-6 mx-auto ">
			<UserHeader user={data?.user} />

			<div className="md:grid md:grid-cols-[150px,auto] py-8">
				<AccountTabs />
				<div className="">
					<ProfileForm />
				</div>
			</div>
		</div>
	);
}

function AccountTabs() {
	return (
		<div className="flex flex-col gap-2">
			<Link
				href={{
					query: {
						tab: "account",
					},
				}}
			>
				Account
			</Link>
			<Link
				href={{
					query: {
						tab: "projects",
					},
				}}
			>
				Projects
			</Link>
			<Link
				href={{
					query: {
						tab: "blog",
					},
				}}
			>
				Blog
			</Link>
		</div>
	);
}
