import useLanguageStore from "../../../store/useLanguageStore";
import useVacanciesStore from "../../../store/useVacanciesStore";
import Paginate from "../../substance/paginate";

export default function PaginateFavoriteVacanciesData() {
  const [
    pageActive,
    itemsPerPage,
    loadingVacancies,
    errorVacancies,
    setPageActive,
    setPreviousPage,
    setNextPage,
    totalVacancies,
  ] = useVacanciesStore((state) => [
    state.pageActiveFavoriteVacancies,
    state.itemsPerPageFavoriteVacancies,
    state.loadingFavoriteVacancies,
    state.errorFavoriteVacancies,
    state.setPageActiveFavoriteVacancies,
    state.setPreviousPageFavoriteVacancies,
    state.setNextPageFavoriteVacancies,
    state.totalFavoriteVacancies,
  ]);

  const paginateTitle = useLanguageStore((state) => state.textes.paginateTitle);

  console.log(pageActive, itemsPerPage, totalVacancies);

  if (errorVacancies) return null;
  return (
    <Paginate
      pageActive={pageActive}
      itemsPerPage={itemsPerPage}
      setPageActive={setPageActive}
      totalItems={totalVacancies}
      setPreviousPage={setPreviousPage}
      setNextPage={setNextPage}
      loadingVacancies={loadingVacancies}
      paginateTitlePrevious={paginateTitle.previous}
      paginateTitlePage={paginateTitle.page}
      paginateTitleNext={paginateTitle.next}
    />
  );
}
