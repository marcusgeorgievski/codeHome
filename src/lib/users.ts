"use server"
import axios from "axios"
import prisma from "./prisma"
import { redirect } from "next/navigation"

export async function updateUser(id: string, data: any) {
    const user = await prisma.user.update({
        where: { id },
        data: {
            ...data,
        },
    })
    redirect(`/${user.username}/settings`)
}

export async function getUser(id: string) {
    const user = await prisma.user.findUnique({
        where: { id },
    })
    console.log(user)
    return user
}
