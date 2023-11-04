import { config } from "@/config/config";

export const GithubLogin = () => {
	return (
		<a href={config.GITHUB.githubOAuthURL} onClick={() => localStorage.setItem("auth-by", "GITHUB")} className="w-10">
			<img src="/github-mark.png" alt="Github" />
		</a>
	);
};
