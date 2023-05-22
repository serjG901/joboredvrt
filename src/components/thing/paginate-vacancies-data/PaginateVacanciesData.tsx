import useLanguageStore from "../../../store/useLanguageStore";
import useVacanciesStore from "../../../store/useVacanciesStore";
import Paginate from "../../substance/paginate";

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

  const paginateTitle = useLanguageStore((state) => state.textes.paginateTitle);
  console.log(paginateTitle);
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
