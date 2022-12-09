import Image from "next/image";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
const ThemeIcon = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Image
      height={66}
      width={66}
      onClick={() => {
        if (isDark) {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
      src={isDark ? "/star_light.svg" : "/star.svg"}
      alt='toggle-theme'
    />
  );
};
export default ThemeIcon;
