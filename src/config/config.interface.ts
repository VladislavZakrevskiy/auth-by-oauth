export interface Google {
    GOOGLE_CLIENT_ID: string
}

export interface Github {
	GITHUB_CLIENT_ID: string;
	githubOAuthURL: string;
}

export interface Vk {
	VK_CLIENT_ID: string;
	vkOAuthURL: string;
}

export interface Config {
	GOOGLE: Google;
	GITHUB: Github;
	VK: Vk;
	REDIRECT_URL: string;
}
