import setToken from "./setToken";

export default async function getToken() {
  try {
    const token = JSON.parse(window.localStorage.getItem("token") || "");
    if (token) {
      return token;
    } else {
      try {
        return await setToken();
      } catch (error) {
        console.log("Can't setToken", error);
      }
    }
  } catch (error) {
    console.log("Can't getToken", error);
    return null;
  }
}
