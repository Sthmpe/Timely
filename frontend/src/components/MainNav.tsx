import { Button } from "./ui/button";

/**
 * MainNav Component
 * 
 * This component represents the main navigation menu of the website. 
 * It typically includes links to different sections or actions, such as logging in.
 * 
 * Components Used:
 * - Button: Custom UI component for clickable elements.
 * 
 * @returns {JSX.Element} MainNav component JSX
 */

const MainNav = () => {
  return(
	<Button
		variant="ghost"
		className="font-bold hover:text-orange-500 hover:bg-white"
	>
		Log In
	</Button>
  );
};

export default MainNav;