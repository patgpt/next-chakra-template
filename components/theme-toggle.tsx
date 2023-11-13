import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        aria-label="Toggle color mode"
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </IconButton>
    </header>
  );
}
