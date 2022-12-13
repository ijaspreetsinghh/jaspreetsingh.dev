import {
  Col,
  Container,
  Grid,
  Image,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import Head from "next/head";
import FooterSection from "../components/sections/footer/footer";
import PrimaryButton from "../components/sections/primary_button";
import MyNavBar from "../components/ui_components/navbar";
import SizedBox from "../components/ui_components/sized_box";
import SocialLinks from "../components/ui_components/social_links";
import { robotoMono, syncopate } from "./_app";
import { useRouter } from "next/router";
export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Page Not Found | Jaspreet Singh</title>
        <meta name='title' content='Page Not Found | Jaspreet Singh' />

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
        <Container
          css={{
            background: "$white",
            padding: 0,
            margin: "auto",
            // height: 70,
            borderBottom: "4px solid $dark",
            borderLeft: "4px solid $dark",
            borderRight: "4px solid $dark",
            justifyContent: "stretch",
            display: "flex",
          }}
          fluid>
          <Grid.Container css={{ background: "$white" }}>
            <Grid>
              <Container
                alignItems='center'
                css={{
                  background: "$blue",
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

                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
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
                    Error
                  </Text>
                </Col>
              </Container>
            </Grid>

            <Grid xs>
              <Container
                css={{
                  background: "$blue",
                  display: "flex",
                  margin: "auto",
                  padding: 0,
                  paddingLeft: 12,
                  paddingRight: 12,
                  justifyContent: "center",
                }}>
                <Col
                  css={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <SizedBox height={20} />
                  <Image
                    src='/404.svg'
                    alt='404'
                    css={{
                      maxHeight: 200,
                      padding: 0,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }}
                  />
                  <Text
                    className={syncopate.className}
                    css={{
                      textAlign: "center",
                      fontSize: 36,
                      textTransform: "uppercase",
                      "@media (max-width: 650px)": {
                        fontSize: 24,
                      },

                      "@media (max-width: 400px)": {
                        fontSize: 20,
                      },
                    }}
                    color={"$black"}>
                    Page Not Found
                  </Text>
                  <Row
                    align='center'
                    justify='center'
                    css={{
                      width: 500,
                      display: "flex",
                      margin: "auto",

                      "@media (max-width: 750px)": {
                        width: 460,
                      },
                      "@media (max-width: 500px)": {
                        width: "100%",
                      },
                    }}>
                    <Text
                      className={robotoMono.className}
                      css={{
                        textAlign: "center",
                        fontSize: "$base",
                        // textTransform: "uppercase",
                        "@media (max-width: 500px)": {
                          fontSize: "$base",
                        },
                      }}
                      color={"$black"}>
                      It is a long established fact that reader will be
                      distracted readable content of when looking.
                    </Text>
                  </Row>
                  <SizedBox height={20} />
                  <Row align='center' justify='center'>
                    <PrimaryButton
                      bgColor='white'
                      shadowColor='black'
                      textColor='black'
                      onClick={() => {
                        router.push("/");
                      }}
                      text='Go to home'
                      tooltipText='Go to home!!'
                    />
                  </Row>
                  <SizedBox height={20} />
                  <Spacer
                    css={{
                      height: 70,
                      "@media (max-width: 850px)": {
                        height: 20,
                      },
                      "@media (max-width: 650px)": {
                        height: 10,
                      },
                    }}
                  />
                </Col>
              </Container>
            </Grid>

            <Grid>
              <Container
                alignItems='center'
                css={{
                  background: "$blue",
                  margin: "auto",
                  padding: 0,
                  "@media (max-width: 1050px)": {
                    display: "none",
                  },
                  display: "flex",

                  borderLeft: "4px solid $dark",
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
                    }}>
                    Error
                  </Text>
                </Col>
              </Container>
            </Grid>
          </Grid.Container>
        </Container>
        <FooterSection />
      </Container>
    </>
  );
}
