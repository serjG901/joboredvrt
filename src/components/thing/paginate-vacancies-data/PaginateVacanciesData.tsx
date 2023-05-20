import useVacanciesStore from "../../../store/useVacanciesStore";
import Paginate from "../../substance/paginate";
import LeftArrow from "./chevron-left.svg";
import RightArrow from "./chevron-right.svg";

export default function PaginateVacanciesData() {
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
    state.pageActive,
    state.itemsPerPage,
    state.loadingVacancies,
    state.errorVacancies,
    state.setPageActive,
    state.setPreviousPage,
    state.setNextPage,
    state.totalVacancies,
  ]);

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
