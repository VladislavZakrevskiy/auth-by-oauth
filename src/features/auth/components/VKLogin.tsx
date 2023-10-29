import { config } from "@/config/config";
import { useStore } from "@/stores/UserStore";

export const VKLogin = () => {
	const setAuthedBy = useStore.use.setAuthedBy();

	return (
		<div>
			<a href={config.VK.vkOAuthURL} onClick={() => setAuthedBy("VK")}>
				Sign in with GitHub
			</a>
		</div>
	);
};
