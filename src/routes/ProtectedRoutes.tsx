import { LoadingHandler } from "@/features/handlers";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { lazyImport } from "@/utils/lazyImport";

// import { Spinner } from "@/components/Elements";
// import { MainLayout } from "@/components/Layout";

const { EditorPage } = lazyImport(() => import("@/features/editor"), "EditorPage");

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
		path: "/",
		element: <App />,
		children: [
			// { path: "/discussions/*", element: <DiscussionsRoutes /> },
			// { path: "/users", element: <Users /> },
			{ path: "editor", element: <EditorPage /> },
			{ path: "*", element: <Navigate to="." /> },
		],
	},
];
