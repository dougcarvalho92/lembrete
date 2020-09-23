import { green, red, yellow } from "@material-ui/core/colors";

import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e7e4f3",
      main: "#8a7cc5",
      dark: "#37314e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffefef",
      main: "#ffb2b2",
      dark: "#332323",
      contrastText: "#000",
    },
    warning: {
      light: "#fffbed",
      main: " #ffeda5",
      dark: " #332f21",
      contrastText: "#000",
    },
    background: {
      default: "#EFEFEF",
      paper: "#fff",
    },
  },
});

export default theme;
