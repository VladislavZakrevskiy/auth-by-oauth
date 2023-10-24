import { LoadingHandler } from "@/features/handlers";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

// import { Spinner } from "@/components/Elements";
// import { MainLayout } from "@/components/Layout";
// import { lazyImport } from "@/utils/lazyImport";

const App = () => {
	return (
		// <MainLayout>
		<Suspense fallback={<LoadingHandler />}>
			<Outlet />
		</Suspense>
		// </MainLayout>
	);
};

export const protectedRoutes = [
	{
		path: "/app",
		element: <App />,
		children: [
			// { path: "/discussions/*", element: <DiscussionsRoutes /> },
			// { path: "/users", element: <Users /> },
			// { path: "/profile", element: <Profile /> },
			{ path: "*", element: <Navigate to="." /> },
		],
	},
];
