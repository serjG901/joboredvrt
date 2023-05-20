import oauthUserSettings from "./constants/oauthUserSettings";
import secretKey from "./constants/secretKey";
import urlVacancyById from "./constants/urlVacancyById";
import getToken from "./helpers/getToken";

export default async function fetchVacancyById(id: number | string) {
  const token = await getToken();
  if (!token) throw new Error("Can't getToken");
  console.log(token);

  const functionName = fetchVacancyById.name;
  const url = urlVacancyById(id);
  console.log(url);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Host: "startup-summer-2023-proxy.onrender.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-secret-key": secretKey,
        "X-Api-App-Id": oauthUserSettings.client_secret,
        Authorization: `${token.token_type} ${token.access_token}`,
      },
    });
    const res = await response.json();
    console.log(functionName + ":", res);
    return res;
  } catch (error) {
    console.log(functionName + ":", error);
    return error;
  }
}
