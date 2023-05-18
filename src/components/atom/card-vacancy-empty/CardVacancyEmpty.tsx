import "./style.css";

interface ICardVacancyEmpty {
  children?: React.ReactNode;
}

export default function CardVacancyEmpty({ children }: ICardVacancyEmpty) {
  return <div className="card-vacancy-empty">{children}</div>;
}
