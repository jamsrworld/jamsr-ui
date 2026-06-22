"use client";

import { Button } from "ui/button";
import { Dialog } from "ui/dialog";
import { Text } from "ui/text";

export const DialogWithClose = (props: Dialog.Props) => {
  return (
    <Dialog {...props}>
      <Dialog.Trigger render={<Button>Open Me</Button>} />
      <Dialog.Content>
        <Dialog.Header>
          Heading
          <Dialog.Close className="absolute right-2 top-2" />
        </Dialog.Header>
        <Dialog.Body className="flex flex-col gap-4">
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            molestias sequi? Aperiam fugit dignissimos doloribus doloremque
            ullam commodi libero voluptatum accusantium ut est, explicabo
            eveniet repellat eius ad velit. Recusandae?
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            molestias sequi? Aperiam fugit dignissimos doloribus doloremque
            ullam commodi libero voluptatum accusantium ut est, explicabo
            eveniet repellat eius ad velit. Recusandae?
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
