import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
	to: string;
	children: ReactNode;
}

export const Link: FC<LinkProps> = ({ to, children }) => {
	return <NavLink to={to}>{children}</NavLink>;
};
