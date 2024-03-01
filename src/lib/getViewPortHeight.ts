"use client";

import { useEffect } from "react";

export function getViewPortHeight() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // リサイズの対応
    let vw = window.innerWidth;
    window.addEventListener("resize", () => {
      if (vw === window.innerWidth) {
        return; // 画面の横幅にサイズ変動がないので処理を終える
      }
      // 画面の横幅のサイズ変動があった時のみ高さを再計算する
      vw = window.innerWidth;
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  });
}
