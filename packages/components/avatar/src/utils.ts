import { type AvatarProps } from "./avatar";

export const getFirstChar = (name: string) => name.charAt(0).toUpperCase();

export const getColorByName = (name: string): AvatarProps["color"] => {
  if (["A", "N", "H", "L", "Q"].includes(name)) return "primary";
  if (["F", "G", "T", "I", "J"].includes(name)) return "secondary";
  if (["K", "D", "Y", "B", "O"].includes(name)) return "success";
  if (["P", "E", "R", "S", "U"].includes(name)) return "warning";
  if (["V", "W", "X", "M", "Z"].includes(name)) return "danger";
  return "default";
};
