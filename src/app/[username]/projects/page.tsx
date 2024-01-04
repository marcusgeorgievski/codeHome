import Link from "next/link"
import prisma from "@/lib/prisma"
import { Project } from "@prisma/client"
import ProjectCard from "@/components/project/project-card"
import { PiFolderNotchPlus } from "react-icons/pi"

interface UserProjectPageProps {
    //children: React.ReactNode;

    params: { username: string }
}

export default async function UserProjectPage({
    params: { username },
}: UserProjectPageProps) {
    // Get username
    const user = await prisma.user.findUnique({
        where: {
            username,
        },
        include: {
            projects: true,
        },
    })
    const projects = user?.projects || []

    return (
        <div>
            <div>
                <Link
                    href={`/new-project`}
                    className="mb-4 border rounded-lg px-4 py-1.5 bg-primary text-white inline-flex items-center gap-2 text-sm"
                >
                    <PiFolderNotchPlus className="text-lg" />
                    Create Project
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        username={user?.username!}
                    />
                ))}
            </div>
        </div>
    )
}
