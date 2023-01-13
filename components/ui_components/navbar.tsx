"use client";
import {
  Navbar,
  Container,
  Text,
  Grid,
  Spacer,
  Col,
  Row,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { robotoMono, syncopateLink } from "../../pages/_app";
import JaspreetSinghLogo from "./logo";
import { FiMail } from "react-icons/fi";
import SocialLinks from "./social_links";
import { MdVerified } from "react-icons/md";

const DesktopNavBar = () => {
  return (
    <Container
      css={{
        background: "$background",
        padding: 0,
        margin: "auto",
        height: 70,
        border: "4px solid $dark",
        justifyContent: "stretch",
        display: "flex",
      }}
      fluid>
      <Grid.Container>
        <Grid>
          <Container
            alignItems='center'
            css={{
              margin: "auto",
              padding: 12,
              "@media (max-width: 1050px)": {
                display: "none",
              },
              // paddingRight: 13,
              display: "block",
              justifyContent: "center",
              borderRight: "4px solid $dark",
              width: 66,
              height: 66,
            }}>
            <MdVerified size={36} />
          </Container>
        </Grid>
        <Grid>
          <Container
            css={{
              margin: 0,

              maxWidth: 300,
              "@media (max-width: 500px)": {
                maxWidth: 250,
              },
              "@media (max-width: 450px)": {
                maxWidth: 230,
              },
              "@media (max-width: 400px)": {
                maxWidth: 200,
                paddingLeft: 8,
                paddingRight: 8,
              },
              display: "flex",
              height: 62,
            }}>
            <Row align='center' css={{ justifyContent: "center" }}>
              <JaspreetSinghLogo />
            </Row>
          </Container>
        </Grid>
        <Grid xs>
          <Container
            alignItems='center'
            css={{
              margin: 0,
              padding: 0,
              display: "none",
              borderLeft: "4px solid $dark",
              width: 66,
              marginLeft: "auto",
              justifyContent: "center",
              height: 62,
              "@media (max-width: 1050px)": {
                display: "flex",
              },
            }}>
            <Tooltip
              content={
                <Text
                  className={robotoMono.className}
                  css={{ fontSize: 12, fontWeight: "bold" }}
                  color={"$white"}>
                  Email
                </Text>
              }
              color={"secondary"}>
              <Link
                href={"mailto:jaspreet.codrity@gmail.com"}
                about='Email Address'>
                <FiMail size={30} color={"#2e2e2e"} />
              </Link>
            </Tooltip>
          </Container>
        </Grid>

        <Grid>
          <Container
            alignItems='center'
            css={{
              margin: 0,
              padding: 0,
              display: "flex",
              borderLeft: "4px solid $dark",
              width: 66,
              "@media (max-width: 1050px)": {
                display: "none",
              },
              justifyContent: "center",
              height: 62,
            }}>
            <Tooltip
              content={
                <Text
                  className={robotoMono.className}
                  css={{ fontSize: 12, fontWeight: "bold" }}
                  color={"$white"}>
                  Email
                </Text>
              }
              color={"secondary"}>
              <Link
                href={"mailto:jaspreet.codrity@gmail.com"}
                about='Email Address'>
                <FiMail size={30} color={"#2e2e2e"} />
              </Link>
            </Tooltip>
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

const MyNavBar = () => {
  return <DesktopNavBar />;
};

export default MyNavBar;
