"use client";
import {
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
  Link,
} from "@nextui-org/react";
import { robotoMono, syncopate } from "../../../pages/_app";
import SizedBox from "../../ui_components/sized_box";
import PrimaryButton from "../primary_button";

import { useState } from "react";

const ContactMain = () => {
  const [isHover, setHover] = useState(false);
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
              }}></Col>
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
            <Row>
              <Container
                sm
                onMouseOver={(e) => {
                  setHover(true);
                }}
                onMouseLeave={(e) => {
                  setHover(false);
                }}
                color={"primary"}
                css={{
                  boxShadow: isHover ? `0px 0px #000000` : `-12px 8px #000000`,
                  shapeOutside: "initial",
                  transitionDuration: ".45s",

                  borderRadius: 0,
                  padding: 16,
                  background: "#FFF969",
                  border: "4px solid #000000",
                  display: "inline-block",
                  margin: "auto",
                  width: "100%",
                  minWidth: 300,
                  minHeight: 300,
                  height: "fit-content",
                  "@media (max-width: 1280px)": {
                    marginLeft: 16,
                    marginRight: 16,
                    // width: "100%",
                  },
                }}>
                <Container xs>
                  <Text
                    className={syncopate.className}
                    color={"$black"}
                    css={{
                      fontSize: "$3xl",
                      textTransform: "uppercase",
                      // width: "100%",
                      display: "flex",
                      zIndex: 2,
                      margin: "auto",
                      textAlign: "center",
                      "@media (max-width: 650px)": {
                        fontSize: "$2xl",
                        // width: "100%",
                      },
                      "@media (max-width: 450px)": {
                        fontSize: "$xl",
                        // width: "100%",
                      },
                      "@media (max-width: 350px)": {
                        fontSize: "$lg",
                        // width: "100%",
                      },
                    }}>
                    e-Mail
                  </Text>{" "}
                  <SizedBox height={10} />
                  <Text
                    className={robotoMono.className}
                    size={14}
                    color={"$black"}>
                    My inbox is always open. Whether you have a question or just
                    want to say hi, I&apos;ll try my best to get back to you!
                  </Text>
                  <SizedBox height={24} />
                  <Link
                    href={"mailto:jaspreet.codrity@gmail.com"}
                    css={{ width: "min-content" }}>
                    <PrimaryButton
                      onClick={() => {}}
                      bgColor='white'
                      shadowColor='#000'
                      text='Say Hi'
                      textColor='black'
                      tooltipText='jaspreet.codrity@gmail.com'
                    />
                  </Link>
                </Container>
              </Container>
            </Row>

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
            css={{
              background: "$white",
              margin: "auto",

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

export default ContactMain;
