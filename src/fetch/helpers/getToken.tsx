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

export default async function getToken(): Promise<IToken | null> {
  let token: IToken | null = null;
  try {
    token = JSON.parse(window.localStorage.getItem("token") || "");
    if (token && token.ttl > Date.now() / 1000) {
      return token;
    } else {
      try {
        token = (await fetchOath()) as IToken;
        if (token.ttl < Date.now() / 1000) {
          try {
            token = (await fetchRefresh(token.refresh_token)) as IToken;
          } catch (error) {
            console.log("Can't fetchRefresh token:", error);
            return null;
          }
        }
        try {
          window.localStorage.setItem("token", JSON.stringify(token));
        } catch (error) {
          console.log("Can't save token in storage:", error);
        }
        return token;
      } catch (error) {
        console.log("Can't fetchOath:", error);
        return null;
      }
    }
  } catch (error) {
    console.log("Can't access localStorage", error);
    try {
      token = (await fetchOath()) as IToken;
      if (token.ttl < Date.now() / 1000) {
        try {
          token = (await fetchRefresh(token.refresh_token)) as IToken;
        } catch (error) {
          console.log("Can't fetchRefresh token:", error);
          return null;
        }
      }
      return token;
    } catch (error) {
      console.log("Can't access localStorage and can't fetchOath:", error);
      return null;
    }
  }
}
