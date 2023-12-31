interface CodeHomeProps {
	className?: string;
	beta?: boolean;
	betaClass?: string;
}

export default function CodeHome({
	className,
	betaClass,
	beta,
}: CodeHomeProps) {
	return (
		<div
			className={`text-primary text-2xl font-bold whitespace-nowrap ${className}`}
		>
			codeHome{" "}
			{beta && (
				<span
					className={
						"text-xs bg-accent text-accent-foreground rounded-lg px-2 " +
						betaClass
					}
				>
					beta
				</span>
			)}
		</div>
	);
}
