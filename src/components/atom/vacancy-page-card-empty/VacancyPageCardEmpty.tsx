import "./style.css";

interface IVacancyPageCardEmpty {
  children?: React.ReactNode;
}

export default function VacancyPageCardEmpty({ children }: IVacancyPageCardEmpty) {
  return <div className="vacancy-page-card-empty">{children}</div>;
}
