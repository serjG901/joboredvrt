import "./style.css";
import MySelect from "../../atom/my-select";
import FormSalary from "../../molecul/form-salary";
import ButtonApplyFilter from "../../molecul/button-apply-filter";
import { useState } from "react";
import MyButton from "../../atom/my-button";

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
  };
  handleResetForm: () => void;
  payment_from: number;
  setPayment_from: (payment_from: string) => void;
  payment_to: number;
  setPayment_to: (payment_to: string) => void;
  catalog: ICatalog | null;
  setCatalog: (catalog: string) => void;
  filterIsEmpty: boolean;
  catalogues: ICatalog[];
  loading: boolean;
  error: unknown;
  applyFilter: () => void;
}

export default function Filtervacancies({
  filtervacancies,
  handleResetForm,
  payment_from,
  setPayment_from,
  payment_to,
  setPayment_to,
  catalogues,
  catalog,
  setCatalog,
  filterIsEmpty,
  loading,
  error,
  applyFilter,
}: IFiltervacancies) {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(!show);
  return (
    <div className="filter-vacancies">
      <div className="filter-vacancies-header">
        <div className="filter-vacancies-header-formname">
          {filtervacancies.formName}
        </div>
        <button
          className={`filter-vacancies-header-formreset ${
            filterIsEmpty ? "" : "filter-vacancies-header-formreset_red"
          }`}
          onClick={handleResetForm}
        >
          <div className="close">
            {filtervacancies.formResetText}
            <div className="close-icon">+</div>
          </div>
        </button>
      </div>

      <div
        className={`filter-vacancies-form ${
          show ? "" : "filter-vacancies-form_hide"
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
      <div
        className={`filter-vacancies-is-open ${
          show ? "" : "filter-vacancies-is-close"
        }`}
      >
        <MyButton action={handleShow}>
          <img src={ArrowDown} alt={show ? "hide filter" : "show filter"} />
        </MyButton>
      </div>
    </div>
  );
}
