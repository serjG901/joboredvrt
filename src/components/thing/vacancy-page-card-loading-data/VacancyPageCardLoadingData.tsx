import useVacanciesStore from "../../../store/useVacanciesStore";
import CardsVacancyLoading from "../../substance/cards-vacancy-loading";

export default function VacancyPageCardLoadingData() {
  const cardsInVacancyPage = useVacanciesStore(
    (state) => state.cardsInVacancyPage
  );

  return <CardsVacancyLoading count={cardsInVacancyPage} />;
}
