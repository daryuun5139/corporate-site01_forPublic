"use client";

import { imageGalleryState } from "@/lib/atoms/imageGalleryState";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import imageGallery01 from "public/sampleImages/aboutUsSection/imageGallery01.jpg";
import imageGallery02 from "public/sampleImages/aboutUsSection/imageGallery02.jpg";
import imageGallery03 from "public/sampleImages/aboutUsSection/imageGallery03.jpg";
import imageGallery04 from "public/sampleImages/aboutUsSection/imageGallery04.jpg";
import imageGallery05 from "public/sampleImages/aboutUsSection/imageGallery05.jpg";
import imageGallery06 from "public/sampleImages/aboutUsSection/imageGallery06.jpg";
import HistoryTableList from "./HistoryTableList";

type Props = {};

const CorporateHistory = (props: Props) => {
  const imageIndex = useRecoilValue(imageGalleryState);

  const gallery = [
    imageGallery01,
    imageGallery02,
    imageGallery03,
    imageGallery04,
    imageGallery05,
    imageGallery06,
  ];

  return (
    <>
      {/* レスポンシブスマホ------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center justify-center lg:hidden">
        <div className="flex w-full pt-4 xs:w-[90%]">
          <HistoryTableList />
        </div>
        <div className="w-[85%] overflow-hidden rounded-sm pt-2 sm:w-[80%]">
          <Image
            src={gallery[Number(imageIndex)]}
            alt="imageGallery"
            width={0}
            height={0}
            className="h-full w-full"
            // loading="lazy"
          />
        </div>
      </div>
      {/* レスポンシブPC(md〜)------------------------------------------------------------------------- */}
      <div className="hidden h-[55%] w-[90%] justify-evenly pt-5 lg:flex">
        <div className="flex w-[45%] overflow-hidden rounded-sm">
          <Image
            src={gallery[Number(imageIndex)]}
            alt="imageGallery"
            width={0}
            height={0}
            className="h-[450px] w-auto"
            loading="lazy"
          />
        </div>
        <div className="flex w-[40%] pt-4">
          <HistoryTableList />
        </div>
      </div>
    </>
  );
};

export default CorporateHistory;
