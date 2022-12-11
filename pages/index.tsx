import { Col, Container } from "@nextui-org/react";
import IntroSection from "../components/sections/intro_section";
import MyNavBar from "../components/ui_components/navbar";

export default function Home() {
  return (
    <>
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
      </Container>
    </>
  );
}
