import "./style.css";
import CardVacancyLoading from "../../molecul/card-vacancy-loading";

interface ICardsVacancyLoading {
  count: number;
}

export default function CardsVacancyLoading({ count }: ICardsVacancyLoading) {
  return (
    <div className="cards-vacancy-loading">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <CardVacancyLoading key={index} />
        ))}
    </div>
  );
}
