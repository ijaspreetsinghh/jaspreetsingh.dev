import { Button, Container, Row, Tooltip, Text } from "@nextui-org/react";
import { syncopate } from "../../pages/_app";
import SizedBox from "../ui_components/sized_box";
import Image from "next/image";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
const DownloadCVButton = () => {
  const [isHover, setHover] = useState(false);

  return (
    <Tooltip
      content={
        <Text
          className={syncopate.className}
          css={{ fontSize: 11 }}
          color={"$white"}>
          DOWNLOAD CV NOW!!
        </Text>
      }
      color={"secondary"}>
      <Button
        flat
        onMouseOver={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
        color={"primary"}
        css={{
          // position: "relative",
          // bottom: 8,
          // left: 8,
          height: 70,
          boxShadow: isHover ? "0px 0px #2e2e2e" : "-12px 12px #2e2e2e",
          shapeOutside: "initial",
          transitionDuration: ".45s",

          borderRadius: 0,
          paddingLeft: 16,
          paddingRight: 16,
          width: 238,
          background: "$white",
          display: "flex",
          margin: 0,
          flexDirection: "column",
          "@media (max-width: 450px)": {
            width: 208,
            height: 60,
          },
          // width: "fit-content",
        }}>
        <Row align='center'>
          <Text
            className={syncopate.className}
            // size={"$md"}
            color={"$dark"}
            css={{
              fontSize: 18,
              "@media (max-width: 450px)": {
                fontSize: "$md",
              },
            }}>
            DOWNLOAD CV
          </Text>
          <SizedBox width={6} />
          <FiArrowUpRight size={28} color={"#2e2e2e"} />
        </Row>
      </Button>
    </Tooltip>
  );
};
export default DownloadCVButton;
