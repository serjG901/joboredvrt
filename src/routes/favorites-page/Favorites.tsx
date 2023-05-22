import "./style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useVacanciesStore, { IVacancy } from "../../store/useVacanciesStore";
import EmptyFavoritesData from "../../components/thing/empty-favorites-data";
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
  console.log('favorites',loading);
  console.log(error);
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
                <Link
                  to={`../vacancies/${vacancy.id}`}
                  data-elem={`vacancy-${vacancy.id}`}
                  key={vacancy.id}
                >
                  <CardVacancyData vacancy={vacancy} />
                </Link>
              ))
            ) : (
              <EmptyFavoritesData />
            )}
          </>
        )}
      </div>
      <PaginateFavoriteVacanciesData />
    </div>
  );
}
