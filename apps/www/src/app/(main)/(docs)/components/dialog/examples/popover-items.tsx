"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  Popover,
  Select,
  SelectItem,
  Tooltip,
  Text,
} from "@jamsr-ui/react";

export const DialogPopoverItems = () => {
  const { isOpen, onClose, onOpen, setIsOpen } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Open Me</Button>
      <Dialog isOpen={isOpen} onOpenChange={setIsOpen} closeButton={null}>
        <DialogContent>
          <DialogBody className="flex flex-col gap-4">
            <Select>
              <SelectItem value="hola">Hello</SelectItem>
              <SelectItem value="hii">Hola</SelectItem>
              <SelectItem value="bonjour">Bonjour</SelectItem>
              <SelectItem value="Kon'nichiwa">こんにちは</SelectItem>
            </Select>
            <Popover trigger={<Button type="button">Click me</Button>}>
              HOla
            </Popover>
            <Tooltip title="I am tooltip">
              <Button>Tooltip</Button>
            </Tooltip>
            <Text as="h3">Im am dialog Body</Text>
            <Text as="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              molestias sequi? Aperiam fugit dignissimos doloribus doloremque
              ullam commodi libero voluptatum accusantium ut est, explicabo
              eveniet repellat eius ad velit. Recusandae?
            </Text>
            <Text as="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              molestias sequi? Aperiam fugit dignissimos doloribus doloremque
              ullam commodi libero voluptatum accusantium ut est, explicabo
              eveniet repellat eius ad velit. Recusandae?
            </Text>
          </DialogBody>
          <DialogFooter>
            <Button variant="light" onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={onClose} color="primary">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
