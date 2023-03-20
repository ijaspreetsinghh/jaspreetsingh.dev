"use client";
import {
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Image,
  Text,
  Link,
} from "@nextui-org/react";

import { useState } from "react";
import { robotoMono, syncopate } from "../../../pages/_app";
import SizedBox from "../../ui_components/sized_box";
import PrimaryButton from "../primary_button";

const Work = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => {
  const [isHover, setHover] = useState(false);
  return (
    <Container
      md
      css={{
        display: "block",
        width: "100%",
        marginBottom: 24,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 16,
      }}>
      <Text
        className={syncopate.className}
        css={{
          textTransform: "uppercase",
          fontSize: 24,
          width: "100%",
          display: "flex",
        }}>
        {title}
      </Text>
      <Text
        className={robotoMono.className}
        css={{
          fontSize: 14,
          width: "100%",
          display: "flex",
        }}>
        {desc}
      </Text>
      <SizedBox height={20} />
      <Link href={link} target='_blank' css={{ width: "fit-content" }}>
        <PrimaryButton
          bgColor='black'
          onClick={() => {}}
          shadowColor='#ffb9db'
          text='Link'
          textColor='white'
          tooltipText='Visit Project'
        />
      </Link>
    </Container>
  );
};

const WorkMain = () => {
  const items = [






    {
      title: "Super Bird",
      link: "https://play.google.com/store/apps/details?id=dev.jaspreetsingh.flappybird",
      description:
        "A worldwide Super Bird craze was started by this incredibly addictive arcade game. To move through each series of pipes, you must act rapidly. Timing is important if you want to keep flying and earn a good score. Don't crash as you pass through the pipes!",
    },
    {
      title: "Tic Tac Toe: 3×3",
      link: "https://play.google.com/store/apps/details?id=dev.jaspreetsingh.tictactoe",
      description:
        "Looking for a fun and challenging game to play on your mobile device? Look no further than Tic Tac Toe: 3×3. This classic game has been entertaining players of all ages for decades and now you can enjoy it on the go.",
    },
    {
      title: "QR & Barcode Scanner",
      link: "https://play.google.com/store/apps/details?id=dev.jaspreetsingh.qrscan",
      description:
        "QR & Barcode Scanner is a modern QR code scanner and barcode scanner with all the features you need.",
    },



    {
      title: "PetsPOS with AI",
      link: "https://petsposai.web.app/",
      description:
        "PetsPOS with Al is intelligence for your business! A supportive background of intelligence that will be helpful and not overbearing.",
    },

    {
      title: "Maven Credit Union",
      link: "https://mavenfederal.org/",
      description:
        "The First Blockchain Credit Union. The Proposed Maven Federal Credit Union, sponsored by the Government Blockchain Association (GBA), is currently in the pre-charter phase with the National Credit Union Administration ( https://ncua.gov ).",
    },

    {
      title: "Phractional",
      link: "https://phractional.vercel.app/",
      description:
        "Phractional is the operator of a member only cooperative fractional asset platform. The offerings are available through our platform  software app.",
    },

    {
      title: "Gravos",
      link: "https://gravos.vercel.app/",
      description:
        "Gravos system has an integrated Kinetic and battery system that stores 80% of your solar energy for backup protection, so when the grid goes down your power stays on. Your system detects outages and automatically continues power output running your home for days/weeks/months.",
    },
  ];

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
              }}></Col>
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
            {" "}
            <Spacer
              y={0}
              css={{
                height: 80,
                "@media (max-width: 650px)": {
                  height: 50,
                },
              }}
            />
            {items.map((item, index) => (
              <Work
                key={index}
                desc={item.description}
                link={item.link}
                title={item.title}
              />
            ))}
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
            css={{
              background: "$white",
              margin: "auto",

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

export default WorkMain;
