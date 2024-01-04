"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

interface SettingPageProps {
    //children: React.ReactNode;
}

export default function SettingPage({ params: { username } }: any) {
    const { data, status } = useSession()
    const router = useRouter()

    if (status === "loading") {
        return <>Loading</>
    }

    if (status !== "authenticated" || username !== data?.user.username) {
        router.back()
        console.log(data?.user.username, username)
    }
    return <>settings</>
}
