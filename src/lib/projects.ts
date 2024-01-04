"use server"

import prisma from "./prisma"

export async function deleteProject(id: string) {
    //   return axios.delete(`/api/projects/${id}`);
    const project = await prisma.project.delete({
        where: {
            id: id,
        },
    })
    console.log(project)
}
export async function togglePrivate(id: string, curr: boolean) {
    const project = await prisma.project.update({
        where: {
            id: id,
        },
        data: {
            private: {
                set: !curr,
            },
        },
    })
    console.log(project)
}
