import HomePage from "@/pages/HomePage";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
	return (
		<Routes>
			{["/", "/home", "/index"].map((route) => (
				<Route path={route} element={<HomePage />} />
			))}
		</Routes>
	);
}
