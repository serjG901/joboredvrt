import useLanguageStore from "../../../store/useLanguageStore";
import EmptySearch from "../../substance/empty-search";
import Image from "./empty-search-image.svg";

export default function EmptySearchData() {
  const text = useLanguageStore((state) => state.textes.emptysearch);
  return <EmptySearch image={Image} text={text} hasLink={false} />;
}
