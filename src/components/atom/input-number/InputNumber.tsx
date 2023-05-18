import { useEffect, useState } from "react";
import "./style.css";

interface IInputNumber {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  step: number;
}

export default function InputNumber({
  value,
  setValue,
  placeholder,
  step,
}: IInputNumber) {
  const [state, setState] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  useEffect(() => {
    setValue(state);
  }, [state, setValue]);

  useEffect(() => {
    if (state !== value) setState(value);
  }, [value, setState]);

  return (
    <input
      className="input-number"
      type="number"
      placeholder={placeholder}
      value={state}
      onChange={handleChange}
      step={step}
    />
  );
}
