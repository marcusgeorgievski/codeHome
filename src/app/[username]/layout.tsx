import UserHeader from "@/components/user/user-header";
import prisma from "@/lib/prisma";

interface UserPageProps {
	children: React.ReactNode;
	params: { username: string };
}

export default async function UserPage({
	params: { username },
	children,
}: UserPageProps) {
	const user = await prisma.user.findUnique({
		where: {
			username,
		},
	});

	if (!user) {
		throw new Error("User not found");
	}

	return (
		<div className="p-4 md:p-8">
			<UserHeader user={user} />
		</div>
	);
}
