import "@fontsource/rubik";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/900.css";
import type { PaletteMode } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export default function createAppTheme(mode: PaletteMode = "light"): Theme {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              primary: {
                main: "#0074e0",
              },
              secondary: {
                main: "#1b2027",
              },
              background: {
                default: "#ffffff",
                paper: "#f1f1f1",
              },
            }
          : {
              // palette values for dark mode
              primary: {
                main: "#27c8ff",
              },
              secondary: {
                main: "#e3e5e9",
              },
              background: {
                default: "#181c23",
                paper: "#2f2f2f",
              },
            }),
      },
      typography: {
        fontFamily: "Rubik",

        h1: {
          fontWeight: "500",
        },
      },
    })
  );
}
