import { Config } from "./config.interface";

export const config: Config = {
	GITHUB: {
		GITHUB_CLIENT_ID: "6e64e4d2262c7d60e2c3",
		githubOAuthURL: `https://github.com/login/oauth/authorize?client_id=6e64e4d2262c7d60e2c3&scope=user`,
	},
	GOOGLE: {
		GOOGLE_CLIENT_ID: "1078198255352-hqtsnuiooo5r9p07vc4grgngfb272q1c.apps.googleusercontent.com",
	},
	VK: {
		VK_CLIENT_ID: "51780892",
		vkOAuthURL: `https://oauth.vk.com/authorize?client_id=51780892&display=page&redirect_uri=http://localhost:5173/oauth/success`,
	},
	REDIRECT_URL: "http://localhost:5173/oauth/success",
};
