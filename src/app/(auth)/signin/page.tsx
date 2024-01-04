"use client"

import { Button } from "@/components/shadcn/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card"
import { AiFillGithub } from "react-icons/ai"
import useAuth from "@/lib/auth-hook"

export default function SignInPage() {
    const { username, signIn, statusRedirect } = useAuth()

    statusRedirect("authenticated", `/${username}`)

    return (
        <div className="fixed left-0 top-0 right-0 bottom-0 bg-background flex justify-center items-center">
            <Card className="w-[300px]">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <p className="text-muted-foreground">
                        Connect your GitHub Account
                    </p>
                </CardHeader>
                <CardContent>
                    <Button
                        variant="secondary"
                        onClick={() => signIn("github")}
                        className="w-full"
                    >
                        <AiFillGithub className="text-xl mr-2" />
                        GitHub Sign In
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
