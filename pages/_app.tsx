import "../styles/globals.css";
import type { AppProps } from "next/app";
import { globalCss } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { NextUIProvider, createTheme } from "@nextui-org/react";
const globalStyles = globalCss({
  body: { background: "#c2f4ff" },
});

import { Syncopate } from "@next/font/google";

export const syncopate = Syncopate({
  weight: "700",
  subsets: ["latin"],
});
export const syncopateLink = Syncopate({
  weight: "700",

  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

const lightTheme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#f2ed72",
      green: "#DAF6CC",
      pink: "#FFB9DB",
      text: "#2e2e2e",
      black: "#3E3E3E",
      skinColor: "#FFE3CE",
      lightYellow: "#FFEBB9",
      grey: "#3E3E3E",
      blue: "#C2F4FF",
      purple: "#C0C4E9",
      background: "#C2F4FF",
      myColor: "#f2ed72",
    },
  },
});

const darkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#f2ed72",
      green: "#DAF6CC",
      pink: "#FFB9DB",
      text: "#ffffff",
      black: "#3E3E3E",
      skinColor: "#FFE3CE",
      lightYellow: "#FFEBB9",
      grey: "#3E3E3E",
      blue: "#C2F4FF",
      purple: "#C0C4E9",
      background: "#2e2e2e",
      myColor: "#f2ed72",
    },
  },
});
