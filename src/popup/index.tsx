import React, { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { LOCAL_STORAGE_LOCATION } from "../utils";

const getIsCheckFromLocalStorage = (): boolean => {
  const defaultValue = true;
  const json = localStorage.getItem(LOCAL_STORAGE_LOCATION);
  if (json === null) return defaultValue;
  const obj = JSON.parse(json);
  return obj.isCheck;
};

const Popup: FC = () => {
  const [isCheck, setIsCheck] = useState<boolean>(getIsCheckFromLocalStorage());

  const handleCheck = (checked: boolean) => {
    const setValue = !checked
    setIsCheck(setValue);
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      const activeTab: any = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { isCheck: setValue });
    });
  };

  const setToLocalStorage = (isCheck: boolean) => {
    const setJson = JSON.stringify({ isCheck: isCheck });
    localStorage.setItem(LOCAL_STORAGE_LOCATION, setJson);
  };

  useEffect(() => {
    setToLocalStorage(isCheck);
  }, [isCheck]);

  return (
    <div style={{ width: "200px" }}>
      <input
        type="checkbox"
        checked={isCheck}
        onChange={() => handleCheck(isCheck)}
      />
      <p>現在のBool値:{String(isCheck)}</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
