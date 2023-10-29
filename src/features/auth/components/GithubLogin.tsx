import { githubOAuthURL } from "@/config/githubAuth";
import axios from "axios";
import { useEffect } from "react";
import { useStore } from "@/stores/UserStore";

export const GithubLogin = () => {
	const setUser = useStore.use.setUser();

	const handleLogin = async (code: string) => {
		const res = await axios.get("http://localhost:3000/me", {
			headers: {
				authorization: `Bearer ${code}`,
				"auth-by": "GITHUB",
			},
		});

		setUser(res.data);
		console.log(res);
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

	return (
		<div>
			<a href={githubOAuthURL}>Sign in with GitHub</a>
		</div>
	);
};
