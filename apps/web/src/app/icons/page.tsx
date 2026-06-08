import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowLeftToLineIcon,
  ArrowRightIcon,
  ArrowRightToLineIcon,
  ArrowUpIcon,
  AvatarIcon,
  CheckIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  CloseFilledIcon,
  CloseIcon,
  CopyIcon,
  DragDropHorizontalIcon,
  EmailIcon,
  ErrorIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  FileAddIcon,
  FileIcon,
  GalleryIcon,
  ImageAddIcon,
  InfoIcon,
  MinusIcon,
  MusicIcon,
  PlusIcon,
  RefreshIcon,
  SearchIcon,
  StarIcon,
  SuccessIcon,
  TrashIcon,
  VideoIcon,
  WarningIcon,
  ZipIcon,
} from "@jamsrui/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Icons",
};

const icons: {
  title: string;
  items: {
    title: string;
    icon: (props: any) => React.ReactElement;
  }[];
}[] = [
  {
    title: "Arrow Icons",
    items: [
      { title: "Arrow Down", icon: ArrowDownIcon },
      { title: "Arrow Up", icon: ArrowUpIcon },
      { title: "Arrow Left", icon: ArrowLeftIcon },
      { title: "Arrow Right", icon: ArrowRightIcon },
      { title: "Arrow Left To Line", icon: ArrowLeftToLineIcon },
      { title: "Arrow Right To Line", icon: ArrowRightToLineIcon },
      { title: "Chevron Double Left", icon: ChevronDoubleLeftIcon },
      { title: "Chevron Double Right", icon: ChevronDoubleRightIcon },
      { title: "Chevron Down", icon: ChevronDownIcon },
      { title: "Chevron Left", icon: ChevronLeftIcon },
      { title: "Chevron Right", icon: ChevronRightIcon },
      { title: "Chevron Up", icon: ChevronUpIcon },
      { title: "Chevron Up Down", icon: ChevronsUpDownIcon },
    ],
  },
  {
    title: "Alert Icons",
    items: [
      { title: "Error", icon: ErrorIcon },
      { title: "Info", icon: InfoIcon },
      { title: "Success", icon: SuccessIcon },
      { title: "Warning", icon: WarningIcon },
    ],
  },
  {
    title: "Other Icons",
    items: [
      { title: "Avatar", icon: AvatarIcon },
      { title: "Check", icon: CheckIcon },
      { title: "Close Filled", icon: CloseFilledIcon },
      { title: "Close", icon: CloseIcon },
      { title: "Copy", icon: CopyIcon },
      { title: "Drag Drop Horizontal", icon: DragDropHorizontalIcon },
      { title: "Email", icon: EmailIcon },
      { title: "Eye Closed", icon: EyeClosedIcon },
      { title: "Eye Open", icon: EyeOpenIcon },
      { title: "File Add", icon: FileAddIcon },
      { title: "File", icon: FileIcon },
      { title: "Gallery", icon: GalleryIcon },
      { title: "Image Add", icon: ImageAddIcon },
      { title: "Minus", icon: MinusIcon },
      { title: "Music", icon: MusicIcon },
      { title: "Plus", icon: PlusIcon },
      { title: "Refresh", icon: RefreshIcon },
      { title: "Search", icon: SearchIcon },
      { title: "Star", icon: StarIcon },
      { title: "Trash", icon: TrashIcon },
      { title: "Video", icon: VideoIcon },
      { title: "Zip", icon: ZipIcon },
    ],
  },
];

const Page = () => {
  return (
    <div className="max-w-screen-md mx-auto">
      {/* <div className="flex flex-col gap-4">
        {icons.map((item) => {
          return (
            <Card key={item.title}>
              <Text>{item.title}</Text>
              <CardContent>
                <ul>
                  {item.items.map((item) => {
                    return <li key={item.title}>{item.title}</li>;
                  })}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div> */}

      {icons.map((item) => (
        <div key={item.title}>
          <h2 className="text-2xl mb-4">{item.title}</h2>
          <div className="grid grid-cols-4 gap-4">
            {item.items.map((icon) => (
              <div
                key={icon.title}
                className="flex flex-col items-center"
              >
                <icon.icon className="w-8 h-8" />
                <span>{icon.title}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
