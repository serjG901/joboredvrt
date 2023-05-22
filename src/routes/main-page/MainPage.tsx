import "./style.css";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Headerdata from "../../components/thing/header-data";
import getToken from "../../fetch/helpers/getToken";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [haveToken, setHaveToken] = useState<
    "fetch token" | "have token" | "haven't token"
  >("fetch token");
  const location = useLocation();
  console.log("location:", location);
  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        setHaveToken("have token");
      } else {
        setHaveToken("haven't token");
      }
    };
    checkToken();
  }, []);

  return (
    <div className="mainpage">
      {haveToken !== "fetch token" && (
        <Navigate
          to={location.pathname === "/" ? "/vacancies" : location.pathname}
          replace={true}
        />
      )}
      <Headerdata />
      <div className="outlet">{haveToken !== "fetch token" && <Outlet />}</div>
      <div></div>
    </div>
  );
}
