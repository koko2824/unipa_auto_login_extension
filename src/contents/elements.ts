import { UNIPA_DESKTOP_URL, UNIPA_MOBILE_URL } from "../utils";

export type PageElements = {
  userIdElm: HTMLInputElement;
  passwordElm: HTMLInputElement;
  buttonElm: HTMLButtonElement;
  error: boolean;
};

export const getElements = (href: string): PageElements | undefined => {
  switch (href) {
    case UNIPA_DESKTOP_URL:
      return getDesktopPageElements();
    case UNIPA_MOBILE_URL:
      return getMobilePageElements();
  }
};

const getDesktopPageElements = (): PageElements => {
  const userIdElm: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("loginForm:userId")
  );
  const passwordElm: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("loginForm:password")
  );
  const buttonElm: HTMLButtonElement = <HTMLButtonElement>(
    document.getElementById("loginForm:loginButton")
  );
  const error: boolean = Boolean(
    <HTMLFormElement>(
      document.getElementById("errForm:gakuenException")?.firstElementChild
    )
  );
  return { userIdElm, passwordElm, buttonElm, error };
};

const getMobilePageElements = (): PageElements => {
  const userIdElm: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("pmPage:loginForm:userId_input")
  );
  const passwordElm: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("pmPage:loginForm:password")?.firstElementChild
  );
  const buttonElm: HTMLButtonElement = <HTMLButtonElement>(
    document.getElementById("pmPage:loginForm:j_idt38")
  );
  const error: boolean = Boolean(
    <HTMLFormElement>(
      document.getElementById("pmPage:errForm:gakuenException")
        ?.firstElementChild
    )
  );
  return { userIdElm, passwordElm, buttonElm, error };
};
