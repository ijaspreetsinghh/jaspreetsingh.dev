import { Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { syncopate } from "../../../pages/_app";
import Image from "next/image";
const TechStarter = () => {
  return (
    <Container
      css={{
        background: "#fff2d9",
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
      <Grid.Container css={{ background: "#fff2d9" }}>
        <Grid>
          <Container
            alignItems='center'
            css={{
              background: "#fff2d9",
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
                My skills
              </Text>
            </Col>
          </Container>
        </Grid>

        <Grid xs>
          <Container
            css={{
              background: "#fff2d9",
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
            <Row>
              <Container
                css={{
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  left: 30,
                  bottom: -50,
                  width: 80,
                  height: 80,
                  "@media (max-width: 600px)": {
                    display: "none",
                  },
                }}>
                <Image
                  src={"/real_star.svg"}
                  alt='star_shape'
                  height={80}
                  width={80}
                />
              </Container>
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
                try everything but keep the good
              </Text>
              <Container
                css={{
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  right: 30,
                  top: -50,
                  width: 100,
                  height: 100,
                  "@media (max-width: 600px)": {
                    display: "none",
                  },
                }}>
                <Image
                  src={"/heart.svg"}
                  alt='star_shape'
                  height={80}
                  width={80}
                />
              </Container>
            </Row>

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
              background: "#fff2d9",
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

export default TechStarter;
