import { GoogleLogin } from "../components/GoogleLogin";
import { GithubLogin } from "../components/GithubLogin";

export const LoginPage = () => {
	return (
		<div>
			<GoogleLogin />
			<GithubLogin />
		</div>
	);
};
