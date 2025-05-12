import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const cardVariants = cva(
	"relative rounded-none bg-background p-4 transition-all [border-image:url('/border.svg')_6_6_6_6] [border-image-repeat:stretch_repeat] [border-image-width:24px] border-8",
	{
		variants: {
			variant: {
				default: "bg-transparent text-white",
				primary: "bg-[#4a90e2] text-white",
				success: "bg-[#4ae24a] text-white",
				danger: "bg-[#e24a4a] text-white",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface CardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, variant, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(cardVariants({ variant, className }))}
			{...props}
		/>
	),
);
Card.displayName = "Card";

export { Card, cardVariants };
