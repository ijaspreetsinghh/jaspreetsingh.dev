import {
  Navbar,
  Container,
  Text,
  Grid,
  Spacer,
  Col,
  Row,
} from "@nextui-org/react";
import { syncopateLink } from "../../pages/_app";
import JaspreetSinghLogo from "./logo";
import MailIcon from "./mail_icon";
import ThemeIcon from "./theme_icon";
import { useTheme } from "@nextui-org/react";
const MyNavBar = () => {
  const { isDark, type } = useTheme();
  return (
    <Container
      css={{
        background: "$background",
        padding: 0,
        margin: 0,
        height: 70,
        border: "4px solid $text",
        justifyContent: "stretch",
        display: "flex",
      }}
      xl>
      <Grid.Container>
        <Grid>
          <Container
            alignItems='center'
            css={{
              margin: "auto",
              padding: 0,
              "@media (max-width: 650px)": {
                display: "none",
              },
              // paddingRight: 13,
              display: "block",
              borderRight: "4px solid $text",
              width: 66,
              height: 66,
            }}>
            <ThemeIcon />
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
              borderLeft: "4px solid $text",
              height: 62,
              paddingTop: 15,
              background: isDark ? "#2e2e2e" : "$green",

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
            justify='center'
            css={{
              borderLeft: "4px solid $text",
              height: 62,

              paddingTop: 15,
              background: isDark ? "#2e2e2e" : "$green",

              justifyContent: "space-evenly",

              "@xs": {
                display: "flex",
              },
              "@media (max-width: 450px)": {
                maxWidth: 90,
                paddingLeft: 8,
                paddingTop: 15,
                paddingRight: 8,
              },
              "@sm": {
                display: "none",
              },
            }}>
            <Text
              className={syncopateLink.className}
              css={{
                fontSize: 18,
                "@xs": { fontSize: 18 },
                textAlign: "center",
                "@media (max-width: 500px)": {
                  fontSize: 14,
                  paddingTop: 5,
                  display: "flex",
                },
              }}>
              MENU
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
              borderLeft: "4px solid $text",
              width: 66,
              "@media (max-width: 650px)": {
                display: "none",
              },
              height: 62,
            }}>
            <MailIcon />
          </Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};
export default MyNavBar;
