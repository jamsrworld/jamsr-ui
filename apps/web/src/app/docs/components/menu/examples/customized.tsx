import { Avatar } from "jamsrui/avatar";
import { Menu } from "jamsrui/menu";

export const MenuCustomized = () => {
  return (
    <Menu radius="sm">
      <Menu.Trigger
        render={
          <button>
            <Avatar>
              <Avatar.Image
                src="https://i.pravatar.cc/150"
                alt="JamsrUI"
              />
            </Avatar>
          </button>
        }
      />
      <Menu.Content>
        <Menu.Item>Add to Library</Menu.Item>
        <Menu.Item>Add to Playlist</Menu.Item>
        <Menu.Item>Play Next</Menu.Item>
        <Menu.Item>Play Last</Menu.Item>
        <Menu.Item>Share</Menu.Item>
        <Menu.Item>Favorite</Menu.Item>
        <Menu.Item disabled>Delete</Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
