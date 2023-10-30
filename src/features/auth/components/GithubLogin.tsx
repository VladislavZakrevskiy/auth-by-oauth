import { config } from "@/config/config";
import { useStore } from "@/stores/UserStore";

export const GithubLogin = () => {
	const setAuthedBy = useStore.use.setAuthedBy();

	return (
		<a href={config.GITHUB.githubOAuthURL} onClick={() => setAuthedBy("GITHUB")} className="w-10">
			<img src="/github-mark.png" alt="Github" />
		</a>
	);
};
