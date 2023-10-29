import { FC } from "react";
import { Card } from "../Elements/Card";

interface AuthFormProps {
	onSubmit: () => void;
	errors: string[];
}

export const AuthForm: FC<AuthFormProps> = () => {
	return <Card>AuthForm</Card>;
};
