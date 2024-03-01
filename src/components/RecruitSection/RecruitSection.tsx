import RecruitExplain from "./RecruitExplain";
import RecruitOverview from "./RecruitOverview";

type Props = {};

const RecruitSection = (props: Props) => {
  return (
    <>
      {/* レスポンシブスマホ------------------------------------------------------------------------- */}
      <section id="recruit" className="flex items-center justify-center pt-14 sm:pt-20 lg:hidden">
        <div className="flex w-[90%] flex-col items-center sm:w-[80%]">
          <div className="relative mb-5 flex flex-col">
            <h1 className="flex text-center font-display text-4xl sm:text-5xl">recruit</h1>
            <p className="absolute -bottom-4 -right-5 text-sm">---採用情報</p>
          </div>
          <RecruitOverview />
          <RecruitExplain />
        </div>
      </section>
      {/* レスポンシブPC(md〜)------------------------------------------------------------------------- */}
      <section
        id="recruitMd"
        className="hidden h-screen w-full items-center justify-center pt-20 lg:flex"
      >
        <div className="flex h-full w-[80%] flex-col">
          <h1 className="relative text-center font-display text-4xl">
            recruit <span className="absolute bottom-0 pl-5 text-base">---採用情報</span>
          </h1>
          <div className="flex justify-evenly gap-10 pt-3">
            <RecruitOverview />
            <RecruitExplain />
          </div>
        </div>
      </section>
    </>
  );
};

export default RecruitSection;
