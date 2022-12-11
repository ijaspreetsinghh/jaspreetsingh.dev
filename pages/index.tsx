import { Col, Container } from "@nextui-org/react";
import FooterSection from "../components/sections/footer/footer";
import ScrollToTop from "../components/sections/footer/scroll_to_top";
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
        <FooterSection />
      </Container>{" "}
      <ScrollToTop />
    </>
  );
}
