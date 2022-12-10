import { Col, Container } from "@nextui-org/react";
import IntroSection from "../components/sections/intro_section";
import MyNavBar from "../components/ui_components/navbar";

export default function Home() {
  return (
    <>
      <Col
        css={{
          background: "$blue",
          display: "none",
          "@media (max-width: 450px)": {
            display: "block",
          },
        }}>
        <div style={{ padding: 4 }}>
          <MyNavBar />
          <IntroSection />
        </div>
      </Col>
      <Container
        css={{
          background: "$blue",
          display: "block",
          "@media (max-width: 450px)": {
            display: "none",
          },
        }}
        fluid>
        <Container css={{ height: 16 }}></Container>
        <MyNavBar /> <IntroSection />
      </Container>
    </>
  );
}
