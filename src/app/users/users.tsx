"use client"
import { Input } from "@/components/shadcn/ui/input"
import UserCard from "@/components/profile/profile-card"
import prisma from "@/lib/prisma"
import { User } from "@prisma/client"
import Link from "next/link"
import { useState } from "react"

export default function Users({ users }: { users: User[] }) {
    const [search, setSearch] = useState("")

    return (
        <div className="max-w-4xl px-4 py-8 bg-green-50/0 mx-auto">
            <div className="flex gap-4 sm:gap-8 flex-col sm:flex-row  ">
                <h1 className="text-3xl font-bold">Users</h1>

                {/* SEARCH */}

                <div className="flex items-center gap-2  w-full">
                    <Input
                        className="max-w-sm"
                        placeholder="Search..."
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                    />
                    <button>
                        <PiMagnifyingGlassThin />
                    </button>
                </div>
            </div>

            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 ">
                {users
                    .filter((user) => {
                        if (search === "") {
                            return user
                        } else if (
                            user
                                .username!.toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return user
                        }
                    })
                    .map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
            </div>
        </div>
    )
}

import { PiMagnifyingGlassThin } from "react-icons/pi"
