import Head from "next/head";
import Image from "next/image";
import { Card, Col, Container, Grid, useTheme } from "@nextui-org/react";
import MyNavBar from "../components/ui_components/navbar";
import JaspreetSinghLogo from "../components/ui_components/logo";
import ThemeIcon from "../components/ui_components/theme_icon";
import { useTheme as useNextTheme } from "next-themes";
export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <>
      <Col
        css={{
          background: "$background",
          display: "none",
          "@media (max-width: 450px)": {
            display: "block",
          },
        }}>
        <div style={{ padding: 4 }}>
          <MyNavBar />
        </div>
      </Col>
      <Container
        css={{
          background: "$background",
          display: "block",
          "@media (max-width: 450px)": {
            display: "none",
          },
        }}
        fluid>
        <Container css={{ height: 16 }}></Container>
        <MyNavBar />
      </Container>
    </>
  );
}
