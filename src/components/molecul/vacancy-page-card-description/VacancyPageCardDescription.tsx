import "./style.css";
import TownPoint from "./town-point.svg";
import Point from "./point.svg";

interface IVacancyPageCardDescription {
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

export default function VacancyPageCardDescription({
  profession,
  firm_name,
  payment_from,
  payment_to,
  currency,
  type_of_workTitle,
  townTitle,
  paymentTemplate,
}: IVacancyPageCardDescription) {
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
    <div className="vacancy-page-card-description">
      <div className="vacancy-page-card-description-profession">{profession}</div>
      <div className="vacancy-page-card-description-payment-and-typeofwork">
        <div className="vacancy-page-card-description-payment-and-typeofwork-payment">
          {payment}
        </div>
        <div className="vacancy-page-card-description-payment-and-typeofwork-point">
          <img src={Point} alt={"point"} />
        </div>
        <div className="vacancy-page-card-description-payment-and-typeofwork-typeofwork">
          {type_of_workTitle}
        </div>
      </div>
      <div className="vacancy-page-card-description-town">
        <div className="vacancy-page-card-description-town-point">
          <img src={TownPoint} alt={"point"} />
        </div>
        <div className="vacancy-page-card-description-town-title">{townTitle}, {firm_name}</div>
      </div>
    </div>
  );
}
