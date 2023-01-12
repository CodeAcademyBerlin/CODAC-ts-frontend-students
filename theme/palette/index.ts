// ** Type Imports

import { PaletteOptions } from "@mui/material/styles/createPalette";
import { ThemeName } from "../../layouts/types";

const DefaultPalette = (themeName: ThemeName): PaletteOptions => {
  const primary = {
    main: "#00897B",
    light: "#26a69a",
    dark: "#00695c",
  };

  const secondary = {
    main: "#FF8A80",
    light: "#ffc4c5",
    dark: "#f53725",
  };

  const lightModeText = "58, 53, 65";
  const darkModeText = "231, 227, 252";

  const light: PaletteOptions = {
    mode: "light",
    primary: primary,
    secondary: secondary,
    text: {
      primary: `rgba(${lightModeText}, 0.87)`,
      secondary: `rgba(${lightModeText}, 0.68)`,
      disabled: `rgba(${lightModeText}, 0.38)`,
    },
    divider: `rgba(${lightModeText}, 0.12)`,
    background: {
      default: "#F4F5FA",
    },
    action: {
      active: `rgba(${lightModeText}, 0.54)`,
      hover: `rgba(${lightModeText}, 0.04)`,
      selected: `rgba(${lightModeText}, 0.08)`,
      disabled: `rgba(${lightModeText}, 0.3)`,
      disabledBackground: `rgba(${lightModeText}, 0.18)`,
      focus: `rgba(${lightModeText}, 0.12)`,
    },
  };

  const gag: PaletteOptions = {
    mode: "dark",
    primary: {
      main: "#33FF33",
      light: "#00FF33",
      dark: "#33FF00",
    },
    secondary: secondary,
    text: {
      primary: "#33FF33",
      secondary: "#FFB000",
      disabled: "#66FF66",
    },
    divider: `rgba(51, 255, 0, 0.12)`,
    background: {
      paper: "#282828",
      default: "#282828",
    },
    action: {
      active: `rgba(${darkModeText}, 0.54)`,
      hover: `rgba(${darkModeText}, 0.04)`,
      selected: `rgba(${darkModeText}, 0.08)`,
      disabled: `rgba(${darkModeText}, 0.3)`,
      disabledBackground: `rgba(${darkModeText}, 0.18)`,
      focus: `rgba(${darkModeText}, 0.12)`,
    },
  };

  const dark: PaletteOptions = {
    mode: "dark",
    primary: primary,
    secondary: secondary,
    text: {
      primary: `rgba(${darkModeText}, 0.87)`,
      secondary: `rgba(${darkModeText}, 0.68)`,
      disabled: `rgba(${darkModeText}, 0.38)`,
    },
    divider: `rgba(${darkModeText}, 0.12)`,
    background: {
      paper: "#312D4B",
      default: "#28243D",
    },
    action: {
      active: `rgba(${darkModeText}, 0.54)`,
      hover: `rgba(${darkModeText}, 0.04)`,
      selected: `rgba(${darkModeText}, 0.08)`,
      disabled: `rgba(${darkModeText}, 0.3)`,
      disabledBackground: `rgba(${darkModeText}, 0.18)`,
      focus: `rgba(${darkModeText}, 0.12)`,
    },
  };
  switch (themeName) {
    case "light": {
      return light;
    }
    case "gag": {
      return gag;
    }
    case "dark": {
      return dark;
    }
    default:
      return light;
  }
};

export default DefaultPalette;
