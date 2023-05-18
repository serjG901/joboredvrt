import Search from "../../molecul/search";
import "./style.css";

interface ISearchVacancies {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  textSearchButton: string;
  action: () => void;
}

export default function SearchVacancies({
  value,
  setValue,
  placeholder,
  textSearchButton,
  action,
}: ISearchVacancies) {
  return (
    <div className="search-vacancies">
      <Search
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        textSearchButton={textSearchButton}
        action={action}
      />
    </div>
  );
}
