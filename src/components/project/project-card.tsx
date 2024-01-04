"use client"
import useAuth from "@/lib/auth-hook"
import { Project } from "@prisma/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
    PiDotsThreeBold,
    PiTrashLight,
    PiLockLight,
    PiLockOpenLight,
    PiHeartLight,
} from "react-icons/pi"

export default function ProjectCard({
    project,
    username,
}: {
    project: Project
    username: string
}) {
    const { username: currentUser, self } = useAuth()
    const router = useRouter()

    async function handleDelete() {
        deleteProject(project.id)
        router.refresh()
    }
    async function handlePrivate() {
        togglePrivate(project.id, project.private)
        router.refresh()
    }

    return (
        <div className="border rounded-md px-4 py-2 shadow-sm relative">
            <Link
                href={`/${username}/projects`}
                className="font-bold text-lg hover:underline block"
            >
                {project.name}
            </Link>

            <Link
                href={`/${username}`}
                className="text-xs text-muted-foreground/70 block hover:underline mb-2"
            >
                @{username}
            </Link>
            <p className="text-sm text-foreground/90 leading-6">
                {project.description}
            </p>

            <div className="absolute right-2 top-2">
                <DropdownMenu>
                    <DropdownMenuTrigger className="border rounded bg-accent p-0.5  outline-none">
                        <PiDotsThreeBold className="text-accent-foreground" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <div className="flex justify-between  items-center w-full">
                                Save <PiHeartLight />
                            </div>
                        </DropdownMenuItem>
                        {self && (
                            <>
                                <DropdownMenuItem onClick={handlePrivate}>
                                    <div className="flex justify-between items-center w-full">
                                        {project.private ? (
                                            <>
                                                Private <PiLockLight />
                                            </>
                                        ) : (
                                            <>
                                                Public <PiLockOpenLight />
                                            </>
                                        )}
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={handleDelete}>
                                    <div className="flex justify-between text-red-600 items-center w-full">
                                        Delete <PiTrashLight />
                                    </div>
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu"
import { deleteProject, togglePrivate } from "@/lib/projects"

interface ProjectDropdownProps {
    //children: React.ReactNode;
}

function ProjectDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
