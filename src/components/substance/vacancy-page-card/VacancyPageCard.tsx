import VacancyPageCardEmpty from "../../atom/vacancy-page-card-empty";
import StarFavorite from "../../molecul/star-favorite";
import VacancyPageCardDescription from "../../molecul/vacancy-page-card-description";

interface IVacancyPageCard {
  profession: string;
  firm_name: string;
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

export default function VacancyPageCard({
  profession,
  firm_name,
  payment_from,
  payment_to,
  currency,
  type_of_workTitle,
  townTitle,
  paymentTemplate,
  isFavorite,
  actionFavoriteStar,
  altFavorite,
}: IVacancyPageCard) {
  return (
    <VacancyPageCardEmpty>
      <VacancyPageCardDescription
        profession={profession}
        firm_name={firm_name}
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
    </VacancyPageCardEmpty>
  );
}
