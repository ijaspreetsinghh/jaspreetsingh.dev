import { Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import Head from "next/head";
import FooterSection from "../components/sections/footer/footer";
import PrimaryButton from "../components/sections/primary_button";
import MyNavBar from "../components/ui_components/navbar";
import SizedBox from "../components/ui_components/sized_box";
import SocialLinks from "../components/ui_components/social_links";
import { syncopate } from "./_app";
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
                  <SocialLinks bottomMargin={10} />
                </Col>
              </Container>
            </Grid>

            <Grid xs>
              <Container
                css={{
                  background: "$lightOrange",
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
                  <Spacer
                    css={{
                      height: 90,
                      "@media (max-width: 850px)": {
                        height: 50,
                      },
                      "@media (max-width: 650px)": {
                        height: 30,
                      },
                    }}
                  />
                  <Text
                    className={syncopate.className}
                    css={{
                      textAlign: "center",
                      fontSize: 36,
                      "@media (max-width: 500px)": {
                        fontSize: 24,
                      },
                    }}
                    color={"$black"}>
                    Not Found
                  </Text>
                  <SizedBox height={20} />
                  <Row align='center' justify='center'>
                    <PrimaryButton
                      bgColor='white'
                      shadowColor='black'
                      textColor='black'
                      onClick={() => {
                        router.push("/");
                      }}
                      text='Take me home'
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
                  background: "$lightOrange",
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
          </Grid.Container>
        </Container>
        <FooterSection />
      </Container>
    </>
  );
}
