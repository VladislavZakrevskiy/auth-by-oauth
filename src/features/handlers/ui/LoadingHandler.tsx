import { Spinner } from "@material-tailwind/react";

export const LoadingHandler = () => {
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<Spinner className="h-12 w-12" />
		</div>
	);
};
