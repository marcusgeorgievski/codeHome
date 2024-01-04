import UserHeader from "@/components/profile/profile-header"
import UserTabs from "@/components/profile/profile-tabs"
import prisma from "@/lib/prisma"

interface UserPageProps {
    children: React.ReactNode
    params: { username: string }
}

export default async function UserPage({
    params: { username },
    children,
}: UserPageProps) {
    const user = await prisma.user.findUnique({
        where: {
            username,
        },
    })

    if (!user) {
        throw new Error("Page not found!")
    }

    return (
        <div>
            <UserHeader user={user} />
            <UserTabs username={username} />
            <div className="mt-8">{children}</div>
        </div>
    )
}
