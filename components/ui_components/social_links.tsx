import Link from "next/link";
import Image from "next/image";
import { Tooltip, Text } from "@nextui-org/react";
import { robotoMono, syncopate } from "../../pages/_app";
const SocialLinks = () => {
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
          about='LinkedIn Profile Url'>
          <Image
            src='/linkedin.svg'
            height={42}
            width={42}
            style={{ display: "flex", margin: "auto" }}
            alt='LinkedIn Profile'
          />
        </Link>
      </Tooltip>
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
          about='Instagram Profile Url'>
          <Image
            src='/insta.svg'
            height={42}
            width={42}
            style={{ display: "flex", margin: "auto" }}
            alt='Instagram Profile'
          />
        </Link>
      </Tooltip>
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
          href={"https://github.com/ijaspreetsinghh"}
          about='Github Profile Url'>
          <Image
            src='/github.svg'
            height={42}
            width={42}
            style={{ display: "flex", margin: "auto" }}
            alt='Github Profile'
          />
        </Link>
      </Tooltip>
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
          about='Twitter Profile Url'>
          <Image
            src='/twitter.svg'
            height={42}
            width={42}
            style={{ display: "flex", margin: "auto" }}
            alt='Twitter Profile'
          />
        </Link>
      </Tooltip>
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
          <Image
            src='/mail.svg'
            height={42}
            width={42}
            style={{ display: "flex", margin: "auto" }}
            alt='Email'
          />
        </Link>
      </Tooltip>
    </>
  );
};
export default SocialLinks;
