import "./style.css";
import PointIcon from "../../atom/point-icon";
import PointTownIcon from "../../atom/point-town-icon";

interface IPaymentTemplate {
  payment: string;
  from: string;
  to: string;
  empty: string;
}

interface ICardVacancyDescription {
  profession: string;
  firm_name: string;
  payment_from: number;
  payment_to: number;
  currency: string;
  type_of_workTitle: string;
  townTitle: string;
  paymentTemplate: IPaymentTemplate;
}

function paymentDescription(
  payment_to: number,
  payment_from: number,
  currency: string,
  paymentTemplate: IPaymentTemplate
) {
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
      ? `${paymentTemplate.to} ${payment_to}`
      : "";
  const p = payment_from === payment_to ? payment_from : `${p_from} ${p_to}`;
  const payment = `${paymentTemplate.payment} ${
    p_from || p_to ? `${p} ${currency}` : paymentTemplate.empty
  }`;
  return payment;
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
  const payment = paymentDescription(
    payment_to,
    payment_from,
    currency,
    paymentTemplate
  );
  return (
    <div className="card-vacancy-description">
      <div className="card-vacancy-description-profession">{profession}</div>
      <div className="card-vacancy-description-payment-and-typeofwork">
        <div className="card-vacancy-description-payment-and-typeofwork-payment">
          {payment}
        </div>
        <PointIcon />
        <div className="card-vacancy-description-payment-and-typeofwork-typeofwork">
          {type_of_workTitle}
        </div>
      </div>
      <div className="card-vacancy-description-town">
        <PointTownIcon />
        <div className="card-vacancy-description-town-title">{townTitle}</div>
      </div>
      <div className="card-vacancy-description-town-firm">{firm_name}</div>
    </div>
  );
}
