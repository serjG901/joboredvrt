import VacancyPageCardLoading from "../../molecul/vacancy-page-card-loading";
import "./style.css";


interface IVacancyPageCardLoading {
  count: number;
}

export default function VacancyPageCardsLoading({
  count,
}: IVacancyPageCardLoading) {
  return (
    <div className="vacancy-page-cards-loading">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <VacancyPageCardLoading key={index} />
        ))}
    </div>
  );
}
