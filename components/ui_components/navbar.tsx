import {
  Navbar,
  Container,
  Text,
  Grid,
  Spacer,
  Col,
  Row,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { syncopateLink } from "../../pages/_app";
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
            css={{
              borderLeft: "4px solid $dark",
              height: 62,
              paddingTop: 15,
              background: "#DAF6CC",

              justifyContent: "space-evenly",
              "@media (max-width: 650px)": {
                display: "none",
              },
              "@xs": {
                display: "none",
              },
              "@sm": {
                display: "flex",
              },
            }}>
            <Text className={syncopateLink.className} size={18}>
              HOME
            </Text>
            <Text className={syncopateLink.className} size={18}>
              ABOUT
            </Text>
            <Text className={syncopateLink.className} size={18}>
              WORK
            </Text>
            <Text className={syncopateLink.className} size={18}>
              CONTACT
            </Text>
            <Spacer x={0} />
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
            <FiMail size={30} />
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

const MobNavBar = () => {
  const [isOpen, setOpen] = useState(false);

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
      <Navbar
        isCompact
        disableShadow
        variant={"static"}
        css={{ margin: 0, padding: 0, background: "$background" }}>
        <Navbar.Content css={{ margin: 0, padding: 0 }}>
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
        </Navbar.Content>
        <Navbar.Toggle
          color='$black'
          // isSelected={isOpen}
          // onClick={(e) => {
          //   setOpen(!isOpen);
          // }}
          css={{
            margin: 0,
            padding: 0,
            background: "$background",
          }}></Navbar.Toggle>

        <Navbar.Collapse
          // isOpen={isOpen}
          css={{
            borderLeft: "4px solid $black",

            // -ms-overflow-style: none;

            borderRight: "4px solid $black",
          }}>
          <Navbar.CollapseItem>
            <Link
              color='inherit'
              style={{
                minWidth: "100%",
                display: "flex",
                justifyContent: "flex-end",
                // background: "red",

                margin: "auto",
              }}
              href='#'>
              <Text
                className={syncopateLink.className}
                size={18}
                css={{ textAlign: "end" }}>
                HOME
              </Text>
            </Link>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem>
            <Link
              color='inherit'
              style={{
                minWidth: "100%",
                display: "flex",
                justifyContent: "flex-end",
                // background: "red",

                margin: "auto",
              }}
              href='#'>
              <Text
                className={syncopateLink.className}
                size={18}
                css={{ textAlign: "end" }}>
                ABOUT
              </Text>
            </Link>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem>
            <Link
              color='inherit'
              style={{
                minWidth: "100%",
                display: "flex",
                justifyContent: "flex-end",
                // background: "red",
                margin: "auto",
              }}
              href='#'>
              <Text
                className={syncopateLink.className}
                size={18}
                css={{ textAlign: "end" }}>
                WORK
              </Text>
            </Link>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem>
            <Link
              color='inherit'
              style={{
                minWidth: "100%",
                display: "flex",
                justifyContent: "flex-end",
                // background: "red",

                margin: "auto",
              }}
              href='#'>
              <Text
                className={syncopateLink.className}
                size={18}
                css={{ textAlign: "end" }}>
                CONTACT
              </Text>
            </Link>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem>
            <Row align='flex-end' justify='flex-end'>
              <SocialLinks rightMargin={10} />
            </Row>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
const MyNavBar = () => {
  return (
    <div>
      <Row
        css={{
          display: "none",
          "@media (max-width: 960px)": {
            display: "block",
          },
        }}>
        <MobNavBar />
      </Row>
      <Row
        css={{
          display: "block",
          "@media (max-width: 960px)": {
            display: "none",
          },
        }}>
        <DesktopNavBar />
      </Row>
    </div>
  );
};

export default MyNavBar;
