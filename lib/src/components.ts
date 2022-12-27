import type { ButtonStylesParams, MantineTheme } from "@mantine/core";

export default {
  Button: {
    defaultProps: {},

    styles: (theme: MantineTheme, params: ButtonStylesParams) => ({
      root: {
        height: 42,
        padding: "0 30px",
        backgroundColor:
          params.variant === "filled"
            ? theme.colors[params.color || theme.primaryColor][9]
            : undefined,
      },
    }),
  },

  Switch: {
    defaultProps: {
      onLabel: "ON",
      offLabel: "OFF",
    },
  },

  Badge: {
    // Use raw styles object if you do not need theme dependency
    styles: {
      root: { borderWidth: 2 },
    },
  },
};