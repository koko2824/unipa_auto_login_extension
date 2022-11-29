import { login } from "./login";
import { isActivate, setEventListener } from "./state";

const main = () => {
  setEventListener();
  if (!isActivate()) return;
  login(window.location.href);
};

window.onload = () => main();
