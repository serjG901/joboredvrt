import useLanguageStore from "../../../store/useLanguageStore";
import Header from "../../substance/header";
import logo from "./logo.svg";

export default function Headerdata() {
  const header = useLanguageStore((state) => state.textes.header);
  
  return (
    <Header projectName={header.projectName} logo={logo} links={header.links} />
  );
}
