import { VariantPage } from "@/components/docs/variant-page";
import {
  AstroIcon,
  GatsbyIcon,
  NextJsIcon,
  RemixIcon,
  ViteIcon,
} from "@/components/icons";
import { NextLink } from "@/components/next";
import { Card, CardContent, Text } from "@jamsr-ui/react";
import { type Route, type Metadata } from "next";

const title = "Installation";
const description = "How to install dependencies and structure your app.";

export const metadata: Metadata = {
  title,
  description,
};

const items: {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  link: Route;
}[] = [
  {
    title: "Next.Js",
    icon: NextJsIcon,
    link: "/installation/next",
  },
  {
    title: "Vite",
    icon: ViteIcon,
    link: "/installation/vite",
  },
  {
    title: "Remix",
    icon: RemixIcon,
    link: "/installation/remix",
  },
  {
    title: "Astro",
    icon: AstroIcon,
    link: "/installation/astro",
  },
  {
    title: "Gatsby",
    icon: GatsbyIcon,
    link: "/installation/gatsby",
  },
];

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {items.map((item) => {
          const { link, title } = item;
          return (
            <Card
              className="hover:opacity-80 theme-light:bg-content2"
              key={title}
              as={NextLink}
              href={link}
            >
              <CardContent className="flex items-center gap-4">
                <item.icon className="size-8" />
                <Text as="p" variant="body1">
                  {title}
                </Text>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </VariantPage>
  );
};

export default Page;
