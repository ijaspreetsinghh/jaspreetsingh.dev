import { Syncopate } from "@next/font/google";
import { Text } from "@nextui-org/react";

export const syncopate = Syncopate({
  weight: "700",
  subsets: ["latin"],
});
export const syncopateLink = Syncopate({
  weight: "700",

  subsets: ["latin"],
});

export const SyncopateText = ({ children }: { children: any }) => {
  return <Text className={syncopate.className}>{children}</Text>;
};

export const SyncopateLink = ({ children }: { children: any }) => {
  return <Text className={syncopate.className}>{children}</Text>;
};
