import { Container, Grid, Image, Col, Text } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import { robotoMono, syncopate } from "../../../pages/_app";
const FooterSection = () => {
  const [hoverNext, setHoverNext] = useState(false);
  const [hoverAuthor, setHoverAuthor] = useState(false);
  const [hoverUp, setHoverUp] = useState(false);

  return (
    <Container
      css={{
        background: "$white",
        padding: 0,
        margin: "auto",
        height: 70,
        borderBottom: "4px solid $dark",
        borderLeft: "4px solid $dark",
        borderRight: "4px solid $dark",
        justifyContent: "stretch",
        display: "flex",
        marginBottom: 45,
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
              padding: 0,
              paddingLeft: 12,
              paddingRight: 12,
              justifyContent: "center",
            }}>
            <Text className={robotoMono.className} size={14} color={"$black"}>
              &copy; Jaspreet | Made with &nbsp;
            </Text>
            <Text className={robotoMono.className} size={14} color={"#ff0000"}>
              &#10084;
            </Text>
            <Text className={robotoMono.className} size={14} color={"$black"}>
              &nbsp;by
            </Text>
            <Link
              href={"https://jaspreetsingh.dev/"}
              onMouseOver={() => {
                setHoverAuthor(true);
              }}
              onMouseLeave={() => {
                setHoverAuthor(false);
              }}
              style={{
                margin: 0,
                padding: 0,
                position: "relative",
                top: 3,
                // left: 6,
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
              }}>
              <Text
                size={12}
                className={syncopate.className}
                css={{
                  flexDirection: "column",
                  justifyContent: "center",
                  display: "flex",
                  margin: "auto",
                  padding: "auto",
                  color: hoverAuthor ? "$pink" : "$black",
                  transitionDuration: ".25s",
                }}>
                &nbsp;JASPREET&nbsp;
              </Text>
            </Link>
            <Text className={robotoMono.className} size={14} color={"$black"}>
              using
            </Text>
            <Link
              href={"https://nextjs.org/"}
              target='_blank'
              onMouseOver={() => {
                setHoverNext(true);
              }}
              onMouseLeave={() => {
                setHoverNext(false);
              }}
              style={{
                margin: 0,
                padding: 0,
                position: "relative",
                top: 3,
                left: 6,
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
              }}>
              <Text
                size={12}
                className={syncopate.className}
                css={{
                  flexDirection: "column",
                  justifyContent: "center",
                  display: "flex",
                  margin: "auto",
                  padding: "auto",
                  color: hoverNext ? "$pink" : "$black",
                  transitionDuration: ".25s",
                }}>
                Next.Js
              </Text>
            </Link>
          </Container>
        </Grid>

        <Grid>
          <Container
            alignItems='center'
            onMouseOver={() => {
              setHoverUp(true);
            }}
            onMouseLeave={() => {
              setHoverUp(false);
            }}
            onClick={() => {
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0;
            }}
            css={{
              background: hoverUp ? "$pink" : "$black",
              margin: "auto",
              cursor: "pointer",
              transitionDuration: ".2s",
              padding: 16,
              "@media (max-width: 1050px)": {
                display: "none",
              },
              display: "flex",
              borderLeft: "4px solid $dark",
              width: 66,
              height: "100%",
            }}>
            <Image src='/arrow_up.svg' alt='scroll_up' objectFit='fill' />
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default FooterSection;
