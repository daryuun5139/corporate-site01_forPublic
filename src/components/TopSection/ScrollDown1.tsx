"use client";

import { useEffect } from "react";

type Props = {};

const ScrollDown1 = (props: Props) => {
  // useEffect(() => {
  //   const scrollDown = document.getElementsByClassName("scrollDown1");
  //   for (let i = 0; i < scrollDown.length; i++) {
  //     scrollDown[i].animate(
  //       [
  //         { bottom: "1%", offset: 0 },
  //         { bottom: "2%", offset: 0.5 },
  //         { bottom: "1%", offset: 1 },
  //       ],
  //       {
  //         duration: 1000,
  //         iterations: Infinity,
  //         easing: "ease-in",
  //       }
  //     );
  //   }
  // });
  return (
    <div className="scrollDown1 absolute bottom-0 right-5">
      <span>Scroll</span>
    </div>
  );
};

export default ScrollDown1;
