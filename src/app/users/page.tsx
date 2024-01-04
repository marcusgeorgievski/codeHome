import prisma from "@/lib/prisma";
import Users from "./users";

export const dynamic = "force-dynamic";

export default async function UsersPage() {
	const users = await prisma.user.findMany();

	return (
		<div className="container">
			<Users users={users} />
		</div>
	);
}
