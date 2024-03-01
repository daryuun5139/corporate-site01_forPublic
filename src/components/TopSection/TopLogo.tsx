"use client";

import { windowWidthState } from "@/lib/atoms/windowState";
import anime from "animejs";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

type Props = {};

const TopLogo = (props: Props) => {
  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);

  const topLogoAnimation = () => {
    useEffect(() => {
      setWindowWidth(window.innerWidth);
      const pathEls: NodeListOf<SVGPathElement> = document.querySelectorAll(".topLogoPath");
      for (let i = 0; i < pathEls.length; i++) {
        const pathEl = pathEls[i];
        const offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute("stroke-dashoffset", `${offset}`);
        anime({
          targets: pathEl,
          strokeDashoffset: [offset, 0],
          duration: anime.random(1000, 3000),
          delay: anime.random(0, 2000),
          loop: false,
          direction: "normal",
          easing: "easeInOutSine",
          complete: function () {
            anime({
              targets: pathEl,
              fill: "#333233",
            });
          },
        });
      }
    });
    return (
      <>
        {windowWidth ? (
          <div className="flex w-full flex-col items-center justify-center">
            <div className="topLogo flex h-[75%] w-full flex-col items-center md:h-full">
              <svg
                className="flex h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 335 170"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M100.9,80.38c-.67-1.09,0-2.38,1.47-2.87,1.48-.49,3.21,0,3.88,1.09,4.64,7.59,11.01,14.25,16.87,20.39,8.77,9.18,16.45,17.23,16.45,26.06,0,1.2-1.31,2.17-2.94,2.17s-2.94-.97-2.94-2.17c0-7.47-7.19-14.99-15.38-23.57-6.01-6.29-12.54-13.13-17.42-21.1h0ZM169,0c1.62,0,2.94.97,2.94,2.17s-1.32,2.17-2.94,2.17c-19.23,0-36.64,5.76-49.24,15.07-12.6,9.31-20.39,22.18-20.39,36.4,0,.8.01,1.45.04,1.97.03.57.08,1.22.15,1.93.11,1.19-1.1,2.23-2.72,2.32-1.62.08-3.02-.82-3.13-2.01-.06-.61-.11-1.3-.15-2.08-.04-.83-.06-1.54-.06-2.13,0-15.41,8.45-29.37,22.12-39.47C129.27,6.25,148.15,0,169,0h0ZM235.01,82.56c-.77,1.05-2.56,1.45-3.98.87-1.43-.57-1.96-1.89-1.18-2.94,2.57-3.5,4.77-7.23,6.32-11.29,1.55-4.06,2.47-8.48,2.47-13.38,0-11.66-5.24-22.42-14.08-31.05-9.05-8.84-21.87-15.44-36.68-18.52-1.56-.32-2.47-1.52-2.03-2.67.44-1.15,2.06-1.83,3.61-1.5,16.07,3.33,29.97,10.5,39.79,20.08,9.59,9.36,15.27,21.02,15.27,33.66,0,5.3-1,10.12-2.7,14.55-1.69,4.43-4.07,8.45-6.81,12.19h0ZM204.06,125.05c0,1.2-1.32,2.17-2.94,2.17s-2.94-.97-2.94-2.17c0-11.39,8.71-20.13,18.19-29.62h0s.5-.51.5-.51c.96-.97,2.79-1.18,4.1-.47,1.3.71,1.59,2.06.63,3.03l-.5.51h0s0,0,0,0c-8.86,8.88-17.02,17.06-17.02,27.06h0Z"
                    stroke="#333233"
                    className="topLogoPath"
                  />
                  <path
                    d="M130.75,127.22c-1.62,0-2.94-.97-2.94-2.17s1.32-2.17,2.94-2.17h76.5c1.62,0,2.94.97,2.94,2.17s-1.31,2.17-2.94,2.17h-76.5Z"
                    stroke="#333233"
                    className="topLogoPath"
                  />
                  <path
                    d="M138.11,140.27c-1.62,0-2.94-.98-2.94-2.17s1.32-2.17,2.94-2.17h61.79c1.62,0,2.94.97,2.94,2.17s-1.32,2.17-2.94,2.17h-61.79Z"
                    stroke="#333233"
                    className="topLogoPath"
                  />
                  <path
                    d="M145.46,153.32c-1.62,0-2.94-.98-2.94-2.17s1.31-2.17,2.94-2.17h47.08c1.62,0,2.94.97,2.94,2.17s-1.32,2.17-2.94,2.17h-47.08Z"
                    stroke="#333233"
                    className="topLogoPath"
                  />
                  <path
                    d="M151.59,74.3v-12.82c0-6.02-2.31-9.27-5.27-10.53-1.32-.56-2.81-.73-4.28-.57-1.54.17-3.05.69-4.32,1.47-2.6,1.62-4.14,4.37-2.92,7.6,1.98,5.23,6.83,9.64,12.71,12.86,1.32.72,2.69,1.39,4.08,1.99h0ZM157.47,138.1c0,1.2-1.31,2.17-2.94,2.17s-2.94-.98-2.94-2.17v-58.89c-2.61-.95-5.17-2.09-7.58-3.41-6.84-3.75-12.5-8.94-14.87-15.19-1.91-5.06.61-9.45,4.81-12.06,2.1-1.31,4.64-2.18,7.26-2.46,2.7-.29,5.49.04,8.02,1.11,4.63,1.97,8.24,6.45,8.24,14.28v14.92c3.98,1.15,7.97,1.76,11.53,1.76,1.62,0,2.94.97,2.94,2.17s-1.32,2.17-2.94,2.17c-3.6,0-7.55-.52-11.53-1.51v57.1Z"
                    stroke="#333233"
                    className="topLogoPath"
                  />
                  <path
                    d="M189.68,74.3c1.4-.6,2.77-1.26,4.08-1.99,5.88-3.22,10.73-7.63,12.71-12.86,1.22-3.22-.33-5.98-2.92-7.6-1.27-.79-2.78-1.31-4.32-1.47-1.47-.16-2.96,0-4.28.57-2.96,1.26-5.27,4.5-5.27,10.53v12.82h0ZM183.8,80.99c-3.98.98-7.92,1.51-11.53,1.51-1.62,0-2.94-.97-2.94-2.17s1.32-2.17,2.94-2.17c3.56,0,7.55-.61,11.53-1.76v-14.92c0-7.83,3.6-12.31,8.24-14.28,2.53-1.08,5.32-1.4,8.02-1.11,2.62.28,5.15,1.15,7.26,2.46,4.2,2.61,6.72,7,4.81,12.06-2.36,6.25-8.03,11.44-14.87,15.19-2.4,1.32-4.96,2.46-7.58,3.41v58.89c0,1.2-1.32,2.17-2.94,2.17s-2.94-.98-2.94-2.17v-57.1Z"
                    stroke="#333233"
                    className="topLogoPath"
                  />
                </g>
              </svg>
              <p className="topSectionText flex flex-col items-center justify-center font-display opacity-0">
                <span className="text-2xl xs:text-3xl sm:text-4xl">山田太郎</span>
                <span className="leading-5 xs:text-xl sm:text-2xl md:text-xl"> 税理士</span>
                <span className="leading-5 xs:text-xl sm:text-2xl md:text-xl">
                  公認会計士事務所
                </span>
              </p>
            </div>
            <p className="topSectionText flex pt-3 text-center font-display text-2xl opacity-0 xs:text-3xl sm:text-4xl">
              個人に寄り添ったサポートを目指します。
            </p>
          </div>
        ) : null}
      </>
    );
  };
  return <> {topLogoAnimation()}</>;
};

export default TopLogo;
