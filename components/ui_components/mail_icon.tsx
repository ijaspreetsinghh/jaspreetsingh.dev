import Image from "next/image";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
const MailIcon = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Image
      height={60}
      width={60}
      src={isDark ? "/mail_white.svg" : "/mail.svg"}
      alt='toggle-theme'
    />
  );
};
export default MailIcon;
