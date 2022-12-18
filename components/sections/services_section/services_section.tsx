import { Col, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { robotoMono, syncopate } from "../../../pages/_app";
import GearIcon from "../../ui_components/gear_icon";
import SizedBox from "../../ui_components/sized_box";
import ServiceComponent from "./service_component";
import { HiOutlineCode, HiOutlineDatabase } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { GiProtectionGlasses } from "react-icons/gi";

const ServicesSection = () => {
  return (
    <Container
      css={{
        background: "white",
        padding: 0,
        margin: "auto",
        borderBottom: "4px solid $dark",
        borderLeft: "4px solid $dark",
        borderRight: "4px solid $dark",
        justifyContent: "stretch",
        display: "flex",
      }}
      fluid>
      <Grid.Container css={{ background: "white" }}>
        <Grid>
          <Container
            alignItems='center'
            css={{
              background: "white",
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
                What i Can Do For You
              </Text>
            </Col>
          </Container>
        </Grid>

        <Grid xs>
          <Container
            css={{
              background: "white",
              display: "block",
              margin: 0,
              padding: 0,
              justifyContent: "stretch",
            }}>
            <Spacer
              y={0}
              css={{
                height: 50,
                "@media (max-width: 1050px)": {
                  height: 35,
                },
                "@media (max-width: 650px)": {
                  height: 20,
                },
              }}
            />
            <Container
              css={{
                margin: 0,
                padding: 0,
                display: "none",
                width: "fit-content",

                "@media (max-width: 650px)": {
                  display: "flex",
                  margin: "auto",
                },
              }}>
              <GearIcon height={56} width={56} />
            </Container>
            <Spacer
              y={0}
              css={{
                height: 50,
                "@media (max-width: 1050px)": {
                  height: 35,
                },
                "@media (max-width: 650px)": {
                  height: 20,
                },
              }}
            />
            <Row align='center' justify='center' css={{ display: "flex" }}>
              <Text
                className={syncopate.className}
                css={{
                  fontSize: "$4xl",
                  color: "$black",
                  textTransform: "uppercase",
                  "@media (max-width: 1250px)": {
                    fontSize: "$3xl",
                  },
                  "@media (max-width: 650px)": {
                    fontSize: "$2xl",
                  },
                  "@media (max-width: 450px)": {
                    fontSize: "$xl",
                  },
                  "@media (max-width: 350px)": {
                    fontSize: "$lg",
                  },
                  "@media (max-width: 310px)": {
                    fontSize: "$md",
                  },
                }}>
                I can help you with
              </Text>
              <Container
                css={{
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  width: "fit-content",
                  position: "relative",
                  left: 40,
                  "@media (max-width: 650px)": {
                    display: "none",
                  },
                }}>
                <GearIcon />
              </Container>
            </Row>
            <SizedBox height={10} />
            <Row
              justify='center'
              align='center'
              css={{
                width: 356,
                display: "flex",
                textAlign: "center",
                margin: "auto",
                "@media (max-width: 1050px)": {
                  width: 356,
                },
                "@media (max-width: 450px)": {
                  width: 310,
                },
                "@media (max-width: 400px)": {
                  width: 280,
                },
                "@media (max-width: 350px)": {
                  width: 240,
                },
                "@media (max-width: 310px)": {
                  width: 200,
                },
              }}>
              <Text
                className={robotoMono.className}
                css={{
                  fontSize: "$base",
                  color: "$black",
                }}>
                Helping people turn their ideas into sites & apps that work.
                Professional and Cost-Effective. Always!!
              </Text>
            </Row>
            <Spacer y={4} />
            <Row
              css={{
                margin: 0,
                padding: 0,
                width: "100%",
                "@media (max-width: 960px)": {
                  display: "none",
                },
              }}>
              <ServiceComponent
                title='Native Apps'
                desc='I build cross-platform (Android,iOS,Windows,MacOS, Web,Linux) Apps using Flutter.'
                bottomBorder={true}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                height={270}
                width='34%'
                icon={
                  <HiOutlineCode
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
              />
              <ServiceComponent
                title='Responsive Web'
                desc='I build responsive websites and web apps using Next.js, React, Javascript, Typescript.'
                height={270}
                bottomBorder={true}
                leftBorder={true}
                rightBorder={true}
                topBorder={true}
                icon={
                  <CgWebsite
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
                width='34%'
              />
              <ServiceComponent
                title='Baas services'
                desc='I have great experience with BaaS like Supabase, Firebase, etc. I can easily manage projects of any complexity.'
                height={270}
                bottomBorder={true}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                icon={
                  <HiOutlineDatabase
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
                width='34%'
              />
            </Row>
            <SizedBox height={80} />
            <Row
              css={{
                margin: 0,
                padding: 0,
                width: "100%",
                "@media (max-width: 960px)": {
                  display: "none",
                },
              }}>
              <ServiceComponent
                title='api Development'
                desc='I can build secure and scalable REST APIs in Node. JS, Deno, and Python.'
                bottomBorder={false}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                height={270}
                width='34%'
                icon={
                  <AiOutlineApi
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
              />
              <ServiceComponent
                title='prototyping'
                desc='I can build prototypes for any kind of application quickly.'
                height={270}
                bottomBorder={false}
                leftBorder={true}
                rightBorder={true}
                topBorder={true}
                icon={
                  <GiProtectionGlasses
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
                width='34%'
              />
              <ServiceComponent
                title='UI/UX Designing'
                desc="Although I'm mainly a  developer, I do care about the UI and UX. Hence, I also do UI design for applications."
                height={270}
                bottomBorder={false}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                icon={
                  <MdOutlineDesignServices
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
                width='34%'
              />
            </Row>
            <Col
              css={{
                margin: 0,
                padding: 0,
                width: "100%",
                display: "none",
                "@media (max-width: 960px)": {
                  display: "block",
                },
              }}>
              <ServiceComponent
                title='Native Apps'
                desc='I build cross-platform (Android,iOS,Windows,MacOS, Web,Linux) Apps using Flutter.'
                bottomBorder={true}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                height={270}
                width='100%'
                icon={
                  <HiOutlineCode
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
              />
              <ServiceComponent
                title='Responsive Web'
                desc='I build responsive websites and web apps using Next.js, React, Javascript, Typescript.'
                height={270}
                bottomBorder={false}
                leftBorder={false}
                rightBorder={false}
                topBorder={false}
                icon={
                  <CgWebsite
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
                width='100%'
              />
              <ServiceComponent
                title='Baas services'
                desc='I have great experience with BaaS like Supabase, Firebase, etc. I can easily manage projects of any complexity.'
                height={270}
                bottomBorder={false}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                icon={
                  <HiOutlineDatabase
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
                width='100%'
              />
              <ServiceComponent
                title='api Development'
                desc='I can build secure and scalable REST APIs in Node. JS, Deno, and Python.'
                bottomBorder={false}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                height={270}
                width='100%'
                icon={
                  <AiOutlineApi
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
              />
              <ServiceComponent
                title='prototyping'
                desc='I can build prototypes for any kind of application quickly.'
                height={270}
                bottomBorder={false}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                icon={
                  <GiProtectionGlasses
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
                width='100%'
              />
              <ServiceComponent
                title='UI/UX Designing'
                desc="Although I'm mainly a  developer, I do care about the UI and UX. Hence, I also do UI design for applications."
                height={270}
                bottomBorder={false}
                leftBorder={false}
                rightBorder={false}
                topBorder={true}
                icon={
                  <MdOutlineDesignServices
                    size={48}
                    style={{
                      display: "flex",
                      margin: "auto",
                      marginTop: 12,
                    }}
                  />
                }
                width='100%'
              />
            </Col>
          </Container>
        </Grid>

        <Grid>
          <Container
            alignItems='center'
            css={{
              background: "white",
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
            }}></Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default ServicesSection;
