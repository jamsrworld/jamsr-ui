import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaViewport,
  ScrollBar,
} from "./components/scroll-area";

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const Page = () => {
  return (
    <div>
      <div className="p-4">
        <ScrollArea
          width="300px"
          height="200px"
        >
          <ScrollAreaViewport>
            <div className="px-5 py-[15px]">
              <div className="text-[15px] font-medium leading-[18px] text-violet11">
                Tags
              </div>
              {TAGS.map((tag) => (
                <div
                  className="mt-2.5 text-nowrap border-t border-t-mauve6 pt-2.5 text-[13px] leading-[18px] text-mauve12"
                  key={tag}
                >
                  {tag}
                  {tag}
                  {tag}
                  {tag}
                  {tag}
                  {tag}
                  {tag}
                  {tag}
                </div>
              ))}
            </div>
          </ScrollAreaViewport>
          <ScrollBar orientation="vertical" />
          <ScrollBar orientation="horizontal" />
          <ScrollAreaCorner />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Page;
