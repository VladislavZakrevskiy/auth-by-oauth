import { useGoogleLogin } from "@react-oauth/google";
import { config } from "@/config/config";

export const GoogleLogin = () => {
	const login = useGoogleLogin({
		flow: "auth-code",
		redirect_uri: config.REDIRECT_URL + "?provider=GOOGLE",
		onSuccess: () => localStorage.setItem("auth-by", "GOOGLE"),
		ux_mode: "redirect",
	});

	return (
		<a onClick={() => login()} className="w-10">
			<img alt="G" src="/Google.png" />
		</a>
	);
};
