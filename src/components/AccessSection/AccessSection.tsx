import AccessDetail from "./AccessDetail";
import MapContainer from "./MapContainer";

type Props = {};

const AccessSection = (props: Props) => {
  return (
    <>
      {/* レスポンシブスマホ------------------------------------------------------------------------- */}
      <section
        id="access"
        className="mb-5 flex items-center justify-center pt-14 sm:pt-20 md:hidden"
      >
        <div className="flex w-[90%] flex-col items-center sm:w-[80%]">
          <div className="relative mb-5 flex flex-col">
            <h1 className="flex text-center font-display text-4xl sm:text-5xl">access</h1>
            <p className="absolute -bottom-4 -right-5 text-sm">---アクセス</p>
          </div>
          <AccessDetail />
          <MapContainer />
        </div>
      </section>
      {/* レスポンシブPC(md〜)------------------------------------------------------------------------- */}
      <section
        id="accessMd"
        className="hidden h-screen w-full items-center justify-center pb-20 pt-20 md:flex"
      >
        <div className="flex h-full w-[80%] flex-col">
          <h1 className="relative text-center font-display text-4xl">
            access <span className="absolute bottom-0 pl-5 text-base">---アクセス</span>
          </h1>
          <div className="flex h-full w-full items-center pt-8">
            <AccessDetail />
            <MapContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessSection;
