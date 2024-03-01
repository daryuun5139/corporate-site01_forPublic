"use client";

import Image from "next/image";
import serviceImage01 from "public/sampleImages/serviceSection/serviceImage01.jpg";
import serviceImage02 from "public/sampleImages/serviceSection/serviceImage02.jpg";
import serviceImage03 from "public/sampleImages/serviceSection/serviceImage03.jpg";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { windowWidthState } from "@/lib/atoms/windowState";

type Props = {};

const ServiceSection = (props: Props) => {
  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);

  useEffect(() => {
    if (windowWidth < 850) {
      window.addEventListener("scroll", function () {
        const eles = document.getElementsByClassName("serviceCardSm");
        for (let i = 0; i < eles.length; i++) {
          const eleTop = eles[i].getBoundingClientRect().top;
          const btnEle = eles[i].children.namedItem("serviceButton");
          // 画面トップからの距離から画面の高さより小さければ実行する
          if (eleTop <= window.innerHeight - 200) {
            eles[i].classList.add("serviceCardSmAnimation");
            btnEle!.classList.add("is-active");
          }
        }
      });
    } else if (windowWidth >= 850) {
      window.addEventListener("scroll", function () {
        const ele = document.getElementById("serviceCardContainer");
        const eles = document.getElementsByClassName("serviceCard");
        const eleTop = ele!.getBoundingClientRect().top;
        // 画面トップからの距離から画面の高さより小さければ実行する
        if (eleTop <= window.innerHeight - 400) {
          for (let i = 0; i < eles.length; i++) {
            eles[i].classList.add("serviceCardAnimation");
            let btnEle = eles[i].children.namedItem("serviceButton");
            btnEle!.classList.add("is-active");
          }
        }
      });
    }
  });

  return (
    <>
      {/* レスポンシブスマホ------------------------------------------------------------------------- */}
      <section
        id="service"
        className="relative flex items-center justify-center overflow-hidden pt-14 sm:pt-20 lg:hidden"
      >
        <div className="flex w-full flex-col items-center sm:w-[85%]">
          <div className="relative mb-5 flex flex-col">
            <h1 className="flex text-center font-display text-4xl sm:text-5xl">Our Service</h1>
            <p className="absolute -bottom-4 -right-5 text-sm">---サービス内容</p>
          </div>
          <div className="flex w-[90%] flex-col pt-4">
            {/* 企業・個人の会計業務------------------------------------------------------- */}
            <div className="serviceCardSmFromRight serviceCardSm flex flex-col items-center px-0 pb-8 pt-0">
              <h2 className="text-center text-2xl sm:text-3xl">企業・個人の会計業務</h2>
              <div className="my-3 h-[55%] w-full overflow-hidden rounded-md">
                <Image
                  src={serviceImage01}
                  alt="serviceImage01"
                  width={0}
                  height={0}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <p className="mb-3 leading-7 sm:text-lg">
                企業・個人の会計業務はもちろん経営初心者の方のサポートも行います。
                <br />
                お客様の夢の実現と社員・その家族の幸せを目指し、その上で抱える多くの課題・問題を一緒に解決するため、解決案のご提案と実行のお手伝いをさせていただきます。
              </p>
              <button
                name="serviceButton"
                className="serviceButton flex w-fit cursor-pointer overflow-hidden rounded-md px-20 py-2 text-[#e8e8e8]"
              >
                <span className="font-bold sm:text-lg">詳しくみる</span>
              </button>
              <p className="text-xs">※リンクは現在設定しておりません。</p>
            </div>
            {/* 相続税の申告・ご相談------------------------------------------------------- */}
            <div className="serviceCardSmFromLeft serviceCardSm flex flex-col items-center px-0 pb-8 pt-0">
              <h2 className="text-center text-2xl sm:text-3xl">相続税の申告・ご相談</h2>
              <div className="my-3 h-[55%] w-full overflow-hidden rounded-md">
                <Image
                  src={serviceImage02}
                  alt="serviceImage02"
                  width={0}
                  height={0}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <p className="mb-3 leading-7 sm:text-lg">
                仲の良い親子であっても「お金の話」はなかなか切り出しにくいもの。
                <br />
                山田太郎税理士事務所では、何度も訪問させていただき、お話をうかがいながら申告書類の作成・提出や相続対策のアドバイスなどのお手伝いをさせていただきます。
              </p>
              <button
                name="serviceButton"
                className="serviceButton flex w-fit cursor-pointer overflow-hidden rounded-md px-20 py-2 text-[#e8e8e8]"
              >
                <span className="font-bold sm:text-lg">詳しくみる</span>
              </button>
              <p className="text-xs">※リンクは現在設定しておりません。</p>
            </div>
            {/* 保険・お金のご相談---------------------------------------------------------- */}
            <div className="serviceCardSmFromBottom serviceCardSm flex flex-col items-center p-4 px-0">
              <h2 className="text-center text-2xl sm:text-3xl">保険・お金のご相談</h2>
              <div className="my-3 h-[55%] w-full overflow-hidden rounded-md">
                <Image
                  src={serviceImage03}
                  alt="serviceImage03"
                  width={0}
                  height={0}
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <p className="mb-3 leading-7 sm:text-lg">
                山田太郎税理士事務所では、税に関することだけではなく個人のお金に関する悩みも伺います。
                <br />
                保険に関すること、今後の将来設計など、お話をうかがいながらお手伝いをさせていただきます。
              </p>
              <button
                name="serviceButton"
                className="serviceButton flex w-fit cursor-pointer overflow-hidden rounded-md px-20 py-2 text-[#e8e8e8]"
              >
                <span className="font-bold sm:text-lg">詳しくみる</span>
              </button>
              <p className="text-xs">※リンクは現在設定しておりません。</p>
            </div>
          </div>
        </div>
      </section>
      {/* レスポンシブPC(md〜)------------------------------------------------------------------------- */}
      <section
        id="serviceMd"
        className="hidden h-screen w-full items-center justify-center pt-20 lg:flex"
      >
        <div className="flex h-full w-[90%] flex-col">
          <h1 className="relative pt-1 text-center font-display text-4xl">
            Our Service <span className="absolute bottom-0 pl-5 text-base">---サービス内容</span>
          </h1>
          <div id="serviceCardContainer" className="flex w-full justify-evenly py-10">
            {/* 企業・個人の会計業務------------------------------------------------------- */}
            <div className="serviceCard serviceCard1 flex w-[30%] flex-col items-center p-4">
              <h2 className="text-center text-2xl">企業・個人の会計業務</h2>
              <div className="my-3 h-[55%] w-full overflow-hidden rounded-md">
                <Image
                  src={serviceImage01}
                  alt="serviceImage01"
                  width={0}
                  height={0}
                  className="w-auto lg:h-[200px] xl:h-[250px]"
                  loading="lazy"
                />
              </div>
              <p className="pb-3 leading-7">
                企業・個人の会計業務はもちろん経営初心者の方のサポートも行います。
                <br />
                お客様の夢の実現と社員・その家族の幸せを目指し、その上で抱える多くの課題・問題を一緒に解決するため、解決案のご提案と実行のお手伝いをさせていただきます。
              </p>
              <button
                name="serviceButton"
                className="serviceButton serviceButton01 flex w-fit cursor-pointer items-center overflow-hidden rounded-md px-20 py-2 text-[#e8e8e8]"
              >
                <span className="font-bold">詳しくみる</span>
              </button>
              <p className="text-xs">※リンクは現在設定しておりません。</p>
            </div>
            {/* 相続税の申告・ご相談------------------------------------------------------- */}
            <div className="serviceCard serviceCard2 flex w-[30%] flex-col items-center p-4">
              <h2 className="text-center text-2xl">相続税の申告・ご相談</h2>
              <div className="my-3 h-[55%] w-full overflow-hidden rounded-md">
                <Image
                  src={serviceImage02}
                  alt="serviceImage02"
                  width={0}
                  height={0}
                  className="w-auto lg:h-[200px] xl:h-[250px]"
                  loading="lazy"
                />
              </div>
              <p className="pb-3 leading-7">
                仲の良い親子であっても「お金の話」はなかなか切り出しにくいもの。
                <br />
                山田太郎税理士事務所では、何度も訪問させていただき、お話をうかがいながら申告書類の作成・提出や相続対策のアドバイスなどのお手伝いをさせていただきます。
              </p>
              <button
                name="serviceButton"
                className="serviceButton serviceButton02 flex w-fit cursor-pointer items-center overflow-hidden rounded-md px-20 py-2 text-[#e8e8e8]"
              >
                <span className="font-bold">詳しくみる</span>
              </button>
              <p className="text-xs">※リンクは現在設定しておりません。</p>
            </div>
            {/* 保険・お金のご相談---------------------------------------------------------- */}
            <div className="serviceCard serviceCard3 flex w-[30%] flex-col items-center p-4">
              <h2 className="text-center text-2xl">保険・お金のご相談</h2>
              <div className="my-3 h-[55%] w-full overflow-hidden rounded-md">
                <Image
                  src={serviceImage03}
                  alt="serviceImage03"
                  width={0}
                  height={0}
                  className="w-auto lg:h-[200px] xl:h-[250px]"
                  loading="lazy"
                />
              </div>
              <p className="pb-3 leading-7">
                山田太郎税理士事務所では、税に関することだけではなく個人のお金に関する悩みも伺います。
                <br />
                保険に関すること、今後の将来設計など、お話をうかがいながら親身になってお手伝いをさせていただきます。
                <br />
                お気軽にご相談ください。
              </p>
              <button
                name="serviceButton"
                className="serviceButton serviceButton03 flex w-fit cursor-pointer items-center justify-end overflow-hidden rounded-md px-20 py-2 text-[#e8e8e8]"
              >
                <span className="font-bold">詳しくみる</span>
              </button>
              <p className="text-xs">※リンクは現在設定しておりません。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
