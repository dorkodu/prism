import {
  ActionIcon,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import Showcase from "./Showcase/Showcase";
import { HeaderMegaMenu } from "./Showcase/Header";
import { HeroBullets } from "./Showcase/Hero";
import { FooterLinks } from "./Showcase/Footer";
import { theme } from "@dorkodu/prism";

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
        theme={{ ...theme, colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <HeaderMegaMenu>
          <ActionIcon
            variant="light"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
            size={36}
          >
            {dark ? <IconSun size={24} /> : <IconMoonStars size={24} />}
          </ActionIcon>
        </HeaderMegaMenu>
        <HeroBullets />
        <Showcase />
        <FooterLinks
          data={[
            {
              title: "About",
              links: [
                {
                  label: "Features",
                  link: "#",
                },
                {
                  label: "Pricing",
                  link: "#",
                },
                {
                  label: "Support",
                  link: "#",
                },
                {
                  label: "Forums",
                  link: "#",
                },
              ],
            },
            {
              title: "Project",
              links: [
                {
                  label: "Contribute",
                  link: "#",
                },
                {
                  label: "Media assets",
                  link: "#",
                },
                {
                  label: "Changelog",
                  link: "#",
                },
                {
                  label: "Releases",
                  link: "#",
                },
              ],
            },
            {
              title: "Community",
              links: [
                {
                  label: "Join Discord",
                  link: "#",
                },
                {
                  label: "Follow on Twitter",
                  link: "#",
                },
                {
                  label: "Email newsletter",
                  link: "#",
                },
                {
                  label: "GitHub discussions",
                  link: "#",
                },
              ],
            },
          ]}
        ></FooterLinks>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
