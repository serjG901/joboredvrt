import "./style.css";
import { Outlet, Navigate } from "react-router-dom";
import Headerdata from "../../components/thing/header-data";
import setToken from "../../fetch/helpers/setToken";
import { useEffect } from "react";

export default function MainPage() {
  useEffect(() => {
    setToken();
  }, []);

  return (
    <div className="mainpage">
      <Navigate to="/vacancies" replace={true} />
      <Headerdata />
      <div className="outlet">
        <Outlet />
      </div>
      <div></div>
    </div>
  );
}
