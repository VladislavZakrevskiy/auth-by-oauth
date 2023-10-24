import { FC, ReactNode } from "react";
import cn from "classnames";

interface ButtonProps {
	className: string;
	children: ReactNode;
	onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ className, onClick, children }) => {
	return (
		<button className={cn("", [className])} onClick={onClick}>
			{children}
		</button>
	);
};
