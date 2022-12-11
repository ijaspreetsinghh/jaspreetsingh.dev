import Image from "next/image";
const JaspreetSinghLogo = () => {
  return (
    <Image
      src='/jaspreet_singh.svg'
      alt='Logo jaspreet_singh'
      draggable={false}
      width={245}
      height={32}
      // autoResize={true}
    />
  );
};

export default JaspreetSinghLogo;
