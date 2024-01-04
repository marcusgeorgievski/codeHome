import { Button } from "@/components/shadcn/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/shadcn/ui/command";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/shadcn/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormSelectProps {
	//children: React.ReactNode;
}

export default function FormSelect({
	form,
	name,
	label,
	description,
	placeholder,
	children,
	items,
}: any) {
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>{label}</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant="outline"
									role="combobox"
									className={cn(
										"w-[200px] justify-between",
										!field.value && "text-muted-foreground"
									)}
								>
									{field.value
										? items.find(
												(item: any) =>
													item.value === field.value
										  )?.label
										: "Select language"}
									<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput placeholder="Search language..." />
								<CommandEmpty>No language found.</CommandEmpty>
								<CommandGroup>
									{items.map((item: any) => (
										<CommandItem
											value={item.label}
											key={item.value}
											onSelect={() => {
												form.setValue(
													"language",
													item.value
												);
											}}
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4",
													item.value === field.value
														? "opacity-100"
														: "opacity-0"
												)}
											/>
											{item.label}
										</CommandItem>
									))}
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
