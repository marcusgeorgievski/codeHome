import { User } from "@prisma/client"
import Link from "next/link"
import { Card } from "../shadcn/ui/card"
import Image from "next/image"

interface UserCardProps {
    //children: React.ReactNode;
}

export default function UserCard({ user }: { user: User }) {
    return (
        <Link href={`/${user.username}`}>
            <Card className="p-2 flex gap-2 overflow-hidden hover:bg-accent/50">
                <Image
                    src={user.image!}
                    width={40}
                    height={40}
                    alt="image"
                    className="rounded-full self-center "
                />
                <div className="flex flex-col gap-1 w-full">
                    <div className="text-lg font-bold truncate w-[85%]">
                        <span className="mr-0.5">{"@"}</span>
                        {user.username}
                    </div>
                    <p className="text-sm text-muted-foreground">{user.name}</p>
                </div>
            </Card>
        </Link>
    )
}
