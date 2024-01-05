import prisma from "@/lib/prisma"
import { UserSettings } from "./user-settings"

interface Props {
    params: {
        username: string
    }
}

export default async function SettingPage({ params: { username } }: Props) {
    return (
        <div className="max-w-lg mx-auto">
            {/* <UserSettings user={user} /> */}
        </div>
    )
}
