import { useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { protectedRoutes } from "./ProtectedRoutes";
import { publicRoutes } from "./PublicRoutes";
import { FC } from "react";
import { useAppSelector } from "@/stores/hooks";

export const AppRouter: FC = () => {
	const { user } = useAppSelector((state) => state.user);

	const commonRoutes = [{ path: "/", element: <Landing /> }];
	const routes = user ? protectedRoutes : publicRoutes;
	const element = useRoutes([...routes, ...commonRoutes]);
	return <>{element}</>;
};
