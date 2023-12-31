"use client"
import { useSidebar } from "@/state/store"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/shadcn/ui/separator"
import { ArrowRightLeftIcon } from "lucide-react"
import { FaGithub } from "react-icons/fa6"
import { SidebarItem } from "./sidebar-item"
import CodeHome from "../codehome"
import ThemeToggle from "../theme"
import { CgPathIntersect } from "react-icons/cg"

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebar()

    const sidebarRef = useRef<HTMLElement>(null)

    // Close sidebar when clicking outside of it for small screens
    useEffect(() => {
        function handleClickOutside(e: any) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                window.innerWidth < 768
            ) {
                toggleSidebar()
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen, toggleSidebar])

    return (
        <aside
            ref={sidebarRef}
            className={cn(
                "fixed top-0 bottom-0  left-0 border-r transition-all z-40 py-4 bg-background",
                {
                    "md:w-[53px] md:px-2.5 w-0 -translate-x-4 md:translate-x-0":
                        !isOpen,
                    "w-[210px] px-4 ": isOpen,
                }
            )}
        >
            <div
                className={cn(
                    "transition-all h-full   flex flex-col  relative"
                )}
            >
                {/* TOGGLE BUTTON */}

                <button
                    onClick={toggleSidebar}
                    className="bg-accent md:px-1.5 py-0 rounded absolute md:-right-11 -top-2s  transition-all -right-14 px-2 "
                >
                    <ArrowRightLeftIcon className="w-3 text-muted-foreground" />
                </button>

                {/* HEADER */}

                <SidebarHeader />

                <Separator className="my-2 opacity-90" />

                {/* PROFILE */}

                <div className="flex flex-col text-sm flex-shrink-0">
                    <SidebarProfile />
                </div>

                <Separator className="my-1 opacity-0" />

                <div className="flex flex-col gap-2 h-full justify-between text-sm">
                    {/* MAIN */}

                    <div className="flex flex-col gap-2">
                        <SidebarMain />
                    </div>

                    {/* FOOTER */}

                    <div className="flex flex-col gap-2 ">
                        <SidebarFooter />
                    </div>
                </div>
            </div>
        </aside>
    )
}

import { PiAtomThin, PiFingerprintThin } from "react-icons/pi"

function SidebarHeader() {
    return (
        <Link
            href="/"
            className="self-start translate-x-1 flex justify-between w-[90%] items-center overflow-hidden"
        >
            <div className="flex items-center gap-3">
                <CgPathIntersect className="text-2xl flex-shrink-0 " />

                <CodeHome className="text-xl font-bold  line-clamp-1 flex-shrink-0" />
            </div>
        </Link>
    )
}

import {
    PiFolderNotchOpenThin,
    PiTextTLight,
    PiFadersThin,
    PiFileDashedThin,
    PiLinkThin,
    PiLockKeyOpenThin,
    PiLockKeyThin,
    PiQuotesThin,
    PiUsersFourThin,
    PiBrainThin,
    PiPathThin,
} from "react-icons/pi"

import SidebarProfile from "./sidebar-profile"
import { useEffect, useRef } from "react"

import { useSession } from "next-auth/react"

function SidebarMain() {
    const { data } = useSession()
    const username = data?.user?.username

    return (
        <>
            <SidebarItem
                icon={<PiFolderNotchOpenThin />}
                href={username ? `/${username}/projects` : "/signin"}
            >
                Projects
            </SidebarItem>
            <SidebarItem
                icon={<PiTextTLight />}
                href={username ? `/${username}/blog` : "/signin"}
            >
                Blog
            </SidebarItem>
            <Separator className="my-0 opacity-90" />
            <SidebarItem icon={<PiPathThin />} href="/explore">
                Explore
            </SidebarItem>
            <SidebarItem icon={<PiUsersFourThin />} href="/users">
                Users
            </SidebarItem>
            <SidebarItem icon={<PiBrainThin />} href="/about">
                About
            </SidebarItem>
        </>
    )
}

function SidebarFooter() {
    const { isOpen } = useSidebar()

    return (
        <div
            className={cn("flex flex-col gap-2", {
                "overflow-hidden md:overflow-visible": !isOpen,
            })}
        >
            <SidebarItem
                icon={<FaGithub />}
                href="https://github.com/marcusgeorgievski/codehome"
            >
                GitHub
            </SidebarItem>

            <div
                className={cn({
                    "-translate-x-3 md:translate-x-0 transition-transform":
                        !isOpen,
                })}
            >
                <ThemeToggle />
            </div>
        </div>
    )
}
