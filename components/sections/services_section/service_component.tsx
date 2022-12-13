import { Container, Spacer, Text } from "@nextui-org/react";
import { robotoMono, syncopate } from "../../../pages/_app";
import { useState } from "react";
const ServiceComponent = ({
  title,
  desc,
  width,
  height,
  icon,
  leftBorder,
  topBorder,
  bottomBorder,
  rightBorder,
}: {
  title: string;
  leftBorder: boolean;
  topBorder: boolean;
  bottomBorder: boolean;
  rightBorder: boolean;
  desc: string;
  width: number | string;
  height: number;
  icon: any;
}) => {
  const [isHover, setHover] = useState(false);
  return (
    <Container
      onMouseOver={(e) => {
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setHover(false);
      }}
      css={{
        background: isHover ? "$lightOrange" : "$white",
        transition: "background-color 0.15s ease",

        margin: 0,
        padding: 10,
        // "@media (max-width: 1050px)": {
        //   display: "none",
        // },
        display: "block",
        borderRight: rightBorder ? "4px solid $dark" : "none",
        borderTop: topBorder ? "4px solid $dark" : "none",
        borderLeft: leftBorder ? "4px solid $dark" : "none",
        borderBottom: bottomBorder ? "4px solid $dark" : "none",
        width: width,
        height: height,
      }}>
      <Container
        draggable={false}
        css={{
          margin: 0,
          padding: 0,
          border: "4px solid $black",
          borderRadius: 100,
          width: 80,
          position: "relative",
          height: 80,
          top: -50,
          left: 30,
          background: isHover ? "$yellow" : "$white",
          transition: "background-color 0.15s ease",
          //   justifyContent: "center",
        }}>
        {icon}
      </Container>
      <Text
        className={syncopate.className}
        size={"$lg"}
        css={{
          color: "$black",
          textTransform: "uppercase",
        }}>
        {title}
      </Text>
      <Spacer y={0.2} />
      <Text
        className={robotoMono.className}
        size={"$base"}
        css={{
          color: "$black",
        }}>
        {desc}
      </Text>
    </Container>
  );
};
export default ServiceComponent;
