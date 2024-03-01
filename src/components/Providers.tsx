"use client";
import { getViewPortHeight } from "@/lib/getViewPortHeight";
import { RecoilRoot } from "recoil";

const Providers = ({ children }: { children: React.ReactNode }) => {
  getViewPortHeight();
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Providers;
