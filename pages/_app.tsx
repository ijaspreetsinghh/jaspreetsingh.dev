import "../styles/globals.css";
import type { AppProps } from "next/app";
import { globalCss } from "@nextui-org/react";
import { Syncopate, Roboto_Mono } from "@next/font/google";

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
      yellow: "#f2ed72",
      dark: "#2e2e2e",
      pink: "#ffb9db",
      lightOrange: "#ffe3ce",
      blue: "#c2f4ff",
      lightYellow: "#ffebb9",
      periwinkle: "#c0c4e9",
      lightGreen: "#daf6cc",
      white: "#ffffff",
      darkGray: "#3e3e3e",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

export const syncopate = Syncopate({
  weight: "700",
  subsets: ["latin"],
});
export const robotoMono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const syncopateLink = Syncopate({
  weight: "700",

  subsets: ["latin"],
});
