import useVacanciesStore from "../../../store/useVacanciesStore";
import Paginate from "../../substance/paginate";
import LeftArrow from "./chevron-left.svg";
import RightArrow from "./chevron-right.svg";

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

  console.log(pageActive,
    itemsPerPage,totalVacancies);

  if (errorVacancies) return null;
  return (
    <Paginate
      pageActive={pageActive}
      itemsPerPage={itemsPerPage}
      setPageActive={setPageActive}
      totalItems={totalVacancies}
      setPreviousPage={setPreviousPage}
      setNextPage={setNextPage}
      imagePreviousPage={LeftArrow}
      imageNextPage={RightArrow}
      loadingVacancies={loadingVacancies}
    />
  );
}
