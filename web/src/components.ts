import { ButtonStylesParams, createStyles, MantineTheme } from "@mantine/core";

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

const useStyles = createStyles((theme) => ({
  track: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.blue[1],
  },
  mark: {
    width: 6,
    height: 6,
    borderRadius: 6,
    transform: "translateX(-3px) translateY(-2px)",
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.blue[1],
  },
  markFilled: {
    borderColor: theme.colors.blue[6],
  },
  markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: theme.white,
    borderWidth: 1,
    boxShadow: theme.shadows.sm,
  },
}));
