import useLanguageStore from "../../../store/useLanguageStore";
import useVacanciesStore, { IVacancy } from "../../../store/useVacanciesStore";
import { useCallback } from "react";
import VacancyPageCard from "../../substance/vacancy-page-card";

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
  const actionFavoriteStar = useCallback(
    (event?: React.MouseEvent<HTMLButtonElement>) => {
      event?.preventDefault();
      isFavorite
        ? deleteFavoriteVacancyId(vacancy.id)
        : addFavoriteVacancyId(vacancy.id);
    },
    [isFavorite]
  );
  return (
    <VacancyPageCard
      profession={vacancy.profession}
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
