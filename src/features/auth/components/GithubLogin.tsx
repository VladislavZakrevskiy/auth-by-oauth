import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, githubOAuthURL } from "@/config/githubAuth";
import axios from "axios";
import React from "react";
import { useStore } from "@/stores/UserStore";
import { User } from "@/types/User";

export const GithubLogin = () => {
	const addUser = useStore.use.setUser();

	const handleLogin = async (code: string) => {
		try {
			// Exchange the code for an access token
			const data = await axios.post<void, { access_token: string }>(
				"https://github.com/login/oauth/access_token",
				undefined,
				{
					headers: { "Content-Type": "application/json" },
					params: {
						client_id: GITHUB_CLIENT_ID,
						client_secret: GITHUB_CLIENT_SECRET,
						code,
					},
				},
			);

			const accessToken = data.access_token;

			// Fetch the user's GitHub profile
			const res = await axios.get<void, { data: User }>("https://api.github.com/user", {
				headers: { "Content-Type": `Bearer ${accessToken}`, "User-Agent": "zustand-reactQueryV5-tailwind-bulletproof" },
			});

			addUser(res.data);
			console.log(res);
		} catch (error) {
			console.error(error);
		}
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
