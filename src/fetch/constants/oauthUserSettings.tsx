const login = import.meta.env.FETCH_CONSTANTS_LOGIN;
const password = import.meta.env.FETCH_CONSTANTS_PASSWORD;
const client_id = import.meta.env.FETCH_CONSTANTS_CLIENT_ID;
const client_secret = import.meta.env.FETCH_CONSTANTS_CLIENT_SECRET;
const hr = import.meta.env.FETCH_CONSTANTS_HR;

const oauthUserSettings = {
  login,
  password,
  client_id,
  client_secret,
  hr,
};

export default oauthUserSettings;
