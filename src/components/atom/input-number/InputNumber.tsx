import "./style.css";
import { useEffect, useState } from "react";
import MyButton from "../my-button";
import ArrowUpIcon from "../arrow-up-icon";
import ArrowDownIcon from "../arrow-down-icon";

interface IInputNumber {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  step: number;
  dataElem?: string;
}

export default function InputNumber({
  value,
  setValue,
  placeholder,
  step,
  dataElem,
}: IInputNumber) {
  const [state, setState] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handlePlus = () => {
    setState((state) => +state + step + "");
  };

  const handleMinus = () => {
    setState((state) => {
      const newState = +state < step ? 0 : +state - step;
      return newState ? newState + "" : "";
    });
  };

  useEffect(() => {
    setValue(state);
  }, [state, setValue]);

  useEffect(() => {
    if (state !== value) setState(value || "");
  }, [value]);

  return (
    <div className="input-number">
      <input
        type="number"
        placeholder={placeholder}
        value={state}
        onChange={handleChange}
        step={step}
        data-elem={dataElem}
      />
      <div className="input-number-arrows">
        <MyButton action={handlePlus} title={`+${step}`}>
          <ArrowUpIcon />
        </MyButton>
        <MyButton action={handleMinus} title={`-${step}`}>
          <ArrowDownIcon />
        </MyButton>
      </div>
    </div>
  );
}
