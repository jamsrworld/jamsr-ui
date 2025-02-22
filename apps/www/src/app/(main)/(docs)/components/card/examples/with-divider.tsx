import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Switch,
  Text,
} from "@jamsr-ui/react";

export const CardWithDivider = () => {
  return (
    <Card radius="xl">
      <CardHeader
        gutterBottom
        heading="Do Not Disturb"
        classNames={{
          heading: "text-md",
        }}
        endContent={<Switch size="sm" />}
      />
      <Divider />
      <CardContent className="flex flex-col gap-4">
        <Text as="p" className="text-foreground-secondary">
          Activate 'Do Not Disturb' to silence all notifications and focus
          without interruptions during specified hours or tasks.
        </Text>
        <Link
          className="border-b self-start border-dashed  font-medium"
          underline="never"
        >
          Learn More
        </Link>
      </CardContent>
      <Divider />
      <CardFooter gutterTop className="justify-center">
        <Button radius="xl" className="border border-default-300">
          Pause Notifications
        </Button>
      </CardFooter>
    </Card>
  );
};
