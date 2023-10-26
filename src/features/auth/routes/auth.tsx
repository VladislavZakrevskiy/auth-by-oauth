import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRoutes = () => {
	return (
		<Routes>
			<Route path="/auth//register" element={<RegisterPage />} />
			<Route path="/auth/login" element={<LoginPage />} />
		</Routes>
	);
};
