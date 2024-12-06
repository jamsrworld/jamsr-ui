import { Avatar } from "@jamsr-ui/react";

export const AvatarFallbacks = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar alt="John Deo" width={100} height={100} />
      <Avatar alt="" width={100} height={100}>
        Avatar
      </Avatar>
      <Avatar alt="" width={100} height={100} />
    </div>
  );
};
