import axios from "axios";
import { useEffect } from "react";
import { useStore } from "@/stores/UserStore";

export const OAuthSuccess = () => {
	const setUser = useStore.use.setUser();
	const authBy = localStorage.getItem('auth-by')
	const user = useStore.use.user();

	const handleLogin = async (code: string) => {
		const res = await axios.get("http://localhost:3000/me", {
			headers: {
				authorization: `Bearer ${code}`,
				"auth-by": authBy,
			},
		});

		setUser(res.data);
		console.log(res);
		localStorage.removeItem('auth-by')
	};

	const handleGitHubCallback = () => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const code = urlParams.get("code");

		if (code) {
			handleLogin(code);
		}
	};

	useEffect(() => {
		handleGitHubCallback();
	}, []);

	return <div>{JSON.stringify(user || "")}</div>;
};
