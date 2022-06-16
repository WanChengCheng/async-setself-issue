import { atom } from "recoil";

export const stringState = atom({
  key: "str-state",
  //   default: "",
  effects: [
    ({ setSelf }) => {
      setSelf(Promise.resolve("Hello World"));
    //   setSelf("Hello World");
    },
  ],
});
