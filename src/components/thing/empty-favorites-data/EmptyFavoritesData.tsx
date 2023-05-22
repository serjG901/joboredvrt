import useLanguageStore from "../../../store/useLanguageStore";
import useVacanciesStore from "../../../store/useVacanciesStore";
import EmptySearch from "../../substance/empty-search";

export default function EmptySearchData() {
  const resetFilterAndSearch = useVacanciesStore(state => state.resetFilterAndSearch);
  const text = useLanguageStore((state) => state.textes.emptyFavorites);
  return <EmptySearch text={text} hasLink={true} action={resetFilterAndSearch}/>;
}
