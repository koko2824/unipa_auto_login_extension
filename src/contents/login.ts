import { getElements, } from "./elements";
import { LOGIN_ID, LOGIN_PASSWORD } from "../env";

export const login = (href: string) => {
  const elms = getElements(href);
  if (!elms) return;
  const { userIdElm, passwordElm, buttonElm, error } = elms;
  if (error) return console.error("Unipa Chrome Extension: Login Error");

  if (userIdElm && passwordElm && buttonElm) {
    userIdElm.value = LOGIN_ID;
    passwordElm.value = LOGIN_PASSWORD;
    buttonElm.click();
  }
};
