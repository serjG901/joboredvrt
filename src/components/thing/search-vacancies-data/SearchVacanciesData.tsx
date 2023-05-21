import useLanguageStore from "../../../store/useLanguageStore";
import useVacanciesStore from "../../../store/useVacanciesStore";
import SearchVacancies from "../../substance/search-vacancies";

export default function SearchVacanciesData() {
  const [applyFilter, keyword, setKeyword] = useVacanciesStore((state) => [
    state.applyFilter,
    state.keyword,
    state.setKeyword,
  ]);

  const textes = useLanguageStore((state) => state.textes.searchvacancies);

  return (
    <SearchVacancies
      value={keyword}
      setValue={setKeyword}
      placeholder={textes.placeholder}
      textSearchButton={textes.textButton}
      action={applyFilter}
    />
  );
}
