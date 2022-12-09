import "../styles/globals.css";
import type { AppProps } from "next/app";
import { globalCss } from "@nextui-org/react";

import { NextUIProvider, createTheme } from "@nextui-org/react";
const globalStyles = globalCss({
  body: { background: "#c2f4ff" },
});
export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

const lightTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#f2ed72",
      text: "#2e2e2e",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",
      background: "#FFFFFF",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#f2ed72",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
