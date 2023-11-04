import { useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { protectedRoutes } from "./ProtectedRoutes";
import { publicRoutes } from "./PublicRoutes";
import { FC } from "react";
import { useStore } from "@/stores/UserStore";

export const AppRouter: FC = () => {
	const user = useStore.use.user();

	const commonRoutes = [{ path: "/", element: <Landing /> }];
	const routes = user ? protectedRoutes : publicRoutes;
	const element = useRoutes([...routes, ...commonRoutes]);
	return <>{element}</>;
};
