"use client";

import { InfoIcon, SearchIcon, TrashIcon } from "@jamsrui/icons";
import { Kbd } from "jamsrui/kbd";
import { ContextMenu } from "jamsrui/context-menu";

export const ContextMenuStartEndContent = (props: ContextMenu.Props) => {
  return (
    <ContextMenu {...props}>
      <ContextMenu.Trigger>
        <div className="border-border text-foreground-secondary flex w-full items-center justify-center rounded-xl border border-dashed py-12 text-center">
          Right Click Here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
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
        </ContextMenu.Item>
        <ContextMenu.Item>
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
        </ContextMenu.Item>
        <ContextMenu.Item>
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
        </ContextMenu.Item>
        <ContextMenu.Item>
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
        </ContextMenu.Item>
        <ContextMenu.Item
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
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
};
