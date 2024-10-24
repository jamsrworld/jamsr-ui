import { LeftSection } from "./left-section";
import { MainSection } from "./main-section";
import { RightSection } from "./right-section";

const Page = () => {
  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-12 gap-8 pt-24">
      <LeftSection />
      <MainSection />
      <RightSection />
    </div>
  );
};

export default Page;
