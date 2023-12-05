"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [themeNow, setThemeNow] = React.useState("light");
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    if (themeNow === "dark") {
      setThemeNow("light");
    } else {
      setThemeNow("dark");
    }

    return setTheme(themeNow);
  };
  React.useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <div>
      <div>
        <Button variant="outline" size="icon" onClick={() => toggleTheme()}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </div>
  );
}
