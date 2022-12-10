import {
  Button,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { syncopate, robotoMono } from "../../pages/_app";
import SizedBox from "../ui_components/sized_box";
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
              display: "flex",

              borderRight: "4px solid $dark",
              width: 66,
              height: "100%",
            }}>
            <Col
              css={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
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
              background: "$lightOrange",
              display: "block",
              margin: 0,
              justifyContent: "stretch",
            }}>
            <Spacer y={2} x={0} />
            <Row align='stretch' css={{ margin: 0, padding: 0 }}>
              <Container>
                <Image
                  alt='object'
                  src='/triangle.svg'
                  style={{ marginLeft: 30 }}
                  height={59}
                  width={65}
                />
                <Spacer y={2} x={0} />

                <Text
                  className={syncopate.className}
                  css={{
                    fontSize: "$4xl",
                    "@media (max-width: 1250px)": {
                      fontSize: "$3xl",
                    },
                    // "@media (max-width: 1050px)": {
                    //   fontSize: "$2xl",
                    // },
                  }}>
                  HI, I&apos;M
                </Text>
                <Row align='flex-start'>
                  <Container
                    justify='flex-start'
                    css={{
                      background: "$yellow",
                      border: "4px solid $black",
                      borderRadius: "$pill",
                      width: "fit-content",
                      margin: 0,
                      minWidth: 200,
                      marginBottom: 10,
                    }}>
                    <Text
                      className={syncopate.className}
                      css={{
                        fontSize: "$2xl",
                        "@media (max-width: 1250px)": {
                          fontSize: "$xl",
                        },
                        "@media (max-width: 1050px)": {
                          fontSize: "$lg",
                        },
                        "@media (max-width: 750px)": {
                          fontSize: "$lg",
                        },
                      }}>
                      JASPREET SINGH
                    </Text>
                  </Container>
                </Row>
                <Text className={robotoMono.className} size={"$base"}>
                  Front end developer who writes clean, elegant and efficient
                  code.
                </Text>
                <SizedBox height={20} />

                <Container
                  css={{
                    border: "4px solid $black",
                    height: 70,

                    width: 238,
                    padding: 0,
                    display: "flex",
                    margin: 0,
                    background: "$white",
                    flexDirection: "column",
                  }}>
                  <Button
                    flat
                    css={{
                      position: "relative",
                      height: 70,
                      bottom: 8,
                      left: 8,
                      borderRadius: 0,
                      paddingLeft: 16,
                      paddingRight: 16,
                      width: 238,
                      background: "$black",
                      display: "flex",
                      margin: 0,
                      flexDirection: "column",
                      // width: "fit-content",
                    }}>
                    <Row align='center'>
                      <Text
                        className={syncopate.className}
                        // size={"$md"}
                        color={"$white"}
                        css={{ fontSize: 18 }}>
                        DOWNLOAD CV
                      </Text>
                      <SizedBox width={12} />
                      <Image
                        src={"/down.svg"}
                        alt={"download cv"}
                        height={18}
                        width={18}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "auto",
                          flexDirection: "column",
                        }}
                      />
                    </Row>
                  </Button>
                </Container>
                <Spacer y={2} x={0} />
                <Row
                  align='flex-end'
                  css={{
                    maxWidth: 400,
                    display: "flex",
                    justifyContent: "flex-end",
                    "@media (max-width: 960px)": {
                      maxWidth: "100%",
                    },
                  }}>
                  <Image
                    alt='object'
                    src='/star_sharp.svg'
                    style={{
                      display: "block",
                      alignItems: "flex-end",
                      alignContent: "flex-end",
                      justifyContent: "flex-end",
                    }}
                    height={104}
                    width={104}
                  />
                </Row>

                <Spacer y={2} x={0} />
              </Container>
              <Col>
                <Container
                  css={{
                    background: "red",
                    height: 400,
                    width: 500,
                  }}></Container>
              </Col>
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
