import { LOCAL_STORAGE_LOCATION } from "../utils";

export const setEventListener = () => {
  chrome.runtime.onMessage.addListener((isCheck) => {
    const setJson = JSON.stringify(isCheck);
    localStorage.setItem(LOCAL_STORAGE_LOCATION, setJson);
  });
};

export const isActivate = (): boolean => {
  const data = localStorage.getItem(LOCAL_STORAGE_LOCATION);
  if (data) return JSON.parse(data).isCheck;

  const checkDefault = true;
  localStorage.setItem(
    LOCAL_STORAGE_LOCATION,
    JSON.stringify({ isCheck: checkDefault })
  );
  return checkDefault;
};
