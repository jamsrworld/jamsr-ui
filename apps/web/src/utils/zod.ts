import { number, object, string } from "zod";

export const zodImage = (name: string) =>
  object({
    name: string().default(""),
    width: number().default(0),
    height: number().default(0),
    placeholder: string().default(""),
    url: string().default(""),
  }).refine((item) => item.url.length > 1, {
    message: `${name} is required`,
  });

export const zodFile = (name: string) =>
  object({
    name: string().default(""),
    size: number().default(0),
    url: string().default(""),
  }).refine((item) => item.url.length > 1, {
    message: `${name} is required`,
  });
