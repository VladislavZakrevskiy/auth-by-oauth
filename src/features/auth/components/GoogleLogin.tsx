import { GoogleLogin as OAuthGoogleLogin, CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/stores/UserStore";

export const GoogleLogin = () => {
	const nav = useNavigate();
	const [googleResponse, setGoogleResponse] = useState<CredentialResponse | null>(null);
	const setUser = useStore.use.setUser();

	const onSuccess = useCallback(
		(res: CredentialResponse) => {
			setGoogleResponse(res);
			console.log(res);
			nav("/");
		},
		[nav],
	);

	useEffect(() => {
		if (googleResponse) {
			const fetchUser = async () => {
				const res = await axios.get("http://localhost:3000/me", {
					headers: {
						authorization: `Bearer ${googleResponse.credential}`,
						"auth-by": "GOOGLE",
					},
				});

				setUser(res.data);
				console.log(res);
			};

			fetchUser();
		}
	}, [googleResponse]);

	const onFailure = useCallback(() => {
		console.log("failure");
	}, []);

	return <OAuthGoogleLogin onSuccess={onSuccess} onError={onFailure} />;
};
