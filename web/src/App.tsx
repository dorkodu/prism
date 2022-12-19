import "./App.css";
import {
  ActionIcon,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useMantineColorScheme,
} from "@mantine/core";
import { theme } from "./theme";
import { useState } from "react";
import { IconMoonStars, IconSun } from "@tabler/icons";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const dark = colorScheme === "dark";

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div>
          <h1>Prism</h1>
          <h2>Dorkodu's UI Components for the WEB</h2>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              ullam aperiam veniam beatae iure quia facere, odio ipsam tempora
              ea.
            </p>
            <ActionIcon
              variant="light"
              color={dark ? "yellow" : "blue"}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              size={36}
            >
              {dark ? <IconSun size={24} /> : <IconMoonStars size={24} />}
            </ActionIcon>
          </div>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
