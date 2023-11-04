import { rtkApi } from "@/stores/rtkInstance";
import { User } from "@/types/User";

export interface LoginRegBody {
	email: string;
	username: string;
	password: string;
	firstName: string;
	middleName: string;
	lastName: string;
}

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.mutation<User, { code: string; authBy: string }>({
			query: (arg) => ({
				url: "/me",
				headers: {
					authorization: `Bearer ${arg.code}`,
					"auth-by": arg.authBy,
				},
			}),
		}),

		login: build.mutation<User, LoginRegBody>({
			query: (arg) => ({
				url: "/login",
				method: "POST",
				body: arg,
			}),
		}),

		signUp: build.mutation<User, LoginRegBody>({
			query: (arg) => ({
				url: "/signup",
				method: "POST",
				body: arg,
			}),
		}),
	}),
});

export const { useGetMeMutation, useLoginMutation, useSignUpMutation } = userApi;
