import "./style.css";
import { Outlet, Navigate } from "react-router-dom";
import Headerdata from "../../components/soul/header-data";

export default function MainPage() {
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
