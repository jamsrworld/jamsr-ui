"use client";

import { ChevronUpIcon, InfoIcon, SearchIcon, TrashIcon } from "@jamsrui/icons";
import { Button } from "ui/button";
import { Kbd } from "ui/kbd";
import { Menu } from "ui/menu";

export const MenuStartEndContent = (props: Menu.Props) => {
  return (
    <Menu {...props}>
      <Menu.Trigger
        render={
          <Button>
            <ChevronUpIcon />
            Open Me
          </Button>
        }
      />
      <Menu.Content>
        <Menu.Item>
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Add to Library
          <Kbd
            className="ml-auto"
            keys={["command"]}
          >
            L
          </Kbd>
        </Menu.Item>
        <Menu.Item>
          <InfoIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Add to Playlist
          <Kbd
            className="ml-auto"
            keys={["command"]}
          >
            P
          </Kbd>
        </Menu.Item>
        <Menu.Item>
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Share
          <Kbd
            className="ml-auto"
            keys={["command"]}
          >
            S
          </Kbd>
        </Menu.Item>
        <Menu.Item>
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Favorite
          <Kbd
            className="ml-auto"
            keys={["command"]}
          >
            F
          </Kbd>
        </Menu.Item>
        <Menu.Item
          color="danger"
          className="hover:bg-danger"
        >
          <TrashIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Delete
          <Kbd
            className="ml-auto"
            keys={["command"]}
          >
            D
          </Kbd>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
