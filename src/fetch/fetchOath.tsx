import serialiseQuery from "./helpers/serialiseQuery";
import oauthUserSettings from "./constants/oauthUserSettings";
import secretKey from "./constants/secretKey";
import urlOauth from "./constants/urlOauth";

interface IToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  reg_user_resumes_count: number;
  token_type: string;
  ttl: number;
}

export default async function fetchOath(): Promise<IToken | unknown> {
  const query = serialiseQuery(oauthUserSettings);
  const functionName = fetchOath.name;

  try {
    const response = await fetch(urlOauth + query, {
      method: "GET",
      headers: {
        Host: "startup-summer-2023-proxy.onrender.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-secret-key": secretKey,
        "X-Api-App-Id": oauthUserSettings.client_secret,
      },
    });
    const res = (await response.json()) as IToken;
    console.log(functionName + ":", res);
    return res;
  } catch (error) {
    console.log(functionName + ":", error);
    return error;
  }
}
