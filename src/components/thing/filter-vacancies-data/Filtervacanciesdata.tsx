import { useEffect } from "react";
import Filtervacancies from "../../substance/filter-vacancies";
import useLanguageStore from "../../../store/useLanguageStore";
import useVacanciesStore from "../../../store/useVacanciesStore";

export default function Filtervacanciesdata() {
  const [
    payment_from,
    setPayment_from,
    payment_to,
    setPayment_to,
    catalogues,
    catalog,
    setCatalog,
    filterIsEmpty,
    applyFilter,
    resetFilter,
    loading,
    error,
    getCatalogues,
  ] = useVacanciesStore((state) => [
    state.payment_from,
    state.setPayment_from,
    state.payment_to,
    state.setPayment_to,
    state.catalogues,
    state.catalog,
    state.setCatalog,
    state.filterIsEmpty,
    state.applyFilter,
    state.resetFilter,
    state.loadingCatalogues,
    state.errorCatalogues,
    state.getCatalogues,
  ]);

  const textes = useLanguageStore((state) => state.textes);

  useEffect(() => {
    getCatalogues();
  }, [getCatalogues]);

  return (
    <Filtervacancies
      filtervacancies={textes.filtervacancies}
      handleResetForm={resetFilter}
      payment_from={payment_from}
      setPayment_from={setPayment_from}
      payment_to={payment_to}
      setPayment_to={setPayment_to}
      catalogues={catalogues}
      catalog={catalog}
      setCatalog={setCatalog}
      filterIsEmpty={filterIsEmpty}
      loading={loading}
      error={error}
      applyFilter={applyFilter}
    />
  );
}
