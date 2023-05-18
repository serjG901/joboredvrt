import { useParams } from "react-router-dom";
import "./style.css";
import useVacanciesStore from "../../store/useVacanciesStore";
import { useEffect } from "react";
import ErrorSearchData from "../../components/soul/error-search-data";
import EmptySearchData from "../../components/soul/empty-search-data";
import VacancyPageCardData from "../../components/soul/vacancy-page-card-data";
import VacancyPageCardLoadingData from "../../components/soul/vacancy-page-card-loading-data";

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
              <VacancyPageCardData key={vacancyPage.id} vacancy={vacancyPage} />
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
