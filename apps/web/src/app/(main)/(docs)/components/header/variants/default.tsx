import { Button, Header, type HeaderProps, Repeater } from "@jamsr-ui/react";

export const HeaderDefault = (props: HeaderProps) => {
  return (
    <>
      <Header className="flex justify-between px-4" {...props}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png"
          alt="logo"
        />
        <Button>Go to dashboard</Button>
      </Header>
      <div className="flex flex-col items-center justify-center gap-8 p-4">
        <Repeater count={12}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            nobis, repudiandae ullam animi illum praesentium quidem eius amet
            deleniti adipisci magnam mollitia aspernatur, veniam libero
            consequuntur. Hic nesciunt qui neque.
          </p>
        </Repeater>
      </div>
    </>
  );
};
