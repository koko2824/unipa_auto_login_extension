export const getElements = () => {
  const userIdElm: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("loginForm:userId")
  );
  const passwordElm: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("loginForm:password")
  );
  const buttonElm: HTMLButtonElement = <HTMLButtonElement>(
    document.getElementById("loginForm:loginButton")
  );
  const errFormElm: boolean = Boolean(
    <HTMLFormElement>(
      document.getElementById("errForm:gakuenException")?.firstElementChild
    )
  );
  return { userIdElm, passwordElm, buttonElm, errFormElm };
};
