import { Input } from "@jamsr-ui/input";
import { Popover } from "@jamsr-ui/popover";
import { Switch } from "@jamsr-ui/switch";
import { useState } from "react";
import ToolbarItem from "./menu-item";

type Props = {
  onLink: (url: string, newTab: boolean) => void;
};

export const LinkMenuBarItem = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { onLink } = props;
  const [formData, setFormData] = useState({
    url: "",
    newTab: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onLink(formData.url, formData.newTab);
    setIsOpen(false);
  };

  return (
    <Popover
      trigger={
        <ToolbarItem
          icon="link"
          isActive={() => false}
          onClick={() => setIsOpen(true)}
          title="Link"
        />
      }
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <Input
          value={formData.url}
          onValueChange={(e) => setFormData({ ...formData, url: e })}
          placeholder="Enter Url"
        />
        <Switch
          checked={formData.newTab}
          onCheckedChange={(e) => setFormData({ ...formData, newTab: e })}
          label="Open in new tab"
        />
        <button type="submit" className="sr-only" hidden aria-label="Submit" />
      </form>
    </Popover>
  );
};
