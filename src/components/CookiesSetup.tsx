import { useEffect } from "react";
import Cookies from "js-cookie";

const CookiesSetup = () => {
  useEffect(() => {
    const plainTextClue = "The cookies are ";
    const base64Clue = btoa("underneath the");
    const caesarCipherClue = "punve arne gur pnovarg.";

    Cookies.set("clue1", plainTextClue, { expires: 1 });
    Cookies.set("clue2", base64Clue, { expires: 1 });
    Cookies.set("clue3", caesarCipherClue, { expires: 1 });
  }, []);

  return null;
};

export default CookiesSetup;