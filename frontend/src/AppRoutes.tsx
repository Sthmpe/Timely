import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Hompage from "./pages/Hompage";

/**
 * AppRoutes Component
 * 
 * This component defines the routes for the application using React Router.
 * It sets up routes for different pages of the application and renders corresponding components.
 * 
 * Components Used:
 * - Routes: Component from react-router-dom for defining route configurations.
 * - Route: Component for defining individual routes.
 * - Navigate: Component for programmatic navigation.
 * - Layout: Component for the overall layout structure of the application.
 * 
 * @returns {JSX.Element} AppRoutes component JSX
 */

const AppRoutes = () => {
	return(
		<Routes>
			<Route path="/" element={
				<Layout>
					<Hompage />
				</Layout>} />
			<Route path="/user_profile" element={<span>USER PROFILE PAGE</span>} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AppRoutes;
