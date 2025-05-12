import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
	"relative inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-[#4a4a4a] text-white border-2 border-[#2a2a2a] hover:bg-[#5a5a5a] active:translate-y-0.5 active:shadow-none",
				primary:
					"bg-[#4a90e2] text-white border-2 border-[#2a70b2] hover:bg-[#5aa0f2] active:translate-y-0.5 active:shadow-none",
				success:
					"bg-[#4ae24a] text-white border-2 border-[#2ab22a] hover:bg-[#5af25a] active:translate-y-0.5 active:shadow-none",
				danger:
					"bg-[#e24a4a] text-white border-2 border-[#b22a2a] hover:bg-[#f25a5a] active:translate-y-0.5 active:shadow-none",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-12 px-6 text-base",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
