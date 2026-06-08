import { Button } from "jamsrui/button";
import { Dialog } from "jamsrui/dialog";
import { Text } from "jamsrui/text";

const DialogItem = (
  props: Partial<Dialog.Props> & {
    buttonText?: string;
  },
) => {
  const { buttonText, ...restProps } = props;
  return (
    <Dialog {...restProps}>
      <Dialog.Trigger render={<Button>{buttonText}</Button>} />
      <Dialog.Content>
        <Dialog.Header>Heading</Dialog.Header>
        <Dialog.Body className="flex flex-col gap-4">
          <Text>Im am dialog Body</Text>
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

export const DialogRadius = () => {
  const radii: NonNullable<Dialog.Props["radius"]>[] = [
    "none",
    "sm",
    "md",
    "lg",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <DialogItem
          buttonText={`radius ${radius}`}
          key={radius}
          radius={radius}
        />
      ))}
    </div>
  );
};
