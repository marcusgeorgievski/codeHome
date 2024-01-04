"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import useAuth from "@/lib/auth-hook"
import { UserSettings } from "./user-settings"
import { getUser, updateUser } from "@/lib/users"

interface SettingPageProps {
    //children: React.ReactNode;
}

export default function SettingPage({ params: { username } }: any) {
    const { status, id } = useAuth()
    const router = useRouter()

    if (status === "loading") {
        return <>Loading</>
    }

    if (status !== "authenticated" || username !== username) {
        router.back()
    }

    return (
        <div className="max-w-lg mx-auto">
            <UserSettings />
        </div>
    )
}
