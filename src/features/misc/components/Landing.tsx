import { GithubLogin } from "@/features/auth/components/GithubLogin";
import { GoogleLogin } from "@/features/auth/components/GoogleLogin";
import React from "react";

export const Landing = () => {
	return (
		<div>
			Landing
			<GoogleLogin />
			<GithubLogin />
		</div>
	);
};
