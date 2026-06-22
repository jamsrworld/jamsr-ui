"use client";
import { Button } from "ui/button";
import { Header } from "ui/header";

export const HeaderUsage = (props: Header.Props) => {
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-lg border border-border bg-background">
      <Header
        className="absolute top-0 left-0 right-0 flex justify-between px-4 z-10"
        {...props}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-8 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png"
          alt="logo"
        />
        <Button size="sm">Go to dashboard</Button>
      </Header>
      <div className="h-full overflow-y-auto pt-16 p-4 flex flex-col gap-4 text-foreground-secondary text-sm">
        <p>
          Scroll down to see the header behavior. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit nobis, repudiandae ullam animi
          illum praesentium quidem eius amet deleniti adipisci magnam mollitia
          aspernatur, veniam libero consequuntur.
        </p>
        <p>
          More content to enable scrolling... Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Labore dolores recusandae, hic aliquid
          fugiat commodi architecto alias voluptatem placeat eaque ipsum unde
          velit modi! Ratione impedit reiciendis cum aspernatur illum!
        </p>
        <p>
          Bottom content... Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Excepturi mollitia, perferendis harum quasi sed laboriosam iure
          distinctio placeat, eos magnam laudantium voluptatum provident
          veritatis sequi unde rem vel tempora sit.
        </p>
      </div>
    </div>
  );
};
