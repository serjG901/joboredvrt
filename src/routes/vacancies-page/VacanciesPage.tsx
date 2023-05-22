import "./style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useVacanciesStore, { IVacancy } from "../../store/useVacanciesStore";
import Filtervacanciesdata from "../../components/thing/filter-vacancies-data";
import SearchVacanciesData from "../../components/thing/search-vacancies-data";
import EmptySearchData from "../../components/thing/empty-search-data";
import PaginateVacanciesData from "../../components/thing/paginate-vacancies-data";
import ErrorSearchData from "../../components/thing/error-search-data";
import CardsVacancyLoadingData from "../../components/thing/cards-vacancy-loading-data";
import CardVacancyData from "../../components/thing/card-vacancy-data";


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
  console.log('vacancies',loading);
  console.log(error);
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
              <Link
                to={`../vacancies/${vacancy.id}`}
                data-elem={`vacancy-${vacancy.id}`}
                key={vacancy.id}
              >
                <CardVacancyData vacancy={vacancy} />
              </Link>
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
