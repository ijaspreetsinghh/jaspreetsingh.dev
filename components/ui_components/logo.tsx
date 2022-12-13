import Image from "next/image";
import Link from "next/link";
const JaspreetSinghLogo = () => {
  return (
    <Link href={"https://jaspreetsingh.dev"}>
      <Image
        src='/jaspreet_singh.svg'
        alt='Logo jaspreet_singh'
        draggable={false}
        width={245}
        height={32}
      />
    </Link>
  );
};

export default JaspreetSinghLogo;
