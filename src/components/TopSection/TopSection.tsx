import TopImage from "@/components/TopSection/TopImage";
import ScrollDown1 from "./ScrollDown1";
import TopLogo from "./TopLogo";

type Props = {};

const TopSection = (props: Props) => {
  return (
    <>
      {/* レスポンシブスマホ------------------------------------------------------------------------- */}
      <section
        id="section1"
        className="bgColorChange relative flex h-screen items-center justify-center md:hidden"
      >
        <div className="flex h-[70%] w-[90%] flex-col items-center justify-center sm:w-[70%]">
          <TopLogo />
        </div>
        <ScrollDown1 />
      </section>
      {/* レスポンシブPC(md〜)------------------------------------------------------------------------- */}
      <section id="section1Md" className="hidden h-screen grid-cols-2 md:grid ">
        <div className="relative h-full w-full">
          <TopImage />
        </div>
        <div className="bgColorChange relative h-full w-full">
          <div className="absolute top-1/4 flex h-1/2 w-1/2 translate-x-1/2 flex-col items-center">
            <TopLogo />
          </div>
          <ScrollDown1 />
        </div>
      </section>
    </>
  );
};

export default TopSection;
