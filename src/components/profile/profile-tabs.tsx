"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useSession } from "next-auth/react"

import {
    PiFolderNotchOpenThin,
    PiTextTLight,
    PiUserFocusThin,
    PiGearThin,
} from "react-icons/pi"

export default function UserTabs({ username }: { username: string }) {
    const [tab, setTab] = useState("")

    const { data, status } = useSession()

    const pathname = usePathname()

    useEffect(() => {
        if (pathname.split("/").length === 3) {
            setTab(pathname.split("/")[2])
        } else {
            setTab("about")
        }
    }, [pathname])

    function handleTab(tab: string) {
        if (tab.toLocaleLowerCase() === "about") {
            setTab("")
        }
        setTab(tab.toLocaleLowerCase())
    }

    return (
        <div className="flex justify-center md:justify-start border-none rounded-lg p-2 shadow-none gap-3">
            {tabs.map((item) => (
                <Link
                    href={
                        item.name !== "About"
                            ? `/${username}/${item.name.toLocaleLowerCase()}`
                            : `/${username}`
                    }
                    key={item.name}
                    onClick={() => handleTab(item.name)}
                    className={cn(
                        "flex items-center justify-center rounded gap-2 md:px-6 py-1  text-center font-medium text-[0.9rem] flex-1 md:flex-none text-muted-foreground",
                        {
                            "bg-primary/10 text-primary border-primary ":
                                tab === item.name.toLocaleLowerCase(),
                        },
                        {
                            "hover:bg-accent/70 hover:text-foreground":
                                tab !== item.name.toLocaleLowerCase(),
                        }
                    )}
                >
                    <span>{item.icon}</span>
                    {item.name}
                </Link>
            ))}
            <Link
                href={`/${username}/settings`}
                key={"settings"}
                onClick={() => handleTab("settings")}
                className={cn(
                    "flex items-center justify-center rounded gap-2 md:px-6 py-1  text-center text-[0.9rem] font-medium flex-1 md:flex-none text-muted-foreground",
                    {
                        "bg-primary/10 text-primary border-primary ":
                            tab === "settings",
                    },
                    {
                        "hover:bg-accent/70 hover:text-foreground":
                            tab !== "settings",
                    }
                )}
            >
                <span>
                    <PiGearThin />
                </span>
                Settings
            </Link>
        </div>
    )
}

const tabs = [
    {
        name: "About",
        icon: <PiUserFocusThin />,
    },
    {
        name: "Projects",
        icon: <PiFolderNotchOpenThin />,
    },
    {
        name: "Blog",
        icon: <PiTextTLight />,
    },
]
