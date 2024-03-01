import { atom } from "recoil";

export const windowWidthState = atom<number>({
  key: "windowWidthState",
  default: 0,
});
