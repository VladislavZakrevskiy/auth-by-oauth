import { configureAuth } from "react-query-auth";

import { Spinner } from "@/components/Elements/Spinner";
import {
	loginWithEmailAndPassword,
	getUser,
	registerWithEmailAndPassword,
	UserResponse,
	LoginCredentialsDTO,
	RegisterCredentialsDTO,
	AuthUser,
} from "@/features/auth";
import { Storage } from "@/utils/Storage";

async function handleUserResponse(data: UserResponse) {
	const { jwt, user } = data;
	Storage.setToken(jwt);
	return user;
}

async function userFn() {
	if (Storage.getToken()) {
		const data = await getUser();
		return data;
	}
	return null;
}

async function loginFn(data: LoginCredentialsDTO) {
	const response = await loginWithEmailAndPassword(data);
	const user = await handleUserResponse(response);
	return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
	const response = await registerWithEmailAndPassword(data);
	const user = await handleUserResponse(response);
	return user;
}

async function logoutFn() {
	Storage.clearToken();
	window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
	userFn,
	loginFn,
	registerFn,
	logoutFn,
	LoaderComponent() {
		return (
			<div className="w-screen h-screen flex justify-center items-center">
				<Spinner size="xl" />
			</div>
		);
	},
};

export const { AuthLoader, useLogin, useLogout, useRegister, useUser } = configureAuth<
	AuthUser | null,
	unknown,
	LoginCredentialsDTO,
	RegisterCredentialsDTO
>(authConfig);
