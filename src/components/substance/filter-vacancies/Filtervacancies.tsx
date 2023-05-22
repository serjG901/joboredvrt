import "./style.css";
import { useState } from "react";
import MySelect from "../../atom/my-select";
import FormSalary from "../../molecul/form-salary";
import ButtonApplyFilter from "../../molecul/button-apply-filter";
import ResetFilterAndSearch from "../../molecul/reset-filter-and-search";
import HideFilter from "../../molecul/hide-filter";

interface ICatalog {
  key: number;
  positions: {
    id_parent: number;
    key: number;
    title: string;
    title_rus: number;
    url_rus: number;
  }[];
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

interface IFiltervacancies {
  filtervacancies: {
    formName: string;
    formResetText: string;
    catalogies: string;
    payment: string;
    placeholders: {
      catalogies: string;
      payment_from: string;
      payment_to: string;
    };
    buttontext: string;
    loadingmessage: string;
    errormessage: string;
    hideFilter: string;
    showFilter: string;
  };
  resetFilterAndSearch: () => void;
  payment_from: number;
  setPayment_from: (payment_from: string) => void;
  payment_to: number;
  setPayment_to: (payment_to: string) => void;
  catalog: ICatalog | null;
  setCatalog: (catalog: string) => void;
  filterAndSearchIsEmpty: boolean;
  catalogues: ICatalog[];
  loading: boolean;
  error: unknown;
  applyFilter: () => void;
}

export default function Filtervacancies({
  filtervacancies,
  resetFilterAndSearch,
  payment_from,
  setPayment_from,
  payment_to,
  setPayment_to,
  catalogues,
  catalog,
  setCatalog,
  filterAndSearchIsEmpty,
  loading,
  error,
  applyFilter,
}: IFiltervacancies) {
  const [filterShow, setFilterShow] = useState(true);
  const changeFilterShowState = () => setFilterShow(!filterShow);
  return (
    <div className="filter-vacancies">
      <div className="filter-vacancies-header">
        <div className="filter-vacancies-header-formname">
          {filtervacancies.formName}
        </div>
        <ResetFilterAndSearch
          filterAndSearchIsEmpty={filterAndSearchIsEmpty}
          resetFilterAndSearch={resetFilterAndSearch}
          formResetText={filtervacancies.formResetText}
        />
      </div>
      <div
        className={`filter-vacancies-form ${
          filterShow ? "" : "filter-vacancies-form_hide"
        }`}
      >
        <MySelect
          loading={loading}
          loadingmessage={filtervacancies.loadingmessage}
          error={error}
          errormessage={filtervacancies.errormessage}
          title={filtervacancies.catalogies}
          options={catalogues.map((catalog) => catalog.title_trimmed)}
          currentSelected={catalog ? catalog.title_trimmed : ""}
          setSelected={setCatalog}
          placeholder={filtervacancies.placeholders.catalogies}
          dataElem="industry-select"
        />
        <FormSalary
          title={filtervacancies.payment}
          payment_from={payment_from}
          setPayment_from={setPayment_from}
          payment_to={payment_to}
          setPayment_to={setPayment_to}
          placeholders={{
            from: filtervacancies.placeholders.payment_from,
            to: filtervacancies.placeholders.payment_to,
          }}
          step={10000}
        />
        <ButtonApplyFilter
          text={filtervacancies.buttontext}
          action={applyFilter}
          dataElem="search-button"
        />
      </div>
      <HideFilter
        filterShow={filterShow}
        changeFilterShowState={changeFilterShowState}
        titles={{
          hideFilter: filtervacancies.hideFilter,
          showFilter: filtervacancies.showFilter,
        }}
      />
    </div>
  );
}
