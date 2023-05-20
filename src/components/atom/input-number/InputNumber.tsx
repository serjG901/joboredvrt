import { useEffect, useState } from "react";
import "./style.css";
import InputNumberUpArrow from "./input-number-up-arrow.svg";

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
        <div className="input-number-arrow-up" onClick={handlePlus}>
          <img src={InputNumberUpArrow} title={`+${step}`} />
        </div>
        <div className="input-number-arrow-down" onClick={handleMinus}>
          <img src={InputNumberUpArrow} title={`-${step}`} />
        </div>
      </div>
    </div>
  );
}
