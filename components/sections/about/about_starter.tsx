import { Col, Container, Grid, Spacer, Text } from "@nextui-org/react";
import { syncopate } from "../../../pages/_app";
const AboutStarter = () => {
  return (
    <Container
      css={{
        background: "$lightGreen",
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
      <Grid.Container css={{ background: "$lightGreen" }}>
        <Grid>
          <Container
            alignItems='center'
            css={{
              background: "$lightGreen",
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
                About me
              </Text>
            </Col>
          </Container>
        </Grid>

        <Grid xs>
          <Container
            css={{
              background: "$lightGreen",
              display: "block",
              margin: "auto",
              padding: 0,
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
                "@media (max-width: 450px)": {
                  fontSize: "$xl",
                  height: 30,
                },
              }}
            />
            <Text
              className={syncopate.className}
              color={"$black"}
              css={{
                fontSize: "$3xl",
                textTransform: "uppercase",
                width: 500,
                display: "flex",
                zIndex: 2,
                margin: "auto",
                textAlign: "center",
                "@media (max-width: 650px)": {
                  fontSize: "$2xl",
                  width: 400,
                },
                "@media (max-width: 450px)": {
                  fontSize: "$xl",
                  width: 300,
                },
                "@media (max-width: 350px)": {
                  fontSize: "$lg",
                  width: "100%",
                },
              }}>
              One of the best flutter developer
            </Text>

            <Spacer
              y={0}
              css={{
                height: 80,
                "@media (max-width: 650px)": {
                  fontSize: "$xl",
                  height: 50,
                },
                "@media (max-width: 450px)": {
                  fontSize: "$xl",
                  height: 30,
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
              background: "$lightGreen",
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

export default AboutStarter;
