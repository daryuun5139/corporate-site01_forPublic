import Link from "next/link";
import FooterLogo from "./FooterLogo";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      {/* レスポンシブスマホ------------------------------------------------------------------------- */}
      <section id="footer" className="flex items-center justify-center bg-[#457b9d] py-5 md:hidden">
        <div className="flex w-[90%] flex-col items-center">
          <ul className="flex flex-col items-center font-extralight leading-10 text-white">
            <li className="hover:underline">
              <Link href="#section1" className="w-full">
                <span>トップページ</span>
              </Link>
            </li>
            <li>
              <ul className="flex justify-evenly gap-3">
                <li className="hover:underline">
                  <Link href="#introduction01" className="w-full">
                    <span>代表挨拶</span>
                  </Link>
                </li>
                <li className="hover:underline">
                  <Link href="#introduction02" className="w-full">
                    <span>プロフィール</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hover:underline">
              <Link href="#service" className="w-full">
                <span>サービスについて</span>
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="#about" className="w-full">
                <span>事務所について</span>
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="#recruit" className="w-full">
                <span>採用情報</span>
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="#access" className="w-full">
                <span>アクセス</span>
              </Link>
            </li>
          </ul>
          <div className="mt-2 flex h-[100px] w-full flex-col items-center">
            <FooterLogo />
            <p className="font-extralight text-white">東京都千代田区丸の内1−1−1</p>
          </div>
        </div>
      </section>
      {/* レスポンシブPC------------------------------------------------------------------------- */}
      <section id="footer" className="hidden items-center justify-center bg-[#457b9d] py-5 md:flex">
        <div className="flex w-[70%] flex-col items-center">
          <ul className="flex w-full items-center justify-evenly font-extralight leading-10 text-white">
            <li className="flex hover:underline">
              <Link href="#section1Md" className="w-full">
                <span>トップページ</span>
              </Link>
            </li>
            <li className="flex hover:underline">
              <Link href="#introductionMd" className="w-full">
                <span>代表挨拶</span>
              </Link>
            </li>
            <li className="flex hover:underline">
              <Link href="#serviceMd" className="w-full">
                <span>サービスについて</span>
              </Link>
            </li>
            <li className="flex hover:underline">
              <Link href="#aboutMd" className="w-full">
                <span>事務所について</span>
              </Link>
            </li>
            <li className="flex hover:underline">
              <Link href="#recruitMd" className="w-full">
                <span>採用情報</span>
              </Link>
            </li>
            <li className="flex hover:underline">
              <Link href="#accessMd" className="w-full">
                <span>アクセス</span>
              </Link>
            </li>
          </ul>
          <div className="mb-3 mt-8 flex h-[100px] w-full flex-col items-center fill-white">
            <FooterLogo />
            <p className="font-extralight text-white">東京都千代田区丸の内1−1−1</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
