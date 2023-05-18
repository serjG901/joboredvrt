import { useEffect, useState } from "react";
import "./style.css";

interface IInputText {
  type: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  action: () => void;
}

export default function InputText({
  type,
  value,
  setValue,
  placeholder,
  action,
}: IInputText) {
  const [state, setState] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "Enter") {
      action();
    }
  };

  useEffect(() => {
    setValue(state);
  }, [state, setValue]);

  useEffect(() => {
    if (state !== value) setState(value);
  }, [value, setState]);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={state}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
