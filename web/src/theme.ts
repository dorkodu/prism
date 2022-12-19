import { MantineTheme, MantineThemeBase } from '@mantine/core';
import { ui, tokens, color }  from "./prism";

export const theme: MantineTheme = {
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
  black: ui.color.neutral(10),

  // Object of arrays with 10 colors
  colors: {
    green: [
      tokens.color.green(10),
      tokens.color.green(35),
      tokens.color.green(45),
      tokens.color.green(55),
      tokens.color.green(65),
      tokens.color.green(75),
      tokens.color.green(85),
      tokens.color.green(90),
      tokens.color.green(95),
      tokens.color.green(98),
    ],
    dark:[
      tokens.color.gray(10),
      tokens.color.gray(25),
      tokens.color.gray(40),
      tokens.color.gray(55),
      tokens.color.gray(65),
      tokens.color.gray(75),
      tokens.color.gray(85),
      tokens.color.gray(90),
      tokens.color.gray(95),
      tokens.color.gray(98),
    ],
    gray:[
      tokens.color.gray(10),
      tokens.color.gray(25),
      tokens.color.gray(40),
      tokens.color.gray(55),
      tokens.color.gray(65),
      tokens.color.gray(75),
      tokens.color.gray(85),
      tokens.color.gray(90),
      tokens.color.gray(95),
      tokens.color.gray(98),
    ],
    red:[
      tokens.color.red(10),
      tokens.color.red(25),
      tokens.color.red(45),
      tokens.color.red(55),
      tokens.color.red(65),
      tokens.color.red(75),
      tokens.color.red(85),
      tokens.color.red(90),
      tokens.color.red(95),
      tokens.color.red(98),
    ],
    pink:[
      tokens.color.pink(10),
      tokens.color.pink(25),
      tokens.color.pink(45),
      tokens.color.pink(55),
      tokens.color.pink(65),
      tokens.color.pink(75),
      tokens.color.pink(85),
      tokens.color.pink(90),
      tokens.color.pink(95),
      tokens.color.pink(98),
    ],
    indigo:[
      tokens.color.indigo(10),
      tokens.color.indigo(25),
      tokens.color.indigo(45),
      tokens.color.indigo(55),
      tokens.color.indigo(65),
      tokens.color.indigo(75),
      tokens.color.indigo(85),
      tokens.color.indigo(90),
      tokens.color.indigo(95),
      tokens.color.indigo(98),
    ],
    blue:[
      tokens.color.blue(10),
      tokens.color.blue(25),
      tokens.color.blue(45),
      tokens.color.blue(55),
      tokens.color.blue(65),
      tokens.color.blue(75),
      tokens.color.blue(85),
      tokens.color.blue(90),
      tokens.color.blue(95),
      tokens.color.blue(98),
    ],
    cyan:[
      tokens.color.cyan(10),
      tokens.color.cyan(25),
      tokens.color.cyan(45),
      tokens.color.cyan(55),
      tokens.color.cyan(65),
      tokens.color.cyan(75),
      tokens.color.cyan(85),
      tokens.color.cyan(90),
      tokens.color.cyan(95),
      tokens.color.cyan(98),
    ],
    yellow:[
      tokens.color.yellow(10),
      tokens.color.yellow(25),
      tokens.color.yellow(40),
      tokens.color.yellow(55),
      tokens.color.yellow(65),
      tokens.color.yellow(75),
      tokens.color.yellow(85),
      tokens.color.yellow(90),
      tokens.color.yellow(95),
      tokens.color.yellow(98),
    ],
    orange:[
      tokens.color.orange(10),
      tokens.color.orange(25),
      tokens.color.orange(40),
      tokens.color.orange(55),
      tokens.color.orange(65),
      tokens.color.orange(75),
      tokens.color.orange(85),
      tokens.color.orange(90),
      tokens.color.orange(95),
      tokens.color.orange(98),
    ]
  },

  // Key of theme.colors
  primaryColor: "green";

  // Index of color from theme.colors that is considered primary, Shade type is 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  primaryShade: { 
    light: 0,
    dark: 0, 
  },

  // Default gradient used in components that support `variant="gradient"` (Button, ThemeIcon, etc.)
  defaultGradient: { deg: number; from: MantineColor; to: MantineColor };

  // font-family and line-height used in most components
  fontFamily: string;
  lineHeight: string | number;

  // Timing function used for animations, defaults to 'ease'
  transitionTimingFunction: string;

  // Monospace font-family, used in Code, Kbd and Prism components
  fontFamilyMonospace: string;

  // Sizes for corresponding properties
  fontSizes: Record<"xs" | "sm" | "md" | "lg" | "xl", number>;
  radius: Record<"xs" | "sm" | "md" | "lg" | "xl", number>;
  spacing: Record<"xs" | "sm" | "md" | "lg" | "xl", number>;

  // Values used for box-shadow
  shadows: Record<"xs" | "sm" | "md" | "lg" | "xl", string>;

  // Breakpoints used in some components to add responsive styles
  breakpoints: {
    "xs"
    "sm"
    "md" | "lg" | "xl"
  },

  // Styles added to buttons with `:active` pseudo-class
  activeStyles: {},

  // h1-h6 styles, used in Title and TypographyStylesProvider components
  /* 
  headings: {
    fontFamily: ;
    fontWeight: ;
    sizes: {
      // See heading options below
      h1: Heading;
      h2: Heading;
      h3: Heading;
      h4: Heading;
      h5: Heading;
      h6: Heading;
    };
  };
  */

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
