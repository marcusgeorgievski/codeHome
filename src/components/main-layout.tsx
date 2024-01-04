"use client"
import { useRouteHistory, useSidebar } from "@/state/store"
import { cn } from "@/lib/utils"
import Breadcrumbs from "./ui/breadcrumbs"
import {
    PiWarningThin,
    PiFileArrowDownThin,
    PiFileThin,
    PiArrowsLeftRightThin,
} from "react-icons/pi"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    const { isOpen } = useSidebar()

    return (
        <div
            className={cn("w-full h-full transition-all", {
                "md:pl-[53px]": !isOpen,
                "md:pl-[210px]": isOpen,
            })}
        >
            <div className="border-b h-14 flex items-center pl-12 justify-between pr-4">
                <div className="flex items-center gap-6">
                    <Breadcrumbs />
                    {/* <div className="px-4 py-1.5 pl-3 bg-yellow-200 text-sm text-yellow-900 font-medium flex items-center rounded border border-yellow-300">
                        <PiWarningThin className="mr-2" />
                        In development
                    </div> */}
                </div>

                <div className="flex items-center gap-6">
                    <RouteHistoryDropdown />
                </div>
            </div>
            <main className="p-2 py-4 md:p-4 lg:p-8 ">{children}</main>
        </div>
    )
}

function RouteHistoryDropdown() {
    const { routeHistory, addRoute } = useRouteHistory()

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        let fullPath =
            pathname +
            (searchParams.toString().length > 0
                ? "?" + searchParams.toString()
                : "")
        addRoute(fullPath)
    }, [pathname, searchParams])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="relative">
                    <PiArrowsLeftRightThin className="absolute text-xs left-1.5 top-2 ring-0" />
                    <PiFileThin className="text-2xl" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="max-w-[200px] whitespace-nowrap "
            >
                <DropdownMenuLabel asChild>
                    <div className="text-xs bg-primary/10 text-primary py-0  rounded mb-1 h-6 flex items-center">
                        Route History
                    </div>
                </DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                {Array.from(new Set(routeHistory))
                    .slice(0, 5)
                    .map((route, i) => (
                        <DropdownMenuItem
                            asChild
                            key={i}
                            className="font-mono text-[10px] w-[180px] text-ellipsis truncate cursor-pointer"
                        >
                            <Link href={route} className="w-full  h-full">
                                {route}
                            </Link>
                        </DropdownMenuItem>
                    ))}
            </DropdownMenuContent>
        </DropdownMenu>
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
import Link from "next/link"
