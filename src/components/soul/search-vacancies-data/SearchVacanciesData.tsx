import useLanguageStore from "../../../store/useLanguageStore";
import useVacanciesStore from "../../../store/useVacanciesStore";
import SearchVacancies from "../../substance/search-vacancies";
import "./style.css";

export default function SearchVacanciesData() {
  const [getVacancies, keyword, setKeyword] = useVacanciesStore((state) => [
    state.getVacancies,
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
      action={getVacancies}
    />
  );
}
