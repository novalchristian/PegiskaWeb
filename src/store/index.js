import { atom } from "recoil";

const urlBase = atom({
  key: "baseUrl",
  default: "http://localhost:5000/api/",
});

const isUser = atom({
  key: "isUserLogin",
  default: false,
});

export { urlBase, isUser };
