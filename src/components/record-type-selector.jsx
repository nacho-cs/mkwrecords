import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { endpoints } from "@/endpoints";

export function RecordTypeSelector({ cup, track }) {
  const unslug = str => {
    return str
      .split("-")
      .map(part => {
        if (part === "sc") {
          return "Shortcut";
        }
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join(" ");
  };

  const categories = Object.keys(endpoints[track]).map(category => {
    return {
      slug: category,
      text: unslug(category),
    };
  });

  return (
    <NavigationMenu>
      <NavigationMenuList className="grid grid-cols-3 md:flex">
        {categories.map(category => (
          <NavigationMenuItem key={category.slug}>
            <NavigationMenuLink
              href={`/records/${cup}/${track}/${category.slug}`}
              className={navigationMenuTriggerStyle()}>
              {category.text}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
