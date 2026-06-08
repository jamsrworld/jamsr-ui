import { ChevronUpIcon } from "@jamsrui/icons";
import { Button } from "jamsrui/button";
import { Menu } from "jamsrui/menu";

export const MenuRadius = () => {
  const radii: Menu.Props["radius"][] = ["none", "sm", "md", "lg"];
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {radii.map((radius) => (
        <Menu
          key={radius}
          radius={radius}
        >
          <Menu.Trigger
            render={
              <Button radius={radius}>
                <ChevronUpIcon />
                Open Me {radius}
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
      ))}
    </div>
  );
};
