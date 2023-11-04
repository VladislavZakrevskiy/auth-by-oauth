import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const NotFoundHandler = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<Typography className="!text-5xl !font-bold !text-red-600">Ошибка 404: Page not found</Typography>
			<Typography>
				<Link to="/">Перейти на главную страницу</Link>
			</Typography>
		</div>
	);
};
