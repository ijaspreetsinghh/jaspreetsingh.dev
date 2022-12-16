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
import TechnologyCapsule from "./technology_capsule";

const AllTechnologies = () => {
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
                what i have used so far
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
            <Grid.Container wrap='wrap' justify='center' gap={2}>
              <Grid>
                <TechnologyCapsule
                  text='flutter'
                  imageSource='/skills/flutter.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='next.js'
                  imageSource='/skills/next.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='React'
                  imageSource='/skills/react.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='JavaScript'
                  imageSource='/skills/js.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='TypeScript'
                  imageSource='/skills/typescript.svg'
                />
              </Grid>{" "}
              <Grid>
                <TechnologyCapsule
                  text='Nextui'
                  imageSource='/skills/nextui.png'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='bootstrap'
                  imageSource='/skills/bootstrap.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule text='HTML' imageSource='/skills/html.svg' />
              </Grid>{" "}
              <Grid>
                <TechnologyCapsule text='css' imageSource='/skills/css.svg' />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='node.js'
                  imageSource='/skills/node.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule text='deno' imageSource='/skills/deno.svg' />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='RESTapi'
                  imageSource='/skills/api.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='postman'
                  imageSource='/skills/postman.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='supabase'
                  imageSource='/skills/supabase.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='firebase'
                  imageSource='/skills/firebase.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule text='aws' imageSource='/skills/aws.svg' />
              </Grid>
              <Grid>
                <TechnologyCapsule text='GCP' imageSource='/skills/gcp.svg' />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='webflow'
                  imageSource='/skills/webflow.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='Wordpress'
                  imageSource='/skills/wordpress.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='figma'
                  imageSource='/skills/figma.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='Adobe Illustrator'
                  imageSource='/skills/ai.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='Adobe Xd'
                  imageSource='/skills/xd.svg'
                />
              </Grid>
              <Grid>
                <TechnologyCapsule text='git' imageSource='/skills/git.svg' />
              </Grid>
              <Grid>
                <TechnologyCapsule
                  text='github'
                  imageSource='/skills/github.svg'
                />
              </Grid>
            </Grid.Container>

            <Row justify='center' css={{ marginTop: 30 }}>
              <Text
                className={syncopate.className}
                color='#2e2e2e'
                css={{
                  fontSize: 18,
                  textTransform: "uppercase",
                  "@media (max-width: 450px)": {
                    fontSize: 15,
                  },
                }}>
                & many more...
              </Text>
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

export default AllTechnologies;
