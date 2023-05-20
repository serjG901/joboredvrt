import useLanguageStore from "../../../store/useLanguageStore";
import EmptySearch from "../../substance/empty-search";
import Image from "./empty-search-image.svg";

export default function EmptySearchData() {
  const text = useLanguageStore((state) => state.textes.emptyFavorites);
  return <EmptySearch image={Image} text={text} hasLink={true}/>;
}
