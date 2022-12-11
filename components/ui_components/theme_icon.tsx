import Image from "next/image";

const ThemeIcon = () => {
  return (
    <Image
      draggable={false}
      height={66}
      width={66}
      src='/star.svg'
      alt='toggle-theme'
    />
  );
};
export default ThemeIcon;
