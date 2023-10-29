import { FC, ReactNode } from "react";
import cn from "classnames";

type PaddingGradation = "0" | "1" | "2" | "4" | "8" | "16" | "32" | "64";
type MarginGradation = "0" | "1" | "2" | "4" | "8" | "16" | "32" | "64";

interface CardProps {
	children: ReactNode;
	p?: PaddingGradation;
	m?: MarginGradation;
	max?: boolean;
	className?: string;
}

export const Card: FC<CardProps> = ({ children, className, p = "2", m = "0", max = false }) => {
	const paddingMapper: Record<PaddingGradation, string> = {
		"0": "p-0",
		"1": "p-1",
		"2": "p-2",
		"4": "p-4",
		"8": "p-5",
		"16": "p-7",
		"32": "p-8",
		"64": "p-9",
	};

	const marginMapper: Record<MarginGradation, string> = {
		"0": "m-0",
		"1": "m-1",
		"2": "m-2",
		"4": "m-4",
		"8": "m-5",
		"16": "m-7",
		"32": "m-8",
		"64": "m-9",
	};

	return (
		<div
			className={cn("border border-blue-500 rounded", marginMapper[m], paddingMapper[p], { "w-full": max }, className)}
		>
			{children}
		</div>
	);
};
