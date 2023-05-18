import oauthUserSettings from "./constants/oauthUserSettings";
import secretKey from "./constants/secretKey";
import urlVacancyById from "./constants/urlVacancyById";
import fetchOath from "./fetchOath";
import fetchRefresh from "./fetchRefresh";

export default async function fetchVacancyById(id: number | string) {
  let user = await fetchOath();
  console.log(user);
  if (user.ttl < Date.now()/1000) {
    user = await fetchRefresh(user.refresh_token);
    console.log(user);
  }

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
        Authorization: `${user.token_type} ${user.access_token}`,
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
