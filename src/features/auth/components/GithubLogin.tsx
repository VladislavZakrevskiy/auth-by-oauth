import { githubOAuthURL } from "@/config/githubAuth";
import axios from "axios";
import React from "react";
// import { useStore } from "@/stores/UserStore";

export const GithubLogin = () => {
	// const setUser = useStore.use.setUser();

	const handleLogin = async (code: string) => {
		const res = await axios.get("http://localhost:3000/me", {
			headers: {
				authorization: code,
			},
		});

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

	React.useEffect(() => {
		handleGitHubCallback();
	}, []);

	return (
		<div>
			<a href={githubOAuthURL}>Sign in with GitHub</a>
		</div>
	);
};
