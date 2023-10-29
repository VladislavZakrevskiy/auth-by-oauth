import { useGoogleLogin } from "@react-oauth/google";
import { config } from "@/config/config";
import { useStore } from "@/stores/UserStore";

export const GoogleLogin = () => {
	const setAuthedBy = useStore.use.setAuthedBy();

	const login = useGoogleLogin({
		flow: "auth-code",
		redirect_uri: config.REDIRECT_URL,
		onSuccess: () => setAuthedBy("GOOGLE"),
	});

	return <a onClick={() => login()}>Sign in with Google 🚀 </a>;
};
