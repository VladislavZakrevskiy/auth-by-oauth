import { AuthForm } from "@/components/Form/AuthForm";

export const LoginPage = () => {
	return (
		<div className="w-full h-full min-h-[100vh] flex justify-center items-center">
			<AuthForm errors={[]} onSubmit={() => console.log("submit")} type="login" />
		</div>
	);
};
