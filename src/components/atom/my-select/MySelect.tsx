import "./style.css";
import { useEffect, useState } from "react";
import ArrowSelect from "../arrow-select";
interface ISelect {
  loading: boolean;
  loadingmessage: string;
  error: unknown;
  errormessage: string;
  title: string;
  currentSelected: string;
  options: string[];
  setSelected: (selected: string) => void;
  placeholder: string;
  dataElem?: string;
}
export default function Select({
  loading,
  loadingmessage,
  error,
  errormessage,
  title,
  currentSelected,
  options,
  setSelected,
  placeholder,
  dataElem,
}: ISelect) {
  const [state, setState] = useState(currentSelected);
  const [isInFocus, setIsInFocus] = useState(false);
  console.log(currentSelected);
  if (loading) {
    options = [];
    placeholder = loadingmessage;
  }

  if (error) {
    options = [];
    placeholder = errormessage;
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };

  const handleFocus = () => {
    setIsInFocus(true);
  };
  const handleBlur = () => {
    setIsInFocus(false);
  };

  useEffect(() => {
    setSelected(state);
  }, [state]);

  useEffect(() => {
    if (state !== currentSelected) setState(currentSelected);
  }, [currentSelected, setState]);

  return (
    <div className="my-select">
      <label className="my-select-label">{title}</label>
      <select
        title={title}
        value={state}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={loading || !!error}
        data-elem={dataElem}
        className={`my-select-select ${
          state ? "my-select-select-filled" : "my-select-select-empty"
        } ${
          loading
            ? "my-select-select-loading"
            : error
            ? " my-select-select-error"
            : ""
        }`}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => {
          return (
            <option
              key={option}
              value={option}
              className="my-selecet-select-option"
            >
              {option}
            </option>
          );
        })}
      </select>
      <div
        className={`my-select-arrow ${isInFocus ? "my-select-arrow-up" : ""}`}
      >
        <ArrowSelect />
      </div>
    </div>
  );
}
