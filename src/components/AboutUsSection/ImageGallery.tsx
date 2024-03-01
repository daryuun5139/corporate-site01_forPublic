"use client";

import { imageGalleryState } from "@/lib/atoms/imageGalleryState";
import Image from "next/image";
import imageGallery01 from "public/sampleImages/aboutUsSection/imageGallery01.jpg";
import imageGallery02 from "public/sampleImages/aboutUsSection/imageGallery02.jpg";
import imageGallery03 from "public/sampleImages/aboutUsSection/imageGallery03.jpg";
import imageGallery04 from "public/sampleImages/aboutUsSection/imageGallery04.jpg";
import imageGallery05 from "public/sampleImages/aboutUsSection/imageGallery05.jpg";
import imageGallery06 from "public/sampleImages/aboutUsSection/imageGallery06.jpg";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

type Props = {};

const ImageGallery = (props: Props) => {
  const [imageIndex, setImageIndex] = useRecoilState(imageGalleryState);

  const gallery = [
    imageGallery01,
    imageGallery02,
    imageGallery03,
    imageGallery04,
    imageGallery05,
    imageGallery06,
  ];
  const onClick = (event: ChangeEvent<HTMLInputElement>) => {
    setImageIndex(event.currentTarget.value);
  };

  return (
    <div className="scrollInfinityWrap flex overflow-hidden pb-5 pt-2 md:w-full ">
      {Array(2)
        .fill(0)
        .map((val, i) => {
          return (
            <ul key={i} className="scrollInfinityList flex gap-3 px-2">
              {gallery.map((image, index) => (
                <li
                  key={`${index * (i + 1)}`}
                  className="flex w-[200px] pt-2 hover:cursor-pointer md:w-[250px]"
                >
                  <div className="w-[190px] overflow-hidden rounded-xl shadow-[0px_4px_15px_-5px_rgba(85,85,85,0.75)] duration-300 hover:-translate-y-[4px] hover:opacity-80 hover:shadow-[0px_8px_18px_-5px_rgba(85,85,85,0.75)] md:w-[240px]">
                    <input
                      type="radio"
                      id={`${index * (i + 1)}`}
                      className="peer hidden"
                      name="imageOption"
                      value={`${index}`}
                      onChange={onClick}
                    />
                    <label
                      htmlFor={`${index * (i + 1)}`}
                      className="h-full w-full hover:cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt={`${index * (i + 1)}`}
                        width={0}
                        height={0}
                        className="h-auto w-full"
                        loading="lazy"
                      />
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          );
        })}
    </div>
  );
};

export default ImageGallery;

// 参考：https://rita-plus.com/blog/css-animation-scroll-infinity/
