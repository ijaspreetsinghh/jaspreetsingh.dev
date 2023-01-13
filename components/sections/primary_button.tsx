import { Button, Container, Row, Tooltip, Text } from "@nextui-org/react";
import { syncopate } from "../../pages/_app";
import SizedBox from "../ui_components/sized_box";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
const PrimaryButton = ({
  bgColor,
  textColor,
  shadowColor,
  text,
  tooltipText,
  onClick,
}: {
  bgColor: string;
  textColor: string;
  shadowColor: string;
  text: string;
  tooltipText: string;

  onClick: any;
}) => {
  const [isHover, setHover] = useState(false);

  return (
    <Tooltip
      content={
        <Text
          className={syncopate.className}
          css={{ fontSize: 11, textTransform: "uppercase" }}
          color={"$white"}>
          {tooltipText}
        </Text>
      }
      color={"secondary"}>
      <Button
        flat
        onClick={onClick}
        onMouseOver={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
        color={"primary"}
        css={{
          boxShadow: isHover
            ? `0px 0px ${shadowColor}`
            : `-12px 8px ${shadowColor}`,
          shapeOutside: "initial",
          transitionDuration: ".45s",

          borderRadius: 0,
          padding: 16,
          background: bgColor,
          display: "flex",
          margin: 0,
          width: "max-content",
          height: "fit-content",
          flexDirection: "column",
        }}>
        <Row align='center'>
          <Text
            className={syncopate.className}
            color={textColor}
            css={{
              fontSize: 18,
              textTransform: "uppercase",
              "@media (max-width: 450px)": {
                fontSize: 15,
              },
            }}>
            {text}
          </Text>
          <SizedBox width={6} />
          <FiArrowUpRight size={28} color={textColor} />
        </Row>
      </Button>
    </Tooltip>
  );
};
export default PrimaryButton;
