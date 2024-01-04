"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname, useRouter, redirect } from "next/navigation"

export default function useAuth() {
    const pathname = usePathname()
    const router = useRouter()

    const { data: session, status } = useSession()

    const username = session?.user?.username
    const id = session?.user?.id
    const user = session?.user

    const loading = status === "loading"
    const unauthenticated = status === "unauthenticated"
    const authenticated = status === "authenticated"

    // Redirect to login page if not logged in
    function requireAuth(path?: string, back?: boolean) {
        if (loading) return

        if (!user) {
            redirect(path || "/signin")
        }
    }

    // If a user is on their own page, return true
    function self() {
        return pathname.split("/")[2] === username
    }

    function statusRedirect(statusType: string, path: string) {
        if (status === statusType) {
            redirect(path)
        }
    }

    function toSignIn() {
        redirect("/signin")
    }

    return {
        session,
        status,
        username,
        id,
        user,
        loading,
        unauthenticated,
        authenticated,
        requireAuth,
        self,
        signIn,
        signOut,
        statusRedirect,
        toSignIn,
        redirect,
    }
}
