export const dynamic = "force-dynamic" // defaults to auto
import prisma from "@/lib/prisma"

export async function POST(request: Request) {
    const body = await request.json()

    console.log(body)
    const newProject = await prisma.project.create({
        data: {
            ...body,
        },
    })

    return Response.json({ newProject })
}
