import { useParams } from "react-router-dom";
import "./style.css";
import useVacanciesStore from "../../store/useVacanciesStore";
import { useEffect } from "react";
import EmptySearchData from "../../components/thing/empty-search-data";
import VacancyPageCardLoadingData from "../../components/thing/vacancy-page-card-loading-data";
import CardVacancyData from "../../components/thing/card-vacancy-data";
import ErrorSearchData from "../../components/thing/error-search-data";

export default function VacancyPage() {
  const { id } = useParams<"id">();
  const [vacancyPage, loading, error, getVacancyPageById] = useVacanciesStore(
    (state) => [
      state.vacancyPage,
      state.loadingVacancyPage,
      state.errorVacancyPage,
      state.getVacancyPageById,
    ]
  );
  useEffect(() => {
    getVacancyPageById(id || "");
  }, []);
  console.log('vacancy',loading);
console.log(error);
  return (
    <div className="vacancy-page">
      {loading ? (
        <VacancyPageCardLoadingData />
      ) : error ? (
        <ErrorSearchData />
      ) : (
        <div className="vacancy-page-card">
          {vacancyPage ? (
            <>
              <CardVacancyData key={vacancyPage.id} vacancy={vacancyPage} />
              <div
                className="vacancy-page-card-rich"
                dangerouslySetInnerHTML={{
                  __html: vacancyPage.vacancyRichText,
                }}
              ></div>
            </>
          ) : (
            <EmptySearchData />
          )}
        </div>
      )}
    </div>
  );
}
