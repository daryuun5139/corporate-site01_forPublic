//Header
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Dynamic_NavBar_Hidden = dynamic(() => import("./NavBar_Hidden"), {
  ssr: false,
});
const Dynamic_NavBar_Normal = dynamic(() => import("./NavBar_Normal"), {
  ssr: false,
});

type Props = {};

export default function Header() {
  const [headerScroll, setHeaderScroll] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const { innerHeight: height, innerWidth: width } = window;
    setWindowHeight(height);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setHeaderScroll(window.scrollY);
      });
    }
  }, []);

  return (
    <>
      {headerScroll >= windowHeight - 100 ? (
        <header className="fixed -top-1 z-10 flex h-0 w-full justify-center md:top-3">
          <Dynamic_NavBar_Hidden />
          <Dynamic_NavBar_Normal />
        </header>
      ) : null}
    </>
  );
}
