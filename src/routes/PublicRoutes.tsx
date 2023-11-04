import { OAuthSuccess } from "@/features/auth/pages/OAuthSuccess";
import { lazyImport } from "@/utils/lazyImport";
const { AuthRoutes } = lazyImport(() => import("@/features/auth"), "AuthRoutes");

export const publicRoutes = [
	{
		path: "/auth/*",
		element: <AuthRoutes />,
	},
	{
		path: "/oauth/success",
		element: <OAuthSuccess />,
	},
];
