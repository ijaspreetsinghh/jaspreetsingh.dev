import {
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
  Image,
} from "@nextui-org/react";
import { robotoMono, syncopate } from "../../../pages/_app";
import SizedBox from "../../ui_components/sized_box";
import PrimaryButton from "../primary_button";

const AboutInfoComponent = () => {
  return (
    <Col>
      <Text
        className={syncopate.className}
        color={"$black"}
        css={{
          fontSize: "$3xl",
          textTransform: "uppercase",
          "@media (max-width: 650px)": {
            fontSize: "$2xl",
          },
          "@media (max-width: 450px)": {
            fontSize: "$xl",
          },
        }}>
        Building software for world changers
      </Text>

      <Text
        className={robotoMono.className}
        color={"$black"}
        css={{
          fontSize: "$base",
          marginTop: 24,
          "@media (max-width: 650px)": {
            marginTop: 8,
          },
        }}>
        I love writing beautiful code and seeing it deployed in applications
        that help users worldwide. I have comprehensive knowledge of web and
        mobile application development and operations. My engineering background
        has enabled me to build software with a cyclical design process.
      </Text>
      <Text
        className={robotoMono.className}
        color={"$black"}
        css={{
          fontSize: "$base",
          marginTop: 24,
          marginBottom: 24,
          "@media (max-width: 650px)": {
            marginTop: 16,
          },
        }}>
        I&apos;m very front-end focused and prefer to work on the front end;
        however, I can also manage back-end development.
      </Text>
      <Text
        className={robotoMono.className}
        color={"$black"}
        css={{
          fontSize: "$base",
          marginTop: 24,
          marginBottom: 24,
          "@media (max-width: 650px)": {
            marginTop: 16,
          },
        }}>
        I have several years of experience in product development engineering in
        a variety of industries, including payment and financial, as well as pos
        and investment. Products and projects varied from simple designs to
        elaborate, complex ones.
      </Text>
    </Col>
  );
};

const AboutMain = () => {
  return (
    <Container
      css={{
        background: "$white",
        padding: 0,
        margin: "auto",

        borderBottom: "4px solid $dark",
        borderLeft: "4px solid $dark",
        borderRight: "4px solid $dark",
        justifyContent: "stretch",
        display: "flex",
        marginBottom: 0,
      }}
      fluid>
      <Grid.Container css={{ background: "$white" }}>
        <Grid>
          <Container
            alignItems='center'
            css={{
              background: "$white",
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
              <Text
                className={syncopate.className}
                css={{
                  fontSize: 16,
                  color: "$black",

                  textTransform: "uppercase",
                  writingMode: "vertical-lr",
                  textOrientation: "sideways",
                  transform: "rotate(-180deg)",
                }}>
                who i am
              </Text>
            </Col>
          </Container>
        </Grid>

        <Grid xs>
          <Container
            css={{
              background: "$white",
              display: "flex",
              margin: "auto",
              //   padding: 0,
              paddingLeft: 12,
              paddingRight: 12,
              justifyContent: "center",
            }}>
            <Spacer
              y={0}
              css={{
                height: 80,
                "@media (max-width: 650px)": {
                  fontSize: "$xl",
                  height: 50,
                },
              }}
            />
            <Col>
              <Row
                justify='space-evenly'
                align='center'
                css={{ height: "fit-content" }}>
                <Col
                  css={{
                    width: "40%",
                    "@media (max-width: 1280px)": {
                      width: "100%",
                    },
                  }}>
                  <Container
                    css={{
                      background: "#ffe3ce",
                      height: 400,
                      width: 385,
                      padding: 0,
                      display: "flex",
                      justifyContent: "center",
                      // flexDirection: "column",
                      margin: "auto",
                      border: "4px solid $black",
                      "@media (max-width: 1280px)": {
                        width: 279,
                        height: 290,
                      },
                    }}>
                    <Container
                      css={{
                        margin: "auto",
                        padding: 0,
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <Image
                        alt='hero Image'
                        src={"/hero_2.jpg"}
                        height={312}
                        css={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          margin: "auto",
                          objectFit: "fill",
                          padding: 0,
                          border: "4px solid #2e2e2e",
                          "@media (max-width: 1280px)": {
                            width: 221,
                            height: 230,
                            marginTop: 25,
                          },
                        }}
                        width={300}
                      />
                    </Container>
                  </Container>
                  <SizedBox height={30} />
                  <Row justify='center'>
                    <PrimaryButton
                      bgColor='black'
                      shadowColor='#c2f4ff'
                      textColor='white'
                      onClick={() => {}}
                      text='Download Cv'
                      tooltipText='Download cv now!!'
                    />
                  </Row>
                </Col>
                <Container
                  css={{
                    width: "50%",
                    margin: 0,
                    padding: 0,
                    "@media (max-width: 1280px)": {
                      display: "none",
                    },
                  }}>
                  <AboutInfoComponent />
                </Container>
              </Row>
              <Container
                css={{
                  // width: "90%",
                  margin: 0,
                  // padding: 0,
                  marginTop: 32,
                  display: "none",
                  "@media (max-width: 1280px)": {
                    display: "block",
                  },
                }}>
                <AboutInfoComponent />
              </Container>
            </Col>

            <Spacer
              y={0}
              css={{
                height: 80,
                "@media (max-width: 650px)": {
                  height: 50,
                },
              }}
            />
          </Container>
        </Grid>

        <Grid>
          <Container
            alignItems='center'
            onClick={() => {
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0;
            }}
            css={{
              background: "$white",
              margin: "auto",
              cursor: "pointer",
              transitionDuration: ".2s",
              padding: 12,
              "@media (max-width: 1050px)": {
                display: "none",
              },
              display: "flex",
              borderLeft: "4px solid $dark",
              width: 66,
              height: "100%",
            }}></Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default AboutMain;
