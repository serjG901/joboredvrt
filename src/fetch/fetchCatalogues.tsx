import oauthUserSettings from "./constants/oauthUserSettings";
import secretKey from "./constants/secretKey";
import urlCatalogues from "./constants/urlCatalogues";

interface ICatalog {
  key: number;
  positions: {
    id_parent: number;
    key: number;
    title: string;
    title_rus: number;
    url_rus: number;
  }[];
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

export default async function fetchCatalogues(
  controller?: AbortController
): Promise<ICatalog[] | unknown> {
  const functionName = fetchCatalogues.name;

  try {
    const response = await fetch(urlCatalogues, {
      method: "GET",
      headers: {
        Host: "startup-summer-2023-proxy.onrender.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-secret-key": secretKey,
        "X-Api-App-Id": oauthUserSettings.client_secret,
      },
      signal: controller?.signal,
    });
    const res: ICatalog[] = await response.json();
    console.log(functionName + ":", res);
    return res;
  } catch (error) {
    console.log(functionName + ":", error);
    return error;
  }
}
