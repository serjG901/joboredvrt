import CardsVacancyLoading from "../../substance/cards-vacancy-loading";
import useVacanciesStore from "../../../store/useVacanciesStore";

export default function CardsVacancyLoadingData() {
  const itemsPerPage = useVacanciesStore((state) => state.itemsPerPage);

  return <CardsVacancyLoading count={itemsPerPage} />;
}
