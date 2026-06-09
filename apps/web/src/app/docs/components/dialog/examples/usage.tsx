"use client";

import { Button } from "jamsrui/button";
import { Dialog } from "jamsrui/dialog";
import { Text } from "jamsrui/text";

export const DialogUsage = (props: Dialog.Props) => {
  return (
    <Dialog {...props}>
      <Dialog.Trigger render={<Button>Click Me!</Button>} />
      <Dialog.Content>
        <Dialog.Header>Heading</Dialog.Header>
        <Dialog.Body className="flex flex-col gap-4">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            corrupti est quos asperiores libero maiores amet non obcaecati odio
            excepturi illo recusandae tenetur, qui earum dolorem minus,
            quibusdam optio? Cum.
          </Text>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Cancel render={<Button>Cancel</Button>} />
          <Button
            color="primary"
            variant="solid"
          >
            Submit
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};
