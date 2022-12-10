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
        }}
        fluid>
        <div style={{ padding: 4 }}>
          <MyNavBar />
          <IntroSection />
        </div>
      </Container>
    </>
  );
}
