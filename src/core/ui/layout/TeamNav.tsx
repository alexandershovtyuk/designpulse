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
              className={`font-semibold px-5 py-2 rounded-full transition-colors ${
                activeTeam === team
                  ? " text-white bg-indigo-500"
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
