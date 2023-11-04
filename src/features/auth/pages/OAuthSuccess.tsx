import { useEffect } from "react";
import { LoadingHandler } from "@/features/handlers";
import { useUserActions } from "../model/slice/UserSlice";
import { useGetMeMutation } from "../model/api/AuthApi";

export const OAuthSuccess = () => {
	const [getMe, { isError, isLoading, data: user }] = useGetMeMutation();
	const { setUser } = useUserActions();

	const handleLogin = async (code: string, authBy: string) => {
		const user = await getMe({ code, authBy }).unwrap();

		if (user) {
			setUser(user);
			console.log(user);
		}
	};

	const handleGitHubCallback = () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const code = urlParams.get("code");
		const authBy = urlParams.get("provider");

		if (code && authBy) {
			handleLogin(code, authBy);
		}
	};

	useEffect(() => {
		handleGitHubCallback();
	}, []);

	if (isLoading) {
		return <LoadingHandler />;
	}

	if (isError) {
		throw new Error("error");
	}

	return <div>{JSON.stringify(user || "")}</div>;
};
