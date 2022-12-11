import { Col, Container } from "@nextui-org/react";
import Head from "next/head";
import FooterSection from "../components/sections/footer/footer";
import ScrollToTop from "../components/sections/footer/scroll_to_top";
import IntroSection from "../components/sections/intro_section";
import MyNavBar from "../components/ui_components/navbar";

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
          "@media (max-width: 550px)": {
            padding: 0,
            margin: 0,
          },
        }}
        fluid>
        <MyNavBar />
        <IntroSection />
        <FooterSection />
      </Container>{" "}
      <ScrollToTop />
    </>
  );
}
