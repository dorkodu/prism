import { MantineTheme, MantineThemeBase } from '@mantine/core';
import { ui, tokens, color }  from "./prism";

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
  defaultRadius: "lg",

  // White and black colors, defaults to '#fff' and '#000'
  white: ui.color.neutral(100),
  black: ui.color.neutral(15),

  // Object of arrays with 10 colors
  colors: {
    'dorkodu': [
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
  fontFamily: "Rubik, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif",
  lineHeight: 1.25,
  headings: { fontFamily: 'Rubik, sans-serif' },

  // Timing function used for animations, defaults to 'ease'
  // transitionTimingFunction: string;

  // Monospace font-family, used in Code, Kbd and Prism components
  fontFamilyMonospace: `ui-monospace, "Cascadia Mono", SFMono-Regular, "Segoe UI Mono", "Roboto Mono", Liberation Mono, Courier New, "Ubuntu Mono",  Menlo, Monaco, Consolas, monospace`,
  
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },

  radius: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22.5,
  },

  spacing: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22.5,
  },

  // Sizes for corresponding properties

  breakpoints: {
    "xs": 320,
    "sm": 400,
    "md": 728,
     "lg": 1024,
      "xl": 1400
  },

  // Values used for box-shadow
  // shadows: Record<"xs" | "sm" | "md" | "lg" | "xl", string>;

  // Breakpoints used in some components to add responsive styles
  /* 
  breakpoints: {
    "xs": 320,
    "sm": 400,
    "md": 728,
     "lg": 1024,
      "xl": 1400
  },
  */

  // Styles added to buttons with `:active` pseudo-class
  // activeStyles: {},

  // h1-h6 styles, used in Title and TypographyStylesProvider components
  headings: {
    // properties for all headings
    fontWeight: 500,
    fontFamily: 'Rubik',

    // properties for individual headings, all of them are optional
    sizes: {
      h1: { fontWeight: 800, fontSize: 36, lineHeight: 1.5 },
      h2: { fontWeight: 700, fontSize: 32, lineHeight: 1.4 },
      h3: { fontWeight: 600, fontSize: 28, lineHeight: 1.35 },
      h4: { fontWeight: 550, fontSize: 24, lineHeight: 1.35 },
      h5: { fontWeight: 500, fontSize: 20, lineHeight: 1.25 },
      h6: { fontWeight: 500, fontSize: 16, lineHeight: 1.25 },
    },

  // theme functions, see in theme functions guide
  // fn: null,

  // Left to right or right to left direction, see RTL Support guide to learn more
  dir: "ltr",

  // Default loader used in Loader and LoadingOverlay components
  loader: "dots",

  // Default date format used in DatePicker and DateRangePicker components
  dateFormat: "",

  // Default dates formatting locale used in every @mantine/dates component
  datesLocale: "",

  // defaultProps, styles and classNames for components
  components: {},

  // Global styles
  globalStyles: (theme: MantineTheme) => {
    return {}
  },

  // Add your own custom properties on Mantine theme
  other: {}
}
