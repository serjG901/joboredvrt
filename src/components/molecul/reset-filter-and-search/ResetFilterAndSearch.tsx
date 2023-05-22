import CloseIcon from "../../atom/close-icon";
import MyButton from "../../atom/my-button";
import "./style.css";

interface IResetFilterAndSearch {
  filterAndSearchIsEmpty: boolean;
  resetFilterAndSearch: () => void;
  formResetText: string;
}

export default function ResetFilterAndSearch({
  filterAndSearchIsEmpty,
  resetFilterAndSearch,
  formResetText,
}: IResetFilterAndSearch) {
  return (
    <div
      className={`reset-filter-and-search ${
        filterAndSearchIsEmpty ? "" : "reset-filter-and-search-show"
      }`}
    >
      <MyButton action={resetFilterAndSearch}>
        <div>{formResetText}</div>
        <CloseIcon />
      </MyButton>
    </div>
  );
}
