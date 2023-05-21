import urlVacancies from "./constants/urlVacancies";
import secretKey from "./constants/secretKey";
import oauthUserSettings from "./constants/oauthUserSettings";
import serialiseQuery from "./helpers/serialiseQuery";
import getToken from "./helpers/getToken";

interface IVacancy {
  canEdit: boolean;
  is_closed: boolean;
  id: number;
  id_client: number;
  payment_from: number;
  payment_to: number;
  date_pub_to: number;
  date_archived: number;
  date_published: number;
  address: string;
  profession: string;
  work: null;
  compensation: null;
  candidat: string;
  metro: string[];
  currency: string;
  vacancyRichText: string;
  covid_vaccination_requirement: {
    id: number;
    title: string;
  };
  contact: string;
  moveable: boolean;
  agreement: boolean;
  anonymous: boolean;
  is_archive: boolean;
  is_storage: boolean;
  type_of_work: {
    id: number;
    title: string;
  };
  place_of_work: {
    id: number;
    title: string;
  };
  education: {
    id: number;
    title: string;
  };
  experience: {
    id: number;
    title: string;
  };
  maritalstatus: {
    id: number;
    title: string;
  };
  children: {
    id: number;
    title: string;
  };
  client: {
    id: number;
    title: string;
    link: string;
    industry: string[];
    description: string;
    vacancy_count: number;
    staff_count: string;
    client_logo: string;
    address: null;
    addresses: string[];
    url: string;
    short_reg: boolean;
    is_blocked: boolean;
    registered_date: number;
    town: {
      id: number;
      title: string;
      declension: string;
      hasMetro: boolean;
      genitive: string;
    };
  };
  languages: string[];
  driving_licence: string[];
  catalogues: {
    id: number;
    title: string;
    key: number;
    positions: {
      id: number;
      title: string;
      key: number;
    }[];
  }[];
  agency: {
    id: number;
    title: string;
  };
  town: {
    id: number;
    title: string;
    declension: string;
    hasMetro: boolean;
    genitive: string;
  };
  already_sent_on_vacancy: boolean;
  rejected: boolean;
  response_info: string[];
  phone: string;
  phones: {
    number: number;
    additionalNumber: null;
  }[];
  fax: null;
  faxes: null;
  favorite: boolean;
  client_logo: string;
  highlight: boolean;
  age_from: number;
  age_to: number;
  gender: {
    id: number;
    title: string;
  };
  firm_name: string;
  firm_activity: string;
  link: string;
  isBlacklisted: boolean;
  latitude: number;
  longitude: number;
}

interface IVacancies {
  more: boolean;
  objects: IVacancy[];
  subscription_active: boolean;
  subscription_id: number;
  total: number;
}

interface IFetchFavoritesVacancies {
  ids: number[];
  page: number;
  count: number;
  controller?: AbortController;
}
export default async function fetchFavoritesVacancies({
  ids,
  page,
  count,
  controller,
}: IFetchFavoritesVacancies): Promise<IVacancies | unknown> {
  const token = await getToken();
  //if (!token) throw new Error("Can't getToken");
  console.log(token);

  const query = { ids, page, count };
  console.log(serialiseQuery(query));
  const functionName = fetchFavoritesVacancies.name;

  try {
    const response = await fetch(urlVacancies + serialiseQuery(query), {
      method: "GET",
      headers: {
        Host: "startup-summer-2023-proxy.onrender.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-secret-key": secretKey,
        "X-Api-App-Id": oauthUserSettings.client_secret,
        Authorization: `${token?.token_type} ${token?.access_token}`,
      },
      signal: controller?.signal,
    });
    const res: IVacancies = await response.json();
    console.log(functionName + ":", res);
    return res;
  } catch (error: unknown) {
    console.log(functionName + ":", error);
    return error;
  }
}
