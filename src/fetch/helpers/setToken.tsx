import fetchOath from "../fetchOath";
import fetchRefresh from "../fetchRefresh";

interface IToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  reg_user_resumes_count: number;
  token_type: string;
  ttl: number;
}

export default async function setToken() {
  try {
    const token = JSON.parse(window.localStorage.getItem("token") || "");
    if (token && token.ttl > Date.now() / 1000) {
      return;
    } else {
      try {
        let token = (await fetchOath()) as IToken;
        if (token.ttl < Date.now() / 1000) {
          token = (await fetchRefresh(token.refresh_token)) as IToken;
        }
        try {
          window.localStorage.setItem("token", JSON.stringify(token));
        } catch (error) {
          console.log("cant save in storage:", error);
        }
        return token;
      } catch (error) {
        console.log("cant fetchOath or Refresh:", error);
        return error;
      }
    }
  } catch (error) {
    console.log("Can't access localStorage", error);
  }
}
