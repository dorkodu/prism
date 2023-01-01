import type { MantineTheme } from "@mantine/core";

const ComponentLibrary: Partial<MantineTheme> = {
  components: {
    Button: {},

    TextInput: {},

    Switch: {
      defaultProps: {
        onLabel: "ON",
        offLabel: "OFF",
      },
    },

    Badge: {
      // Use raw styles object if you do not need theme dependency
    },
  },
};

export default ComponentLibrary;
