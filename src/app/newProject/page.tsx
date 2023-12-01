import Link from "next/link";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcn/ui/card";
import { Button } from "@/components/shadcn/ui/button";

export default function NewProject({ project }: any) {
	return (
		<div className="p-4 max-w-4xl mx-auto">
			<h1 className="mb-4 text-2xl font-bold">Create Project</h1>
			<Card>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
				</CardContent>
				<CardFooter className="justify-end">
					<Button className="flex-1 md:flex-none">Create</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
