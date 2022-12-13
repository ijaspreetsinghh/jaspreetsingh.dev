import { Col, Container, Text } from "@nextui-org/react";
import Head from "next/head";
import FooterSection from "../components/sections/footer/footer";
import IntroSection from "../components/sections/intro_section";
import ServicesSection from "../components/sections/services_section/services_section";
import MyNavBar from "../components/ui_components/navbar";
import { syncopate } from "./_app";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jaspreet Singh | Flutter Developer Portfolio</title>
        <meta
          name='title'
          content='Jaspreet Singh | Flutter Developer Portfolio'
        />

        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Container
        css={{
          background: "$blue",
          display: "block",
          maxWidth: 1700,
          margin: "auto",
          marginTop: 30,
          marginBottom: 30,
          "@media (max-width: 550px)": {
            padding: 0,
            margin: 0,
          },
        }}
        fluid>
        <Text
          className={syncopate.className}
          css={{
            fontSize: 18,
            color: "$white",
            marginBottom: 20,
            background: "#ad1710",
            textAlign: "center",
            textTransform: "uppercase",
          }}>
          Partial Build
        </Text>
        <MyNavBar />
        <IntroSection />
        <ServicesSection />
        <FooterSection />
      </Container>
    </>
  );
}
