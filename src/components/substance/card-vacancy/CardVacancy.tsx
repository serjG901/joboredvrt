import CardVacancyEmpty from "../../atom/card-vacancy-empty";
import StarFavorite from "../../molecul/star-favorite";
import CardVacancyDescription from "../../molecul/card-vacancy-description";
import { Link, useLocation } from "react-router-dom";

interface ICardVacancy {
  vacancyId: number;
  profession: string;
  payment_from: number;
  payment_to: number;
  currency: string;
  type_of_workTitle: string;
  townTitle: string;
  paymentTemplate: {
    payment: string;
    from: string;
    to: string;
    empty: string;
  };
  isFavorite: boolean;
  actionFavoriteStar: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  altFavorite: string;
}

export default function CardVacancy({
  vacancyId,
  profession,
  payment_from,
  payment_to,
  currency,
  type_of_workTitle,
  townTitle,
  paymentTemplate,
  isFavorite,
  actionFavoriteStar,
  altFavorite,
}: ICardVacancy) {
  useLocation
  return (
    <Link to={`../vacancies/${vacancyId}`} onClick={(event)=>console.log(event.target)}>
      <CardVacancyEmpty>
        <CardVacancyDescription
          profession={profession}
          payment_from={payment_from}
          payment_to={payment_to}
          currency={currency}
          type_of_workTitle={type_of_workTitle}
          townTitle={townTitle}
          paymentTemplate={paymentTemplate}
        />
        <StarFavorite
          isFavorite={isFavorite}
          action={actionFavoriteStar}
          altFavorite={altFavorite}
        />
      </CardVacancyEmpty>
    </Link>
  );
}
