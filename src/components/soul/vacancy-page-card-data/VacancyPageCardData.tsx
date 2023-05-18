import useLanguageStore from "../../../store/useLanguageStore";
import CardVacancy from "../../substance/card-vacancy";
import useVacanciesStore, { IVacancy } from "../../../store/useVacanciesStore";

interface ICardVacancyData {
  vacancy: IVacancy;
}

export default function VacancyPageCardData({ vacancy }: ICardVacancyData) {
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
  const action = () =>
    isFavorite
      ? deleteFavoriteVacancyId(vacancy.id)
      : addFavoriteVacancyId(vacancy.id);
  return (
    <CardVacancy
      vacancyId={vacancy.id}
      profession={vacancy.profession}
      payment_from={vacancy.payment_from}
      payment_to={vacancy.payment_to}
      currency={vacancy.currency}
      type_of_workTitle={vacancy.type_of_work.title}
      townTitle={vacancy.town.title}
      paymentTemplate={paymentTemplate}
      isFavorite={isFavorite}
      action={action}
      altFavorite={isFavorite ? altDeleteFavorite : altAddFavorite}
    />
  );
}
