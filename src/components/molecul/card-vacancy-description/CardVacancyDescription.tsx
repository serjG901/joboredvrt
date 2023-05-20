import "./style.css";
import TownPoint from "./town-point.svg";
import Point from "./point.svg";

interface ICardVacancyDescription {
  profession: string;
  firm_name: string;
  payment_from: number;
  payment_to: number;
  currency: string;
  type_of_workTitle: string;
  townTitle: string;
  paymentTemplate: {
    payment: string;
    from: string;
    to: string;
    empty: string;
  };
}

export default function CardVacancyDescription({
  profession,
  firm_name,
  payment_from,
  payment_to,
  currency,
  type_of_workTitle,
  townTitle,
  paymentTemplate,
}: ICardVacancyDescription) {
  const p_from =
    payment_from && payment_to
      ? payment_from
      : payment_from
      ? `${paymentTemplate.from} ${payment_from}`
      : "";
  const p_to =
    payment_from && payment_to
      ? `- ${payment_to}`
      : payment_to
      ? payment_to
      : "";
  const payment = `${paymentTemplate.payment} ${
    p_from || p_to ? `${p_from} ${p_to} ${currency}` : paymentTemplate.empty
  }`;
  return (
    <div className="card-vacancy-description">
      <div className="card-vacancy-description-profession">{profession}</div>
      <div className="card-vacancy-description-payment-and-typeofwork">
        <div className="card-vacancy-description-payment-and-typeofwork-payment">
          {payment}
        </div>
        <div className="card-vacancy-description-payment-and-typeofwork-point">
          <img src={Point} alt={"point"} />
        </div>
        <div className="card-vacancy-description-payment-and-typeofwork-typeofwork">
          {type_of_workTitle}
        </div>
      </div>
      <div className="card-vacancy-description-town">
        <div className="card-vacancy-description-town-point">
          <img src={TownPoint} alt={"point"} />
        </div>
        <div className="card-vacancy-description-town-title">{townTitle}</div>
      </div>
      <div className="card-vacancy-description-town-firm">{firm_name}</div>
    </div>
  );
}
