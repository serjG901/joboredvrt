import "./style.css";
import { Outlet } from "react-router-dom";
import Headerdata from "../../components/soul/header-data";

export default function MainPage() {
  return (
    <div className="mainpage">
      <Headerdata />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
