import useLanguageStore from "../../../store/useLanguageStore";
import CardVacancy from "../../substance/card-vacancy";
import useVacanciesStore, { IVacancy } from "../../../store/useVacanciesStore";

interface ICardVacancyData {
  vacancy: IVacancy;
}

export default function CardVacancyData({ vacancy }: ICardVacancyData) {
  const [altAddFavorite, altDeleteFavorite, paymentTemplate] = useLanguageStore(
    (state) => [
      state.textes.altAddFavorite,
      state.textes.altDeleteFavorite,
      state.textes.paymentTemplate,
    ]
  );
  const [favoriteVacanciesIds, addFavoriteVacancyId, deleteFavoriteVacancyId] =
    useVacanciesStore((state) => [
      state.favoriteVacanciesIds,
      state.addFavoriteVacancyId,
      state.deleteFavoriteVacancyId,
    ]);
  const isFavorite = favoriteVacanciesIds.includes(vacancy.id);
  const actionFavoriteStar = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    isFavorite
      ? deleteFavoriteVacancyId(vacancy.id)
      : addFavoriteVacancyId(vacancy.id);
  };
  return (
    <CardVacancy
      vacancyId={vacancy.id}
      profession={vacancy.profession}
      firm_name={vacancy.firm_name}
      payment_from={vacancy.payment_from}
      payment_to={vacancy.payment_to}
      currency={vacancy.currency}
      type_of_workTitle={vacancy.type_of_work.title}
      townTitle={vacancy.town.title}
      paymentTemplate={paymentTemplate}
      isFavorite={isFavorite}
      actionFavoriteStar={actionFavoriteStar}
      altFavorite={isFavorite ? altDeleteFavorite : altAddFavorite}
    />
  );
}
