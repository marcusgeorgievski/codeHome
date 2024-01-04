"use client"

import CodeHome from "@/components/ui/codehome"
import useAuth from "@/lib/user"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai"

export default function HomePage() {
    const { status, username, signIn } = useAuth()

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-red-50/0 max-w-[600px] mx-auto px-3 -mt-16">
            <CodeHome beta className="sm:text-5xl text-4xl" />
            <p className="text-center mt-12 text-sm">
                Share and plan projects, write a blog, interact with the
                community.
            </p>

            {status !== "authenticated" ? (
                <button
                    onClick={() => signIn()}
                    className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary/10 text-primary hover:bg-primary/30 transition-colors mt-4"
                >
                    <AiFillGithub />
                    Sign In
                </button>
            ) : (
                <Link
                    href={`/${username}`}
                    className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary/10 text-primary hover:bg-primary/30 transition-colors mt-4"
                >
                    {"->"} Dashboard
                </Link>
            )}
        </div>
    )
}
