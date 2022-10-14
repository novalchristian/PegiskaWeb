import { atom } from "recoil";

const urlBase = atom({
  key: "baseUrl",
  default: "https://api.pegiska.my.id/",
});

const isUser = atom({
  key: "isUserLogin",
  default: false,
});

export { urlBase, isUser };
