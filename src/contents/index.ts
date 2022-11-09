import { getElements } from "./getElements";
import { LOGIN_ID, LOGIN_PASSWORD } from "../env";
import { LOCAL_STORAGE_LOCATION } from "../utils";

const main = () => {
  setEventListener();
  if (!getIsCheck()) return;
  login();
};

const setEventListener = () => {
  chrome.runtime.onMessage.addListener((isCheck, sender, sendResponse) => {
    const setJson = JSON.stringify(isCheck);
    localStorage.setItem(LOCAL_STORAGE_LOCATION, setJson);
  });
};

const login = () => {
  const { userIdElm, passwordElm, buttonElm, errFormElm } = getElements();
  if (errFormElm) return console.error("Unipa Chrome Extension: Login Error");

  if (userIdElm && passwordElm && buttonElm) {
    userIdElm.value = LOGIN_ID;
    passwordElm.value = LOGIN_PASSWORD;
    buttonElm.click();
  }
};

const getIsCheck = (): boolean => {
  const data = localStorage.getItem(LOCAL_STORAGE_LOCATION);
  if (!data) {
    const checkDefault = true;
    localStorage.setItem(
      LOCAL_STORAGE_LOCATION,
      JSON.stringify({ isCheck: checkDefault })
    );
    return checkDefault;
  }
  return JSON.parse(data).isCheck;
};

main();
