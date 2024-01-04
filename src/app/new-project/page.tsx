"use client"
import axios from "axios"
import Link from "next/link"
import ProjectForm from "./project-form"
import useAuth from "@/lib/auth-hook"
import { useRouter } from "next/navigation"

export default function NewProject() {
    const router = useRouter()

    const {
        loading,
        unauthenticated,
        toSignIn,
        id: userId,
        username,
    } = useAuth()

    if (loading) return "Loading..."
    if (unauthenticated) toSignIn()

    // onSubmit
    function onSubmit(values: any) {
        // console.log(values, id)
        axios
            .post("/api/projects", { ...values, userId, private: false })
            .then((res) => {
                console.log("res:", res)
                router.push(`/${username}/projects`)
                router.refresh()
            })
            .catch((err) => {
                console.log("error:", err)
            })
    }

    return (
        <div>
            <ProjectForm onSubmit={onSubmit} />
        </div>
    )
}
