import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/core/ui/primitives/navigation-menu";

const teams = [
  "All Teams",
  "FinamTrade",
  "Chats",
  "FDS",
  "J2T",
  "Charts",
  "Grades",
  "Limex",
  "AI-screener",
];

export const TeamNav = () => {
  const [activeTeam, setActiveTeam] = useState("FDS");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {teams.map((team) => (
          <NavigationMenuItem key={team}>
            <button
              onClick={() => setActiveTeam(team)}
              className={`text-sm px-3 py-1 rounded-md transition-colors ${
                activeTeam === team
                  ? "font-semibold underline text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {team}
            </button>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
