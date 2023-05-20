import "./style.css";
import EmptyFavorites from "../../components/thing/empty-favorites-data";
import useVacanciesStore, { IVacancy } from "../../store/useVacanciesStore";
import { useEffect } from "react";
import CardsVacancyLoadingData from "../../components/thing/cards-vacancy-loading-data";
import ErrorSearchData from "../../components/thing/error-search-data";
import CardVacancyData from "../../components/thing/card-vacancy-data";
import PaginateFavoriteVacanciesData from "../../components/thing/paginate-favorite-vacancies-data";

export default function Favorites() {
  const [vacancies, loading, error, getFavoriteVacancies] = useVacanciesStore(
    (state) => [
      state.favoriteVacancies,
      state.loadingFavoriteVacancies,
      state.errorFavoriteVacancies,
      state.getFavoriteVacancies,
    ]
  );

  useEffect(() => {
    getFavoriteVacancies();
  }, []);

  return (
    <div className="favorites">
      <div className="favorites-cards">
        {loading ? (
          <CardsVacancyLoadingData />
        ) : error ? (
          <ErrorSearchData />
        ) : (
          <>
            {vacancies.length ? (
              vacancies.map((vacancy: IVacancy) => (
                <CardVacancyData vacancy={vacancy} />
              ))
            ) : (
              <EmptyFavorites />
            )}
          </>
        )}
      </div>
      <PaginateFavoriteVacanciesData />
    </div>
  );
}
