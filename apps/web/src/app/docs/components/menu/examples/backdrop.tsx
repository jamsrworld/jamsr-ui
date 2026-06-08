import { ChevronUpIcon } from "@jamsrui/icons";
import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";

const MenuUsage = (props: Pick<Menu.Props, "backdrop">) => {
  const { backdrop } = props;
  return (
    <Menu backdrop={backdrop}>
      <Menu.Trigger
        render={
          <Button>
            <ChevronUpIcon />
            {backdrop ?? "Open Me"}
          </Button>
        }
      />
      <Menu.Content>
        <Menu.Item>Add to Library</Menu.Item>
        <Menu.Item>Add to Playlist</Menu.Item>
        <Menu.Item>Play Next</Menu.Item>
        <Menu.Item>Play Last</Menu.Item>
        <Menu.Item>Share</Menu.Item>
        <Menu.Item>Favorite</Menu.Item>
        <Menu.Item
          disabled
          color="danger"
        >
          Delete
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};

export const MenuBackdrop = () => {
  return (
    <div className="flex justify-center gap-4">
      <MenuUsage backdrop="transparent" />
      <MenuUsage backdrop="opaque" />
      <MenuUsage backdrop="blur" />
    </div>
  );
};
