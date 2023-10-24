import { ErrorBoundary } from "react-error-boundary";
import { ReactNode } from "react";
import { Button } from "@/components/Elements/Button";

const ErrorFallback = () => {
	return (
		<div className="text-red-500 w-screen h-screen flex flex-col justify-center items-center" role="alert">
			<h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
			<Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
				Refresh
			</Button>
		</div>
	);
};

export const ErrorHandler = ({ children }: { children: ReactNode }) => {
	return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};
