import { Spinner } from "@/components/Elements/Spinner";

export const LoadingHandler = () => {
	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<Spinner size="xl" />
		</div>
	);
};
