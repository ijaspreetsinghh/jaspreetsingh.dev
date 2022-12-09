import Head from "next/head";
import Image from "next/image";
import { SyncopateText } from "../components/typography/syncopate_text";
import { Card, Col, Container, Grid, useTheme } from "@nextui-org/react";
import MyNavBar from "../components/ui_components/navbar";
import JaspreetSinghLogo from "../components/ui_components/logo";
import ThemeIcon from "../components/ui_components/theme_icon";

export default function Home() {
  return (
    <>
      <Col
        css={{
          background: "#c2f4ff",
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
          background: "#c2f4ff",
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
