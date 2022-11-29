import { UNIPA_DESKTOP_URL, UNIPA_MOBILE_URL } from "../utils";

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case "access_to_desktop":
      chrome.tabs.create({url: UNIPA_DESKTOP_URL, active: true})
      break;
    case "access_to_mobile":
      chrome.tabs.create({url: UNIPA_MOBILE_URL, active: true})
      break;
  }
});
