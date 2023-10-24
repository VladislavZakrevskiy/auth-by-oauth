import { Link } from "@/components/Elements/Link";

export const NotFoundHandler = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<p className="text-5xl font-bold text-red-600">Ошибка 404: Page not found</p>
			<Link to="/app">Перейти на главную страницу</Link>
		</div>
	);
};
