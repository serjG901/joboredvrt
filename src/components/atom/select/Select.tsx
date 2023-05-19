import { useEffect, useState } from "react";
import "./style.css";
import SelectDownArrow from "./Down2.svg"
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
}: ISelect) {
  const [state, setState] = useState(currentSelected);

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

  useEffect(() => {
    setSelected(state);
  }, [state]);

  useEffect(() => {
    if (state !== currentSelected) setState(currentSelected);
  }, [currentSelected, setState]);

  return (
    <div className="my-select">
      <label>{title}</label>
      <select
        title={title}
        value={state}
        onChange={handleChange}
        className={
          loading ? "my-select-loading" : error ? " my-select-error" : ""
        }
      >
        <option value="">{placeholder}</option>
        {options.map((option) => {
          return (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          );
        })}
      </select>
      <img className="select-down-arrow" src={SelectDownArrow} alt={title}/>
    </div>
  );
}
