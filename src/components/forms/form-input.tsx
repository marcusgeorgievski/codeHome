import { Input } from "@/components/shadcn/ui/input";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/shadcn/ui/form";

export default function FormInput({
	form,
	name,
	placeholder,
	description,
	label,
	type = "text",
}: any) {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input placeholder={placeholder} {...field} />
					</FormControl>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
