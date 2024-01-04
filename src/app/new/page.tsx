"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import useAuth from "@/lib/user"

const formSchema = z.object({
    name: z.string().min(1).max(50),
    description: z.string().min(0).max(300),
    status: z.boolean(),
    private: z.boolean(),
})

export default function NewProject({ project }: any) {
    const { loading, unauthenticated, toSignIn } = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: project?.name || "",
            description: project?.description || "",
            status: project?.status || "inProgress",
            private: project?.private || false,
        },
    })

    if (loading) return "Loading..."
    if (unauthenticated) toSignIn()

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="mb-4 text-2xl font-bold">Create Project</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FormInput form={form} name="name" label="Name" />
                            <FormInput
                                form={form}
                                name="description"
                                label="Description"
                            />
                            <FormSelect
                                form={form}
                                name="status"
                                label="Status"
                                items={[
                                    {
                                        value: "inProgress",
                                        label: "In Progress",
                                    },
                                    { value: "complete", label: "Complete" },
                                ]}
                            />
                        </CardContent>
                        <CardFooter className="justify-end">
                            <Button
                                type="submit"
                                className="flex-1 md:flex-none"
                            >
                                Create
                            </Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </div>
    )
}

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card"
import { Button } from "@/components/shadcn/ui/button"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn/ui/form"
import { Input } from "@/components/shadcn/ui/input"
import FormInput from "@/components/forms/form-input"
import FormSelect from "@/components/forms/form-select"
