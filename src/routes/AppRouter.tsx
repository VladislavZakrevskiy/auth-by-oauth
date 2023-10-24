import { useRoutes } from "react-router-dom";
import { Landing } from "@/features/misc";
import { protectedRoutes } from "./ProtectedRoutes";
import { publicRoutes } from "./PublicRoutes";
import { FC } from "react";
import { useUser } from "@/lib/AuthInit";

export const AppRouter: FC = () => {
	const auth = useUser();
	const commonRoutes = [{ path: "/", element: <Landing /> }];
	const routes = auth ? protectedRoutes : publicRoutes;
	const element = useRoutes([...routes, ...commonRoutes]);
	return <>{element}</>;
};
