import Image from "next/image";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
const JaspreetSinghLogo = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Image
      src={isDark ? "/jaspreet_singh_white.svg" : "/jaspreet_singh.svg"}
      alt='Logo jaspreet_singh'
      width={245}
      height={32}
      // autoResize={true}
    />
  );
};

export default JaspreetSinghLogo;
