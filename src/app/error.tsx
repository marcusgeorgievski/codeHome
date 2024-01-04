"use client";
import { PiBugThin } from "react-icons/pi";

interface ErrorProps {
	error: {
		message: string;
	};
}

export default function Error({ error: { message } }: ErrorProps) {
	console.log(message);
	return (
		<div className="flex justify-center items-center mt-[18%] text-xl text-muted-foreground">
			<PiBugThin className="mr-2 text-2xl -translate-y-2 rotate-12" />
			Page could not be found
			<PiBugThin className="ml-2 text-lg translate-y-2 -rotate-6" />
		</div>
	);
}
