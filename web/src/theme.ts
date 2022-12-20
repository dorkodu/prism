import { MantineTheme, MantineThemeBase } from "@mantine/core";
import { ui, tokens, color } from "./prism";

export const theme = {
  // Defines color scheme for all components, defaults to "light"
  colorScheme: "light",

  // Controls focus ring styles:
  // auto – display focus ring only when user navigates with keyboard (default)
  // always – display focus ring when user navigates with keyboard and mouse
  // never – focus ring is always hidden (not recommended)
  focusRing: "auto",

  // Change focus ring styles
  /* focusRingStyles: {
    styles: ()=>({}),
    resetStyles: ()=>({}),
    inputStyles: ()=>({})
  },
  */

  // Determines whether motion based animations should be disabled for
  // users who prefer to reduce motion in their OS settings
  respectReducedMotion: true,

  // Determines whether elements that do not have pointer cursor by default
  // (checkboxes, radio, native select) should have it
  cursorType: "pointer",

  // Default border-radius used for most elements
  defaultRadius: "xl",

  // White and black colors, defaults to '#fff' and '#000'
  white: ui.color.neutral(100),
  black: ui.color.neutral(15),

  // Object of arrays with 10 colors
  colors: {
    dorkodu: [
      tokens.color.green(95),
      tokens.color.green(88),
      tokens.color.green(80),
      tokens.color.green(76),
      tokens.color.green(67),
      tokens.color.green(60),
      tokens.color.green(50),
      tokens.color.green(45),
      tokens.color.green(40),
      tokens.color.green(35),
    ],
  },

  // Key of theme.colors
  primaryColor: "dorkodu",

  // Default gradient used in components that support `variant="gradient"` (Button, ThemeIcon, etc.)
  defaultGradient: { deg: 60, from: "dorkodu", to: "lime" },

  // font-family and line-height used in most components
  fontFamily: `Rubik, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif`,
  // Monospace font-family, used in Code, Kbd and Prism components
  fontFamilyMonospace: `ui-monospace, "JetBrains Mono", "Cascadia Mono", SFMono-Regular, "Segoe UI Mono", "Roboto Mono", Liberation Mono, Courier New, "Ubuntu Mono",  Menlo, Monaco, Consolas, monospace`,
  lineHeight: 1.25,
  headings: {
    // properties for all headings
    fontWeight: 600,
    fontFamily: "Rubik",

    sizes: {
      h1: { fontSize: 34, lineHeight: 1.3, fontWeight: 800 },
      h2: { fontSize: 28, lineHeight: 1.35, fontWeight: 700 },
      h3: { fontSize: 24, lineHeight: 1.4, fontWeight: 600 },
      h4: { fontSize: 20, lineHeight: 1.45, fontWeight: 600 },
      h5: { fontSize: 18, lineHeight: 1.5, fontWeight: 550 },
      h6: { fontSize: 16, lineHeight: 1.5, fontWeight: 500 },
    },
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },

  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },

  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
  },

  // Breakpoints used in some components to add responsive styles
  breakpoints: {
    xs: 500,
    sm: 768,
    md: 900,
    lg: 1200,
    xl: 1400,
  },

  // Timing function used for animations, defaults to 'ease'
  // transitionTimingFunction: string;

  // Values used for box-shadow
  // shadows: Record<"xs" | "sm" | "md" | "lg" | "xl", string>;
  shadows: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
    md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
    xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px",
  },

  // Styles added to buttons with `:active` pseudo-class
  // activeStyles: {},

  // theme functions, see in theme functions guide
  // fn: null,

  // Left to right or right to left direction, see RTL Support guide to learn more
  dir: "ltr",

  // Default loader used in Loader and LoadingOverlay components
  loader: "dots",

  // Default date format used in DatePicker and DateRangePicker components
  dateFormat: "",

  // Default dates formatting locale used in every @mantine/dates component
  datesLocale: "en",

  focusRingStyles: {
    styles: (theme: MantineTheme) => ({
      outlineOffset: 2,
      outline: `2px solid ${
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5]
      }`,
    }),
    resetStyles: () => ({ outline: "none" }),
    inputStyles: (theme: MantineTheme) => ({
      outline: "none",
      borderColor:
        theme.colors[theme.primaryColor][
          typeof theme.primaryShade === "object"
            ? theme.primaryShade[theme.colorScheme]
            : theme.primaryShade
        ],
    }),
  },

  // defaultProps, styles and classNames for components
  components: {},

  // Global styles
  globalStyles: (theme: MantineTheme) => ({}),

  // Add your own custom properties on Mantine theme
  other: {},
};
