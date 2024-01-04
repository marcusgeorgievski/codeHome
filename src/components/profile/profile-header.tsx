"use client"
import Image from "next/image"

export default function UserHeader({ user }: any) {
    return (
        <div className="flex flex-col">
            <div className="flex gap-4 pb-4">
                <Image
                    src={user?.image}
                    alt="Picture of the author"
                    height={55}
                    width={55}
                    className="rounded-lg self-start"
                    priority
                />
                <div className="flex flex-col justify-">
                    <p className="font-medium text-xl">{user?.name}</p>
                    <p className="text-muted-foreground">
                        <span>@</span>
                        {user?.username}
                    </p>
                </div>
            </div>
        </div>
    )
}
