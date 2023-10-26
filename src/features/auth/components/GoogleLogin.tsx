import { useStore } from "@/stores/UserStore";
import { GoogleLogin as OAuthGoogleLogin, CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
			axios
				.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleResponse.credential}`, {
					headers: {
						Authorization: `Bearer ${googleResponse.credential}`,
						Accept: "application/json",
					},
				})
				.then((res) => {
                    console.log(res.data)
					setUser(res.data);
				})
				.catch((err) => console.log(err));
		}
	}, [googleResponse]);

	const onFailure = useCallback(() => {
		console.log("failure");
	}, []);

	return <OAuthGoogleLogin onSuccess={onSuccess} onError={onFailure} />;
};
