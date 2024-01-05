"use client"

import useAuth from "@/lib/auth-hook"
import { usePathname } from "next/navigation"

interface RouteGaurdProps {
    children: React.ReactNode
}

const SELF_PATHS = ["/settings"]
const PRIVATE_PATHS = ["/"]

export default function RouteGaurd({ children }: RouteGaurdProps) {
    const {} = useAuth()
    const pathname = usePathname()
    return <>{children}</>
}
