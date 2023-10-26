import { ErrorHandler, LoadingHandler } from "@/features/handlers";
import { Suspense, ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "@/lib/reactQuery";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@/config/googleAuth";

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Suspense fallback={<LoadingHandler />}>
			<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
				<ErrorHandler>
					<QueryClientProvider client={queryClient}>
						<BrowserRouter>{children}</BrowserRouter>
					</QueryClientProvider>
				</ErrorHandler>
			</GoogleOAuthProvider>
		</Suspense>
	);
};
