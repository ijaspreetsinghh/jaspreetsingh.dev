import { Col, Container, Text } from "@nextui-org/react";
import Head from "next/head";
import AboutMain from "../components/sections/about/about_main";
import AboutStarter from "../components/sections/about/about_starter";
import FooterSection from "../components/sections/footer/footer";
import IntroSection from "../components/sections/intro_section";
import ServicesSection from "../components/sections/services_section/services_section";
import AllTechnologies from "../components/sections/techs/all_techs";
import TechStarter from "../components/sections/techs/techs_starter";
import MyNavBar from "../components/ui_components/navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Jaspreet Singh | Full-Stack Developer Portfolio</title>
        <meta
          name='title'
          content='Jaspreet Singh | Full-Stack Developer Portfolio'
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
        <MyNavBar />
        <IntroSection />
        <AboutStarter />
        <AboutMain />
        <TechStarter />
        <AllTechnologies />
        <ServicesSection />
        <FooterSection />
      </Container>
    </>
  );
}
