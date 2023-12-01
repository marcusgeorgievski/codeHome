import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

// @ts-ignore: Unreachable code error
const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async session({ session }) {
			// Send properties to the client, like an access_token and user id from a provider.

			if (!session || !session.user) return session;

			// Fetch user from db
			const dbUser = await prisma.user.findUnique({
				where: { email: session.user?.email! },
			});

			// Add username + id from db to client session
			if (dbUser) {
				session.user.username = dbUser?.username;
				session.user.id = dbUser?.id;
			}

			return session;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
