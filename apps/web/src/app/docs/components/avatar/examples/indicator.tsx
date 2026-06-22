"use client";

import { Avatar } from "ui/avatar";
import { Chip } from "ui/chip";

const BadgeIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-500"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25C11.4388 1.25 10.9816 1.48611 10.5656 1.80358C10.1759 2.10089 9.74606 2.53075 9.24319 3.03367L9.20782 3.06904C8.69316 3.5837 8.24449 3.78626 7.55208 3.78626C7.4653 3.78626 7.35579 3.78318 7.23212 3.7797C6.91509 3.77078 6.50497 3.75924 6.14615 3.79027C5.62128 3.83566 4.96532 3.97929 4.46745 4.48134C3.9734 4.97955 3.83327 5.63282 3.78923 6.15439C3.75922 6.50995 3.77075 6.91701 3.77966 7.23178L3.77966 7.23181C3.78317 7.35581 3.78628 7.46549 3.78628 7.55206C3.78628 8.24448 3.58371 8.69315 3.06902 9.20784L3.03367 9.24319C2.53075 9.74606 2.10089 10.1759 1.80358 10.5655C1.48612 10.9816 1.25001 11.4388 1.25 12C1.25001 12.5611 1.48613 13.0183 1.80358 13.4344C2.10095 13.8242 2.53091 14.2541 3.03395 14.7571L3.06906 14.7922C3.40272 15.1258 3.56011 15.3422 3.64932 15.5464C3.73619 15.7453 3.78628 15.9971 3.78628 16.4479C3.78628 16.5347 3.7832 16.6442 3.77972 16.7679C3.7708 17.0849 3.75926 17.495 3.79029 17.8539C3.83569 18.3787 3.97933 19.0347 4.48139 19.5326C4.97961 20.0266 5.63287 20.1667 6.15443 20.2107C6.50997 20.2408 6.91703 20.2292 7.23179 20.2203C7.35581 20.2168 7.4655 20.2137 7.55206 20.2137C7.99328 20.2137 8.24126 20.2581 8.43645 20.3386C8.63147 20.4191 8.84006 20.5632 9.15424 20.8774C9.22129 20.9444 9.30963 21.0391 9.41153 21.1483L9.41176 21.1486L9.41179 21.1486L9.4118 21.1486C9.64176 21.3951 9.94071 21.7155 10.22 21.9596C10.6437 22.33 11.2516 22.75 12 22.75C12.7485 22.75 13.3563 22.33 13.7801 21.9596C14.0593 21.7155 14.3583 21.3951 14.5882 21.1486C14.6902 21.0392 14.7787 20.9445 14.8458 20.8773C15.1599 20.5632 15.3685 20.4191 15.5635 20.3386C15.7587 20.2581 16.0067 20.2137 16.4479 20.2137C16.5345 20.2137 16.6442 20.2168 16.7682 20.2203C17.083 20.2292 17.49 20.2408 17.8456 20.2107C18.3671 20.1667 19.0204 20.0266 19.5186 19.5326C20.0207 19.0347 20.1643 18.3787 20.2097 17.8539C20.2407 17.495 20.2292 17.0849 20.2203 16.7679L20.2203 16.7676C20.2168 16.644 20.2137 16.5346 20.2137 16.4479C20.2137 15.9971 20.2638 15.7453 20.3507 15.5464C20.4399 15.3422 20.5973 15.1258 20.9309 14.7922L20.9661 14.7571C21.4691 14.2541 21.8991 13.8242 22.1964 13.4344C22.5139 13.0183 22.75 12.5611 22.75 12C22.75 11.4388 22.5139 10.9816 22.1964 10.5655C21.8991 10.1759 21.4693 9.74607 20.9664 9.24322L20.931 9.20784C20.5973 8.87416 20.4399 8.65779 20.3507 8.45354C20.2638 8.25468 20.2137 8.00288 20.2137 7.55206C20.2137 7.46534 20.2168 7.35593 20.2203 7.23236L20.2203 7.2321C20.2292 6.91507 20.2407 6.50496 20.2097 6.14615C20.1643 5.62129 20.0207 4.96533 19.5187 4.46747C19.0205 3.97339 18.3672 3.83325 17.8456 3.78921C17.49 3.75919 17.083 3.77072 16.7682 3.77964C16.6442 3.78315 16.5345 3.78626 16.4479 3.78626C15.7553 3.78626 15.3067 3.58361 14.7922 3.06904L14.7568 3.03368C14.2539 2.53075 13.8241 2.10089 13.4344 1.80358C13.0184 1.48611 12.5612 1.25 12 1.25ZM15.7657 10.1432C16.1209 9.72033 16.0661 9.08954 15.6432 8.73432C15.2203 8.37909 14.5895 8.43394 14.2343 8.85683L10.6972 13.0676L9.66603 12.1469C9.25406 11.7791 8.6219 11.8149 8.25407 12.2269C7.88624 12.6388 7.92202 13.271 8.33399 13.6388L10.134 15.246C10.3357 15.4261 10.6018 15.5168 10.8716 15.4975C11.1413 15.4781 11.3918 15.3503 11.5657 15.1432L15.7657 10.1432Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AvatarIndicatorExample = (props: Avatar.Props) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Avatar {...props}>
        <Avatar.Image
          alt="John"
          src={`https://avatar.iran.liara.run/public/boy?username=John`}
        />
        <Avatar.Fallback />
        <Avatar.Indicator>
          <BadgeIcon />
        </Avatar.Indicator>
      </Avatar>
      <Avatar {...props}>
        <Avatar.Image
          alt="John"
          src={`https://avatar.iran.liara.run/public/girl?username=Jamsr`}
        />
        <Avatar.Fallback />
        <Avatar.Indicator>
          <Chip
            size="sm"
            isSquare
            color="primary"
          >
            2
          </Chip>
        </Avatar.Indicator>
      </Avatar>
      <Avatar {...props}>
        <Avatar.Image
          alt="John"
          src={`https://avatar.iran.liara.run/public/girl?username=John`}
        />
        <Avatar.Fallback />
        <Avatar.Indicator>
          <Chip
            isSquare
            variant="dot"
            color="success"
          >
            <Chip.Dot />
          </Chip>
        </Avatar.Indicator>
      </Avatar>
      <Avatar {...props}>
        <Avatar.Image
          alt="John"
          src={`https://avatar.iran.liara.run/public/girl?username=John`}
        />
        <Avatar.Fallback />
        <Avatar.Indicator>
          <Avatar
            size="sm"
            isBordered
            color="warning"
          >
            <Avatar.Image
              alt="John"
              src={`https://avatar.iran.liara.run/public/girl?username=Jamsr`}
            />
            <Avatar.Fallback />
          </Avatar>
        </Avatar.Indicator>
      </Avatar>
      {/*  */}

      <Avatar {...props}>
        <Avatar.Image
          alt="John"
          src={`https://avatar.iran.liara.run/public/girl?username=John`}
        />
        <Avatar.Fallback />
        <Avatar.Indicator>
          <Chip
            isSquare
            variant="dot"
            color="primary"
          >
            <Chip.Dot />
          </Chip>
        </Avatar.Indicator>
      </Avatar>

      <Avatar {...props}>
        <Avatar.Image
          alt="John"
          src={`https://avatar.iran.liara.run/public/girl?username=John`}
        />
        <Avatar.Fallback />
        <Avatar.Indicator className="-top-2 -left-1">
          <Chip
            isSquare
            variant="dot"
            color="danger"
          >
            <Chip.Dot />
          </Chip>
        </Avatar.Indicator>
      </Avatar>

      <Avatar {...props}>
        <Avatar.Image
          alt="John"
          src={`https://avatar.iran.liara.run/public/girl?username=John`}
        />
        <Avatar.Fallback />
        <Avatar.Indicator className="-top-2 -right-1">
          <Chip
            isSquare
            variant="dot"
            color="success"
          >
            <Chip.Dot />
          </Chip>
        </Avatar.Indicator>
      </Avatar>

      <Avatar {...props}>
        <Avatar.Image
          alt="John"
          src={`https://avatar.iran.liara.run/public/girl?username=John`}
        />
        <Avatar.Fallback />
        <Avatar.Indicator className="-bottom-2 -left-1">
          <Chip
            isSquare
            variant="dot"
            color="warning"
          >
            <Chip.Dot />
          </Chip>
        </Avatar.Indicator>
      </Avatar>
    </div>
  );
};
