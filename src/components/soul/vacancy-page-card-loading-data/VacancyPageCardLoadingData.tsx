import useVacanciesStore from "../../../store/useVacanciesStore";
import VacancyPageCardsLoading from "../../substance/vacancy-page-cards-loading";

export default function VacancyPageCardLoadingData() {
  const cardsInVacancyPage = useVacanciesStore((state) => state.cardsInVacancyPage);

  return <VacancyPageCardsLoading count={cardsInVacancyPage} />;
}
