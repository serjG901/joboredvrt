import "./style.css";
import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import getToken from "../../fetch/helpers/getToken";
import Headerdata from "../../components/thing/header-data";
import LoadingDots from "../../components/atom/loading-dots";

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
      <div className="outlet">
        {haveToken !== "fetch token" ? (
          <Outlet />
        ) : (
          <LoadingDots>Loading</LoadingDots>
        )}
      </div>
      <div></div>
    </div>
  );
}
