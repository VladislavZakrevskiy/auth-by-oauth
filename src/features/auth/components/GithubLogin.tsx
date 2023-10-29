import { config } from "@/config/config";
import { useStore } from "@/stores/UserStore";

export const GithubLogin = () => {
	const setAuthedBy = useStore.use.setAuthedBy();

	return (
		<div>
			<a href={config.GITHUB.githubOAuthURL} onClick={() => setAuthedBy("GITHUB")}>
				Sign in with GitHub
			</a>
		</div>
	);
};
