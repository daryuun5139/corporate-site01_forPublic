import { atom } from "recoil";

export const imageGalleryState = atom<string>({
  key: "imageGalleryState",
  default: "",
});
