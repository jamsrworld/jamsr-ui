"use client";

import { sidebarItems } from "@/app/(main)/(docs)/sidebar";
import { SearchIcon } from "@/components/icons";
import { NextLink } from "@/components/next";
import { useDisclosure, useKeyPress } from "@jamsr-ui/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  Input,
  Kbd,
} from "@jamsr-ui/react";
import { ChevronRightIcon, CloseIcon } from "@jamsr-ui/shared-icons";
import { type Route } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

const items = sidebarItems.map((item) => item.items).flat();

export const SearchBar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose, setIsOpen } = useDisclosure();
  const handleOnClick = () => {
    onOpen();
  };
  const [search, setSearch] = useState("");
  const filteredItems = items.filter((item) =>
    item.heading.toLowerCase().includes(search.toLowerCase()),
  );

  const onClearSearch = () => {
    setSearch("");
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: Route,
  ) => {
    e.preventDefault();
    onClearSearch();
    onClose();
    router.push(url);
  };

  useKeyPress("k", (event) => {
    if (event.metaKey || event.ctrlKey) {
      event.preventDefault();
      onOpen();
    }
  });

  return (
    <>
      <Button
        startContent={<SearchIcon />}
        onClick={handleOnClick}
        className="min-w-40 justify-start px-2"
        endContent={
          <Kbd className="ml-auto" keys={["command"]}>
            K
          </Kbd>
        }
      >
        Search
      </Button>
      <Dialog isScroll hideCloseButton isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[500px] overflow-y-auto">
          <DialogHeader>
            <Input
              size="lg"
              startContent={<SearchIcon />}
              placeholder="Search"
              value={search}
              onValueChange={setSearch}
              type="search"
              autoComplete="off"
              endContent={
                search.length > 0 ? (
                  <Button
                    onClick={onClearSearch}
                    isIconOnly
                    size="sm"
                    isRounded
                    variant="light"
                  >
                    <CloseIcon />
                  </Button>
                ) : null
              }
            />
          </DialogHeader>
          <DialogBody>
            <ul className="flex flex-col gap-2">
              {filteredItems.map((item) => (
                <NextLink
                  href={item.path}
                  key={item.heading}
                  className="flex items-center gap-2 rounded-xl bg-content2 p-4 text-foreground hover:bg-content3"
                  onClick={(e) => handleLinkClick(e, item.path)}
                >
                  <span className="grow">{item.heading}</span>
                  <ChevronRightIcon />
                </NextLink>
              ))}
              {filteredItems.length === 0 && (
                <li className="flex flex-col items-center gap-2 rounded-xl text-center text-foreground">
                  <span className="grow">No results for "{search}"</span>
                  <span className="text-foreground-secondary">
                    Try searching for something else.
                  </span>
                </li>
              )}
            </ul>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </>
  );
};
