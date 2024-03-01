"use client";

import Image from "next/image";
import introductionImage01 from "public/sampleImages/introductionSection/introductionImage01.jpg";
import introductionImage02 from "public/sampleImages/introductionSection/introductionImage02.jpg";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { windowWidthState } from "@/lib/atoms/windowState";

type Props = {};

const IntroductionSection = (props: Props) => {
  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);

  useEffect(() => {
    if (windowWidth < 850) {
      window.addEventListener("scroll", function () {
        const eles = document.getElementsByClassName("introductionContainerSm");
        for (let i = 0; i < eles.length; i++) {
          const eleTop = eles[i].getBoundingClientRect().top;
          // 画面トップからの距離から画面の高さより小さければ実行する
          if (eleTop <= window.innerHeight) {
            eles[i].classList.add("introductionContainerFadeUp");
          }
        }
      });
    } else if (windowWidth >= 850) {
      window.addEventListener("scroll", function () {
        const ele = document.getElementById("introductionContainer");
        const eleTop = ele!.getBoundingClientRect().top;
        // 画面トップからの距離から画面の高さより小さければ実行する
        if (eleTop <= window.innerHeight - 200) {
          ele!.classList.add("introductionContainerFadeUp");
        }
      });
    }
  });

  return (
    <>
      {/* レスポンシブスマホ--------------------------------------------------------------------------- */}
      <section className="relative flex flex-col items-center justify-center md:hidden">
        <div
          id="introduction01"
          className="introductionContainerSm introduction01 flex w-[90%] flex-col pt-14 opacity-0 sm:w-[70%]"
        >
          <h1 className="font-display text-4xl sm:text-5xl">代表挨拶</h1>
          <p className="flex pb-3 pt-5 text-sm leading-6 sm:text-base sm:leading-7">
            山田太郎税理士・公認会計士事務所は、個人に関する税金のコンサルティングに強みがあることが特徴です。
            <br />
            <br />
            少子高齢化や働き方等の社会の変化に伴う税制改正が着々と進んでいるなか、どのように対応すればいいか分からない、最新の税制に詳しい人が近くにいない、このような悩みを抱えた方から多くのご相談を承ってきました。
            <br />
            <br />
            弊所は、お客様のこのような不安を解消し、心穏やかな生活を送っていただけるよう、税の専門家としてサポートをしています。アドバイスを差し上げて、「やるべきことが明確になって気持ちが楽になった、今日からゆっくり眠れる」などと仰っていただくことが、我々の大きなやりがいです。
            <br />
            <br />
            私自身、学ぶことを怠らず、高い専門性を得ても、ご相談を受ける際にはいつでもクライアントの気持ちに寄り添う姿勢でやっていきたいと考えています。
            どうぞ宜しくお願いいたします。
          </p>
          <p className="text-end font-display">
            山田太郎税理士・公認会計士事務所
            <br /> 公認会計士・税理士 山田太郎
          </p>
        </div>
        <div
          id="introduction02"
          className="introductionContainerSm flex w-[90%] flex-col items-center pt-14 opacity-0 sm:w-[70%] sm:pt-20"
        >
          <div className="relative mb-5 flex flex-col">
            <h1 className="flex text-center font-display text-4xl sm:text-5xl">Profile</h1>
            <p className="absolute -bottom-4 -right-5 text-sm">---プロフィール</p>
          </div>
          <Image
            src={introductionImage02}
            alt="introductionImage02"
            width={0}
            height={0}
            className="introductionImageSm h-[60%] w-full sm:hidden"
            loading="lazy"
          />
          <Image
            src={introductionImage02}
            alt="introductionImage02"
            width={0}
            height={0}
            className="introductionImageTablet hidden w-[70%] sm:flex"
            loading="lazy"
          />
          <div className="flex flex-col">
            <div className="flex items-end justify-center pb-2">
              <p className="font-display text-2xl sm:text-3xl">山田太郎</p>
              <p className="ml-3 font-display text-sm sm:text-base">税理士・公認会計士</p>
            </div>
            <p className="ml-4 sm:text-lg">
              東京都千代田区生まれ千代田区育ち。
              <br />
              東京大学大学院在学中に公認会計士試験合格。
              <br />
              大学院卒業後、監査法人にて経験を積みながら税理士資格を取得。
            </p>
          </div>
        </div>
      </section>
      {/* レスポンシブPC(md〜)------------------------------------------------------------------------- */}
      <section
        id="introductionMd"
        className="hidden h-screen w-full items-center justify-center pt-20 md:flex "
      >
        <div
          id="introductionContainer"
          className="introductionContainer flex h-full w-[90%] justify-evenly opacity-0"
        >
          <div className="flex h-full w-[40%] flex-col items-center">
            <Image
              src={introductionImage01}
              alt="introductionImage01"
              width={0}
              height={0}
              className="introductionImageMd h-[450px] w-auto object-top"
              loading="lazy"
            />
            <div className="flex w-[90%] flex-col pt-4">
              <div className="flex items-end justify-center pb-2">
                <p className="font-display text-2xl">山田太郎</p>
                <p className="ml-3 font-display text-sm">税理士・公認会計士</p>
              </div>
              <p className="ml-4 text-sm lg:text-base">
                東京都千代田区生まれ千代田区育ち。
                <br />
                東京大学大学院在学中に公認会計士試験合格。
                <br />
                大学院卒業後、監査法人にて経験を積みながら税理士資格を取得。
              </p>
            </div>
          </div>
          <div className="flex h-full w-[45%] flex-col">
            <h1 className="font-display text-4xl">代表挨拶</h1>
            <p className="flex pb-8 pt-3 text-sm leading-9 lg:text-base lg:leading-8 xl:leading-10">
              山田太郎税理士・公認会計士事務所は、個人に関する税金のコンサルティングに強みがあることが特徴です。
              <br />
              少子高齢化や働き方等の社会の変化に伴う税制改正が着々と進んでいるなか、どのように対応すればいいか分からない、最新の税制に詳しい人が近くにいない、このような悩みを抱えた方から多くのご相談を承ってきました。
              <br />
              弊所は、お客様のこのような不安を解消し、心穏やかな生活を送っていただけるよう、税の専門家としてサポートをしています。アドバイスを差し上げて、「やるべきことが明確になって気持ちが楽になった、今日からゆっくり眠れる」などと仰っていただくことが、我々の大きなやりがいです。
              <br />
              私自身、学ぶことを怠らず、高い専門性を得ても、ご相談を受ける際にはいつでもクライアントの気持ちに寄り添う姿勢でやっていきたいと考えています。
              どうぞ宜しくお願いいたします。
            </p>
            <p className="text-end font-display text-lg">
              山田太郎税理士・公認会計士事務所
              <br /> 公認会計士・税理士 山田太郎
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroductionSection;
