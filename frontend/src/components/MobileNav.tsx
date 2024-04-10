import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

/**
 * MobileNav Component
 * 
 * This component represents the mobile navigation menu of the website. 
 * It typically includes a trigger button to open the navigation menu, a title, and navigation options.
 * 
 * Components Used:
 * - Menu: Icon component from Lucide React for the navigation menu trigger.
 * - Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger: Custom UI components for a sliding sheet navigation menu.
 * - Separator: Custom UI component for a visual separator.
 * - Button: Custom UI component for clickable elements.
 * 
 * @returns {JSX.Element} MobileNav component JSX
 */

const MobileNav = () => {
  return(
	<Sheet>
		<SheetTrigger>
			<Menu className="text-orange-500" />
		</SheetTrigger>
		<SheetContent className="space-y-3">
			<SheetTitle>
				<span>Welcome to TimeLY.com</span>
			</SheetTitle>
			<Separator />
			<SheetDescription className="flex">
				<Button className="flex-1 font-bold bg-orange-500">Log In</Button>
			</SheetDescription>
		</SheetContent>
	</Sheet>
  );
};

export default MobileNav;