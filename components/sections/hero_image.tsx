import { Container, Image, Tooltip, Text } from "@nextui-org/react";
import { syncopate } from "../../pages/_app";

const HeroImage = () => {
  return (
    <Container
      css={{
        background: "#0091cb",
        height: 350,
        width: 350,
        margin: "auto",
        marginRight: 50,
        display: "flex",
        border: "4px solid $black",
        justifyContent: "flex-end",
        padding: 0,
        "@media (max-width: 1280px)": {
          height: 300,
          width: 300,
        },
        "@media (max-width: 650px)": {
          height: 270,
          width: 270,
        },
        "@media (max-width: 424px)": {
          height: 200,
          width: 200,
        },
      }}>
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          padding: 0,
        }}>
        <Container
          css={{
            background: "#6be5ef",
            height: 350,
            width: 350,
            display: "flex",
            left: 12,
            position: "relative",
            border: "4px solid $black",
            top: 12,
            justifyContent: "center",
            padding: 0,
            "@media (max-width: 1280px)": {
              height: 300,
              width: 300,
            },
            "@media (max-width: 650px)": {
              height: 270,
              width: 270,
            },
            "@media (max-width: 424px)": {
              height: 200,
              width: 200,
            },
          }}>
          <Container
            css={{
              height: 356,
              position: "relative",
              width: 349,
              left: 12,
              border: "4px solid $black",
              top: 12,
              display: "flex",
              justifyContent: "center",
              padding: 0,
              margin: 0,
              "@media (max-width: 1280px)": {
                height: 300,
                width: 300,
              },
              "@media (max-width: 650px)": {
                height: 270,
                width: 270,
              },
              "@media (max-width: 424px)": {
                height: 200,
                width: 200,
              },
            }}>
            <Tooltip
              content={
                <Text
                  className={syncopate.className}
                  css={{ fontSize: 11 }}
                  color={"$white"}>
                  JASPREET SINGH
                </Text>
              }
              color={"invert"}>
              <Image
                showSkeleton
                src={"/hero.png"}
                objectFit={"fill"}
                alt='Hero Image'
                css={{
                  justifyContent: "center",
                  margin: 0,

                  padding: 0,

                  "@media (max-width: 1280px)": {
                    height: 292,
                    width: 300,
                  },
                  "@media (max-width: 650px)": {
                    height: 262,
                    width: 270,
                  },
                  "@media (max-width: 424px)": {
                    height: 192,
                    width: 200,
                  },
                  // position: "relative",
                }}
              />
            </Tooltip>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default HeroImage;
