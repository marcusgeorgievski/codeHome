import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import { ProfileForm } from "./profile-form";
import Link from "next/link";

export default async function DashboardPage() {
	const user = await getServerSession();

	console.log(user?.user?.name);

	return (
		<div className="px-10 py-6 mx-auto grid grid-cols-[150px,auto]">
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
			<div>
				<div className="flex gap-4 pb-4 border-b">
					<Image
						src={user?.user?.image!}
						alt="Picture of the author"
						height={80}
						width={80}
						className="rounded-lg"
					/>
					<div className="flex flex-col justify-end">
						<p className="font-medium text-xl">
							{user?.user?.name}
						</p>
						<p className="text-muted-foreground">
							{user?.user?.email}
						</p>
					</div>
				</div>

				<div className="py-8">
					<ProfileForm />
				</div>
			</div>
		</div>
	);
}
