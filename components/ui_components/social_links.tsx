import Link from "next/link";
import Image from "next/image";
const SocialLinks = () => {
  return (
    <>
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
    </>
  );
};
export default SocialLinks;
