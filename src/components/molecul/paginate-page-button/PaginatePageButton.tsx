import MyButton from "../../atom/my-button";
import MyImage from "../../atom/my-image";
import "./style.css";

interface IPaginatePageButton {
  pageNumber?: string | number;
  action: () => void;
  pageActive?: number | number;
  imageSrc?: string;
  altPrevious?: string;
  disabled?: boolean;
}

export default function PaginatePageButton({
  pageNumber = "",
  action,
  pageActive,
  imageSrc,
  altPrevious,
  disabled,
}: IPaginatePageButton) {
  return (
    <div
      className={`paginate-page-button ${
        pageActive && pageActive === pageNumber
          ? "paginate-page-button_active"
          : ""
      } ${disabled ? "paginate-page-button_disabled" : ""}`}
    >
      <MyButton action={action} disabled={disabled || (!!pageActive && pageActive === pageNumber)}>
        {pageNumber || <MyImage src={imageSrc} alt={altPrevious} />}
      </MyButton>
    </div>
  );
}
