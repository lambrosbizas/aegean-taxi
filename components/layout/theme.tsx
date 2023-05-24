import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#D7DEEC",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: `"Uber Move Text"`,
    // fontFamily: roboto.style.fontFamily,
  },
  zIndex: {
    modal: 99999,
  },
});

export default theme;
