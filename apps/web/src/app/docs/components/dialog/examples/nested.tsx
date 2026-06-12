"use client";

import { Button } from "ui/button";
import { Dialog } from "ui/dialog";
import { Text } from "ui/text";

export const DialogNested = (props: Dialog.Props) => {
  return (
    <Dialog {...props}>
      <Dialog.Trigger render={<Button>Click Me!</Button>} />
      <Dialog.Content>
        <Dialog.Header>Heading</Dialog.Header>
        <Dialog.Body className="flex flex-col gap-4">
          <Dialog isNested>
            <Dialog.Trigger render={<Button>Customize</Button>} />
            <Dialog.Content>
              <Dialog.Header>Customize Dialog</Dialog.Header>
              <Dialog.Body>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos corrupti est quos asperiores libero maiores amet
                  non obcaecati odio excepturi illo recusandae tenetur, qui
                  earum dolorem minus, quibusdam optio? Cum.
                </Text>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  );
};
