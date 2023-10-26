import { useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { protectedRoutes } from "./ProtectedRoutes";
import { publicRoutes } from "./PublicRoutes";
import { FC, useEffect } from "react";
import { useStore } from "@/stores/UserStore";

export const AppRouter: FC = () => {
	const getUser = useStore.use.getUser();
	const user = useStore.use.user();
	useEffect(() => {
		getUser();
	}, []);

	const commonRoutes = [{ path: "/", element: <Landing /> }];
	const routes = user ? protectedRoutes : publicRoutes;
	const element = useRoutes([...routes, ...commonRoutes]);
	return <>{element}</>;
};
