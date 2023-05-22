import useLanguageStore from "../../../store/useLanguageStore";
import useVacanciesStore from "../../../store/useVacanciesStore";
import EmptySearch from "../../substance/empty-search";
import Image from "./empty-search-image.svg";

export default function EmptySearchData() {
  const resetFilter = useVacanciesStore(state => state.resetFilter);
  const text = useLanguageStore((state) => state.textes.emptysearch);
  return <EmptySearch image={Image} text={text} hasLink={true} action={resetFilter}/>;
}
