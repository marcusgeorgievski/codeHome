"use client"

interface RouteGaurdProps {
    children: React.ReactNode
}

const PUBLIC_PATHS = ["/signin"]

export default function RouteGaurd({ children }: RouteGaurdProps) {
    return <>{children}</>
}
