import useLanguageStore from "../../../store/useLanguageStore";
import ErrorSearch from "../../substance/error-search";
import Image from "./error.svg";

export default function ErrorSearchData() {
  const text: string = useLanguageStore((state) => state.textes.errorSearch);
  return <ErrorSearch image={Image} text={text} />;
}
