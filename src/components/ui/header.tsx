import Link from "next/link";
import ProfileCard from "../profile/profile-card";

interface HeaderProps {
	//children: React.ReactNode;
}

export default function Header() {
	return (
		<div className="flex justify-between">
			<ProfileCard />
		</div>
	);
}
