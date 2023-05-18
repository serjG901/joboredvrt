import "./style.css";
import Inputnumber from "../../atom/input-number";

interface IFormSalary {
  title: string;
  payment_from: number;
  setPayment_from: (value: string) => void;
  payment_to: number;
  setPayment_to: (value: string) => void;
  placeholders: {
    from: string;
    to: string;
  };
  step: number;
}

export default function FormSalary({
  title,
  payment_from,
  setPayment_from,
  payment_to,
  setPayment_to,
  placeholders,
  step,
}: IFormSalary) {
  return (
    <div className="form-salary">
      <label>{title}</label>
      <Inputnumber
        value={payment_from === 0 ? "" : `${payment_from}`}
        setValue={setPayment_from}
        placeholder={placeholders.from}
        step={step}
      />
      <Inputnumber
        value={payment_to === 0 ? "" : `${payment_to}`}
        setValue={setPayment_to}
        placeholder={placeholders.to}
        step={step}
      />
    </div>
  );
}
