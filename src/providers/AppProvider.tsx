import { ErrorHandler, LoadingHandler } from "@/features/handlers";
import { Suspense, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "@/config/googleAuth";
import { Provider } from "react-redux";
import { createReduxStore } from "@/stores/store";

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const store = createReduxStore();

	return (
		<Suspense fallback={<LoadingHandler />}>
			<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
				<ErrorHandler>
					<Provider store={store}>
						<BrowserRouter>{children}</BrowserRouter>
					</Provider>
				</ErrorHandler>
			</GoogleOAuthProvider>
		</Suspense>
	);
};
