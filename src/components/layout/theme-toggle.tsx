"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true,
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (isServer) {
    return (
      <Button variant="ghost" size="icon" className="h-11 w-11" disabled>
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-11 w-11"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
