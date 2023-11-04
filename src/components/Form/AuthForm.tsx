import { FC, useState } from "react";
import { Card, Typography, Input, Checkbox, Button, Alert } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { GithubLogin } from "@/features/auth/components/GithubLogin";
import { VKLogin } from "@/features/auth/components/VKLogin";
import { GoogleLogin } from "@/features/auth/components/GoogleLogin";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";

export type AuthInputs = {
	name: string;
	email: string;
	password: string;
};

interface AuthFormProps {
	onSubmit: SubmitHandler<AuthInputs>;
	type?: "login" | "register";
}

const ErrorAlert: FC<{
	children:
		| FieldError
		| (Record<string, Partial<{ type: string | number; message: string }>> &
				Partial<{ type: string | number; message: string }>);
}> = (props) => {
	const [isOpen, setIsOpen] = useState(true);
	const { ref, type } = props.children;

	return (
		<Alert open={isOpen} onClose={() => setIsOpen(false)} color="red">
			Error "{ref?.name}": {type}
		</Alert>
	);
};

export const AuthForm: FC<AuthFormProps> = ({ onSubmit, type }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthInputs>();

	return (
		<>
			<Card color="transparent" shadow={false}>
				<Typography variant="h4" color="blue-gray">
					{type === "login" ? "Sign Up" : "Register"}
				</Typography>
				<Typography color="gray" className="mt-1 font-normal">
					Nice to meet you! Enter your details to {type === "login" ? "sign up" : "register"}.
				</Typography>
				<form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-1 flex flex-col gap-6">
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Your Name
						</Typography>
						<Input
							{...register("name", { required: true, min: 2, max: 32 })}
							crossOrigin={1}
							size="lg"
							placeholder="name@mail.com"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Your Email
						</Typography>
						<Input
							{...register("email", { required: true, min: 2, max: 32 })}
							crossOrigin={1}
							size="lg"
							placeholder="name@mail.com"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
						<Typography variant="h6" color="blue-gray" className="-mb-3">
							Password
						</Typography>
						<Input
							{...register("password", { required: true, min: 2, max: 32 })}
							crossOrigin={1}
							type="password"
							size="lg"
							placeholder="********"
							className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
							labelProps={{
								className: "before:content-none after:content-none",
							}}
						/>
					</div>
					<Checkbox
						crossOrigin={1}
						label={
							<Typography variant="small" color="gray" className="flex items-center font-normal">
								I agree the
								<a href="#" className="font-medium transition-colors hover:text-gray-900">
									&nbsp;Terms and Conditions
								</a>
							</Typography>
						}
						containerProps={{ className: "-ml-2.5" }}
					/>
					<Button type="submit" className="mt-6" fullWidth>
						{type === "login" ? "signup" : "register"}
					</Button>
					<Typography color="gray" className="mt-4 text-center font-normal">
						{type === "login" ? "Haven't account?" : "Already have an account?"}{" "}
						<Link to={type === "login" ? "/auth/register" : "/auth/login"} className="font-medium text-gray-900">
							{type === "login" ? "Register" : "Sign Up"}
						</Link>
					</Typography>
					<div className="mt-6 flex justify-center items-center gap-5">
						<GithubLogin />
						<VKLogin />
						<GoogleLogin />
					</div>
				</form>
			</Card>
			<div className="absolute w-full bottom-0 left-0 right-0 grid gap-2">
				{Object.entries(errors).map(([, error]) => (
					<ErrorAlert>{error}</ErrorAlert>
				))}
			</div>
		</>
	);
};
