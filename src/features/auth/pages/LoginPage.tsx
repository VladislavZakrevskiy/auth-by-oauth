import { AuthForm, AuthInputs } from "@/components/Form/AuthForm";
import { SubmitHandler } from "react-hook-form";
import { useUserActions } from "../model/slice/UserSlice";
import { LoginRegBody, useLoginMutation } from "../model/api/AuthApi";
import { isUser } from "@/types/User";
import { LoadingHandler } from "@/features/handlers";

export const LoginPage = () => {
	const [login, { isSuccess, isError, isLoading }] = useLoginMutation();
	const { setUser } = useUserActions();

	const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
		const FIO = data.name.split(" ");

		const regData: LoginRegBody = {
			email: data.email,
			password: data.password,
			username: data.name,
			firstName: FIO[1],
			middleName: FIO[2],
			lastName: FIO[0],
		};

		const user = await login(regData);
		if (isUser(user) && isSuccess) {
			setUser(user);
		}
	};

	if (isLoading) {
		return <LoadingHandler />;
	}

	if (isError) {
		throw new Error("auth error");
	}
	return (
		<div className="w-full h-full min-h-[100vh] flex justify-center items-center">
			<AuthForm onSubmit={onSubmit} type="login" />
		</div>
	);
};
