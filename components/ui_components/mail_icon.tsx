import Image from "next/image";
import Link from "next/link";

const MailIcon = () => {
  return (
    <Link href={"mailto:jaspreet.codrity@gmail.com"} about='Email Address'>
      <Image
        height={60}
        width={60}
        src='/mail.svg'
        alt='toggle-theme'
        draggable={false}
      />
    </Link>
  );
};
export default MailIcon;
