import { Col, Container, Grid, Row, Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../ui_components/social_links";
const IntroSection = () => {
  return (
    <Container
      css={{
        background: "$skinColor",
        padding: 0,
        margin: 0,
        // height: 70,
        borderBottom: "4px solid $dark",
        borderLeft: "4px solid $dark",
        borderRight: "4px solid $dark",
        justifyContent: "stretch",
        display: "flex",
      }}
      fluid>
      <Grid.Container css={{ background: "$lightOrange" }}>
        <Grid>
          <Container
            alignItems='center'
            css={{
              background: "$lightOrange",
              margin: "auto",
              padding: 0,
              "@media (max-width: 1050px)": {
                display: "none",
              },
              // paddingRight: 13,
              display: "block",

              borderRight: "4px solid $dark",
              width: 66,
              height: "100%",
            }}>
            <Col
              css={{
                margin: "auto",
                display: "inline",
                justifyContent: "center",
                height: "100%",
              }}>
              <SocialLinks />
            </Col>
          </Container>
        </Grid>

        <Grid xs>
          <Container
            css={{
              //   borderRight: "4px solid $dark",
              //   height: 62,
              //   paddingTop: 15,
              background: "$lightOrange",
              display: "block",
              margin: 0,
              //   width: "",
              justifyContent: "stretch",
              //   "@media (max-width: 650px)": {
              //     display: "none",
              //   },
              //   "@xs": {
              //     display: "none",
              //   },
              //   "@sm": {
              //     display: "flex",
              //   },
            }}>
            <Spacer
              y={2}
              x={0}
              // css={{
              //   "@xs": {
              //     height: 30,
              //   },
              //   "@sm": {
              //     height: 50,
              //   },
              //   "@md": {
              //     height: 70,
              //   },
              // }}
            />
            <Row align='stretch' css={{ margin: 0, padding: 0 }}>
              <Col>
                <Image
                  alt='object'
                  src='/triangle.svg'
                  style={{ marginLeft: 30 }}
                  height={59}
                  width={65}
                />
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Grid>

        <Grid>
          <Container
            alignItems='center'
            css={{
              margin: "auto",
              padding: 0,
              background: "$lightOrange",
              "@media (max-width: 1050px)": {
                display: "none",
              },
              // paddingRight: 13,
              display: "block",
              borderLeft: "4px solid $dark",
              width: 66,
              height: "100%",
            }}></Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default IntroSection;
