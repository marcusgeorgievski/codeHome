"use client";

interface RouteGaurdProps {
	children: React.ReactNode;
}

const PUBLIC_PATHS = ["/auth/signin", "/auth/signout"];

export default function RouteGaurd({ children }: RouteGaurdProps) {
	return <>{children}</>;
}
