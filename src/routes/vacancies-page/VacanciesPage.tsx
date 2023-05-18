import "./style.css";
import useVacanciesStore, { IVacancy } from "../../store/useVacanciesStore";
import Filtervacanciesdata from "../../components/soul/filter-vacancies-data";
import { useEffect } from "react";
import SearchVacanciesData from "../../components/soul/search-vacancies-data";
import EmptySearchData from "../../components/soul/empty-search-data";
import PaginateVacanciesData from "../../components/soul/paginate-vacancies-data";
import ErrorSearchData from "../../components/soul/error-search-data";
import CardsVacancyLoadingData from "../../components/soul/cards-vacancy-loading-data";
import CardVacancyData from "../../components/soul/card-vacancy-data";

export default function VacanciesPage() {
  const [vacancies, loading, error, getVacancies] = useVacanciesStore(
    (state) => [
      state.vacancies,
      state.loadingVacancies,
      state.errorVacancies,
      state.getVacancies,
    ]
  );

  useEffect(() => {
    getVacancies();
  }, []);

  return (
    <div className="vacancies-page">
      <Filtervacanciesdata />
      <SearchVacanciesData />
      {loading ? (
        <CardsVacancyLoadingData />
      ) : error ? (
        <ErrorSearchData />
      ) : (
        <div className="vacancies-page-cards">
          {vacancies.length ? (
            vacancies.map((vacancy: IVacancy) => (
              <CardVacancyData key={vacancy.id} vacancy={vacancy} />
            ))
          ) : (
            <EmptySearchData />
          )}
        </div>
      )}
      <PaginateVacanciesData />
    </div>
  );
}
