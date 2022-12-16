import { Button, Container, Row, Image, Text } from "@nextui-org/react";
import { useState } from "react";
import { syncopate } from "../../../pages/_app";
import SizedBox from "../../ui_components/sized_box";
const TechnologyCapsule = ({
  text,
  imageSource,
}: {
  text: string;
  imageSource: string;
}) => {
  return (
    <Button
      flat
      color={"primary"}
      css={{
        border: "4px solid #2e2e2e",
        borderRadius: 0,
        padding: 12,
        background: "#fff",
        display: "flex",
        margin: 0,
        width: "max-content",
        height: "fit-content",
        flexDirection: "column",
      }}>
      <Row align='center'>
        <Image
          alt={text}
          src={imageSource}
          objectFit='contain'
          height={30}
          width={30}
        />
        <SizedBox width={10} />
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
          {text}
        </Text>
      </Row>
    </Button>
  );
};
export default TechnologyCapsule;
