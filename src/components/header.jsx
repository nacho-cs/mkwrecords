import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Github } from "lucide-react";

export function Header({ sha }) {
  const items = [
    {
      text: "Records",
      href: "/records",
    },
  ];
  sha = sha.slice(0, 8);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/90">
      <div className="container flex items-center h-12 gap-5 justify-between">
        <a href="/">MKW Records</a>
        <NavigationMenu>
          <NavigationMenuList>
            {items.map(item => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={navigationMenuTriggerStyle()}>
                  {item.text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://github.com/nacho-cs/mkwrecords"
                className={navigationMenuTriggerStyle()}>
                <Github />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={`https://github.com/nacho-cs/mkwrecords/commit/${sha}`}
                className={navigationMenuTriggerStyle()}>
                {sha}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
