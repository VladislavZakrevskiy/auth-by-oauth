import { ReactNode, useEffect, useState } from "react";
import { Navbar as MTNavbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/stores/hooks";

const NavItem = ({ children, to }: { children: ReactNode; to: string }) => (
	<Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
		<Link to={to} className="flex items-center hover:text-blue-500 transition-colors">
			{children}
		</Link>
	</Typography>
);

function NavList() {
	const { user } = useAppSelector((state) => state.user);

	if (user) {
		return (
			<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
				<NavItem to="/editor">Editor</NavItem>
			</ul>
		);
	}

	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<NavItem to="/auth/login">Login</NavItem>
			<NavItem to="/auth/register">Register</NavItem>
		</ul>
	);
}

export function Navbar() {
	const [openNav, setOpenNav] = useState(false);

	const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<MTNavbar className="mx-auto max-w-screen-xl px-6 py-3">
			<div className="flex items-center justify-between text-blue-gray-900">
				<Typography as="a" variant="h6" className="mr-4 cursor-pointer py-1.5">
					<Link to="/">Document Worker</Link>
				</Typography>
				<div className="hidden lg:block">
					<NavList />
				</div>
				<IconButton
					variant="text"
					className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<XMarkIcon className="h-6 w-6" strokeWidth={2} />
					) : (
						<Bars3Icon className="h-6 w-6" strokeWidth={2} />
					)}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<NavList />
			</Collapse>
		</MTNavbar>
	);
}
