import CorporateHistory from "./CorporateHistory";
import ImageGallery from "./ImageGallery";

type Props = {};

const AboutUsSection = (props: Props) => {
  return (
    <>
      {/* レスポンシブスマホ------------------------------------------------------------------------- */}
      <section id="about" className="flex items-center justify-center pt-14 sm:pt-20 lg:hidden">
        <div className="flex w-[90%] flex-col items-center sm:w-[85%]">
          <div className="relative mb-5 flex flex-col">
            <h1 className="flex text-center font-display text-4xl sm:text-5xl">about us</h1>
            <p className="absolute -bottom-4 -right-5 text-sm">---事務所について</p>
          </div>
          <CorporateHistory />
          <div className="flex w-[90%]">
            <ImageGallery />
          </div>
        </div>
      </section>
      {/* レスポンシブPC(md〜)------------------------------------------------------------------------- */}
      <section
        id="aboutMd"
        className="hidden h-screen w-full items-center justify-center pt-20 lg:flex"
      >
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="relative w-full text-center font-display text-4xl">
            about us <span className="absolute bottom-0 pl-5 text-base">---事務所について</span>
          </h1>
          <CorporateHistory />
          <div className="flex w-[90%] pt-4">
            <ImageGallery />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
