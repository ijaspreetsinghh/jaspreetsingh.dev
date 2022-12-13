import Image from "next/image";
const GearIcon = ({ height, width }: { height?: number; width?: number }) => {
  return (
    <Image
      src='/gear.svg'
      alt='Services'
      draggable={false}
      width={width ?? 68}
      height={height ?? 68}
    />
  );
};

export default GearIcon;
