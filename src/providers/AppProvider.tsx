import { ErrorHandler, LoadingHandler } from "@/features/handlers";
import { Suspense, ReactNode } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "@/lib/reactQuery";

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Suspense fallback={<LoadingHandler />}>
			<ErrorHandler>
				<QueryClientProvider client={queryClient}>
					{process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
					<AuthProvider>
						<BrowserRouter>{children}</BrowserRouter>
					</AuthProvider>
				</QueryClientProvider>
			</ErrorHandler>
		</Suspense>
	);
};
