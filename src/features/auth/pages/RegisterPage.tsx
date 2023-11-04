import { SubmitHandler } from "react-hook-form";
import { AuthForm, AuthInputs } from "../../../components/Form/AuthForm";
import { LoginRegBody, useSignUpMutation } from "../model/api/AuthApi";
import { useUserActions } from "../model/slice/UserSlice";
import { LoadingHandler } from "@/features/handlers";
import { isUser } from "@/types/User";

export const RegisterPage = () => {
	const [signUp, { isSuccess, isError, isLoading }] = useSignUpMutation();
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

		const user = await signUp(regData);
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
			<AuthForm onSubmit={onSubmit} type="register" />
		</div>
	);
};
