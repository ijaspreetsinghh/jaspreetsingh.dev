import {
  Button,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import { syncopate, robotoMono } from "../../pages/_app";
import SizedBox from "../ui_components/sized_box";
import SocialLinks from "../ui_components/social_links";
import Link from "next/link";
import HeroImage from "./hero_image";
import PrimaryButton from "./primary_button";
const IntroSection = () => {
  return (
    <Container
      css={{
        background: "$skinColor",
        padding: 0,
        margin: "auto",
        borderBottom: "4px solid $dark",
        borderLeft: "4px solid $dark",
        borderRight: "4px solid $dark",
        justifyContent: "stretch",
        display: "flex",
      }}
      fluid>
      <Grid.Container css={{ background: "#ffe3ce" }}>
        <Grid>
          <Container
            alignItems='center'
            css={{
              background: "#ffe3ce",
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
              <SocialLinks bottomMargin={10} />
            </Col>
          </Container>
        </Grid>

        <Grid xs>
          <Container
            css={{
              background: "#ffe3ce",
              display: "block",
              margin: 0,
              justifyContent: "stretch",
            }}>
            <Spacer
              y={0}
              x={0}
              css={{
                height: 40,
                "@media (max-width: 450px)": {
                  height: 30,
                },
              }}
            />
            <Row
              align='stretch'
              justify='space-between'
              css={{ margin: 0, padding: 0 }}>
              <Container
                css={{
                  "@media (max-width: 450px)": {
                    margin: 0,
                    padding: 0,
                  },
                }}>
                <Image
                  alt='object'
                  src='/triangle.svg'
                  draggable={false}
                  style={{ marginLeft: 20 }}
                  height={59}
                  width={65}
                />
                <Spacer
                  y={0}
                  x={0}
                  css={{
                    height: 40,
                    "@media (max-width: 450px)": {
                      height: 20,
                    },
                  }}
                />
                <Text
                  className={syncopate.className}
                  css={{
                    fontSize: "$4xl",
                    color: "$black",
                    "@media (max-width: 1250px)": {
                      fontSize: "$3xl",
                    },
                    "@media (max-width: 650px)": {
                      fontSize: "$2xl",
                    },
                    "@media (max-width: 450px)": {
                      fontSize: "$xl",
                    },
                    // "@media (max-width: 1050px)": {
                    //   fontSize: "$2xl",
                    // },
                  }}>
                  HI, I&apos;M
                </Text>
                <Row align='flex-start'>
                  <Tooltip
                    content={
                      <Text
                        className={syncopate.className}
                        css={{ fontSize: 11 }}
                        color={"$white"}>
                        FULL-STACK DEVELOPER
                      </Text>
                    }
                    color={"secondary"}>
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

                        // "@media (max-width: 450px)": {
                        //   fontSize: "$2xl",
                        // },
                      }}>
                      <Text
                        className={syncopate.className}
                        css={{
                          margin: 0,
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
                          "@media (max-width: 450px)": {
                            fontSize: "$md",
                          },
                        }}>
                        JASPREET SINGH
                      </Text>
                    </Container>
                  </Tooltip>
                </Row>
                <SizedBox height={10} />
                <Text
                  className={robotoMono.className}
                  css={{
                    margin: 0,
                    fontSize: "$base",
                    "@media (max-width: 450px)": {
                      fontSize: 14,
                    },
                  }}>
                  Full-Stack developer who writes clean, elegant and efficient
                  code.
                </Text>
                <SizedBox height={30} />
                <Link
                  href={"https://www.linkedin.com/in/ijaspreetsinghh/"}
                  style={{
                    display: "flex",
                    margin: 0,
                    width: "fit-content",
                  }}>
                  <PrimaryButton
                    bgColor='white'
                    shadowColor='black'
                    textColor='black'
                    onClick={() => {}}
                    text='Contact Me'
                    tooltipText='Chat on Linkedin!!'
                  />
                </Link>
                <Row align='center' css={{ display: "flex", margin: "auto" }}>
                  <Container
                    alignItems='center'
                    css={{
                      margin: 0,
                      marginTop: 40,
                      padding: 0,
                      background: "#ffe3ce",
                      justifyContent: "center",
                      display: "none",
                      "@media (max-width: 960px)": {
                        display: "flex",
                      },
                    }}>
                    <HeroImage />
                  </Container>
                </Row>
                <Spacer
                  y={2}
                  x={0}
                  css={{
                    "@media (max-width: 650px)": {
                      display: "none",
                    },
                  }}
                />
                <Row
                  align='flex-end'
                  css={{
                    maxWidth: 400,
                    display: "flex",
                    justifyContent: "flex-end",
                    "@media (max-width: 960px)": {
                      // maxWidth: "100%",
                      display: "none",
                      // position: "relative",
                    },
                  }}>
                  <Image
                    alt='object'
                    src='/star_sharp.svg'
                    draggable={false}
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
              <Container
                css={{
                  margin: 0,
                  padding: 0,
                  justifyContent: "center",
                  display: "flex",
                  "@media (max-width: 960px)": {
                    display: "none",
                  },
                }}>
                <HeroImage />
              </Container>
            </Row>
          </Container>
        </Grid>

        <Grid>
          <Container
            alignItems='center'
            css={{
              background: "#ffe3ce",
              margin: "auto",
              padding: 0,
              "@media (max-width: 1050px)": {
                display: "none",
              },
              // paddingRight: 13,
              display: "flex",

              borderLeft: "4px solid $dark",
              width: 66,
              height: "100%",
            }}>
            {/* <Col
              css={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textOrientation: "upright",
              }}>
              <Text
                className={robotoMono.className}
                css={{ fontSize: 14, writingMode: "vertical-rl" }}
                color={"$dark"}>
                jaspreet.codrity@gmail.com
              </Text>
            </Col> */}
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default IntroSection;
