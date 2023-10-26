import { GoogleLogin } from "../components/GoogleLogin";
import { GithubLogin } from "../components/GithubLogin";

export const RegisterPage = () => {
	return (
		<div>
			<GoogleLogin />
			<GithubLogin />
		</div>
	);
};
