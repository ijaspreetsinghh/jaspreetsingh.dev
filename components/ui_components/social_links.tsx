"use client";
import Link from "next/link";
import { Tooltip, Text } from "@nextui-org/react";
import { robotoMono } from "../../pages/_app";
import {
  FiMail,
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";
import SizedBox from "./sized_box";
const SocialLinks = ({
  bottomMargin,
  rightMargin,
}: {
  rightMargin?: number;
  bottomMargin?: number;
}) => {
  return (
    <>
      <Tooltip
        content={
          <Text
            className={robotoMono.className}
            css={{ fontSize: 12, fontWeight: "bold" }}
            color={"$white"}>
            LinkedIn Profile
          </Text>
        }
        color={"secondary"}>
        <Link
          href={"https://www.linkedin.com/in/ijaspreetsinghh/"}
          about='LinkedIn Profile Url'
          style={{}}
          target={"_blank"}>
          <FiLinkedin size={28} color={"#2e2e2e"} />
        </Link>
      </Tooltip>

      <SizedBox height={bottomMargin} width={rightMargin} />

      <Tooltip
        content={
          <Text
            className={robotoMono.className}
            css={{ fontSize: 12, fontWeight: "bold" }}
            color={"$white"}>
            Instagram Profile
          </Text>
        }
        color={"secondary"}>
        <Link
          href={"https://www.instagram.com/jaspreetsingh.dev/"}
          target={"_blank"}
          style={{ marginBottom: bottomMargin, marginRight: rightMargin }}
          about='Instagram Profile Url'>
          <FiInstagram size={28} color={"#2e2e2e"} />
        </Link>
      </Tooltip>

      <SizedBox height={bottomMargin} width={rightMargin} />

      <Tooltip
        content={
          <Text
            className={robotoMono.className}
            css={{ fontSize: 12, fontWeight: "bold" }}
            color={"$white"}>
            Github Profile
          </Text>
        }
        color={"secondary"}>
        <Link
          target={"_blank"}
          href={"https://github.com/ijaspreetsinghh"}
          style={{ marginBottom: bottomMargin, marginRight: rightMargin }}
          about='Github Profile Url'>
          <FiGithub size={28} color={"#2e2e2e"} />
        </Link>
      </Tooltip>

      <SizedBox height={bottomMargin} width={rightMargin} />

      <Tooltip
        content={
          <Text
            className={robotoMono.className}
            css={{ fontSize: 12, fontWeight: "bold" }}
            color={"$white"}>
            Twitter Profile
          </Text>
        }
        color={"secondary"}>
        <Link
          href={"https://twitter.com/ijaspreetsinghh"}
          style={{ marginBottom: bottomMargin, marginRight: rightMargin }}
          target={"_blank"}
          about='Twitter Profile Url'>
          <FiTwitter size={28} color={"#2e2e2e"} />
        </Link>
      </Tooltip>

      <SizedBox height={bottomMargin} width={rightMargin} />

      <Tooltip
        content={
          <Text
            className={robotoMono.className}
            css={{ fontSize: 12, fontWeight: "bold" }}
            color={"$white"}>
            Email
          </Text>
        }
        color={"secondary"}>
        <Link href={"mailto:jaspreet.codrity@gmail.com"} about='Email Address'>
          <FiMail size={28} color={"#2e2e2e"} />
        </Link>
      </Tooltip>
    </>
  );
};
export default SocialLinks;
