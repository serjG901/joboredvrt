import "./style.css";
import PaginatePageButton from "../../molecul/paginate-page-button";
import PaginateDots from "../../molecul/paginate-dots";

interface IPaginate {
  pageActive: number;
  totalItems: number;
  itemsPerPage: number;
  setPageActive: (value: number) => void;
  setPreviousPage: () => void;
  setNextPage: () => void;
  imagePreviousPage: string;
  imageNextPage: string;
  loadingVacancies: boolean;
}

export default function Paginate({
  totalItems,
  pageActive,
  itemsPerPage,
  setPageActive,
  setPreviousPage,
  setNextPage,
  imagePreviousPage,
  imageNextPage,
  loadingVacancies,
}: IPaginate) {
  const pages = Math.ceil(totalItems / itemsPerPage);
  const pageActiveRender = pageActive + 1;
  if (pages <= 1) return null;

  let renderPages: (number | string)[] = [];
  switch (pageActiveRender) {
    case 1:
      renderPages = [
        [1, 2],
        [1, 2, 3],
        [1, 2, "..", pages],
      ][pages > 3 ? 2 : pages - 2];
      break;
    case 2:
      renderPages = [
        [1, 2],
        [1, 2, 3],
        [1, 2, 3, 4],
        [1, 2, 3, "..", pages],
      ][pages > 4 ? 3 : pages - 2];
      break;

    case 3:
      renderPages = [
        [1, 2, 3],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, "..", pages],
      ][pages > 5 ? 3 : pages - 3];
      break;

    default:
      renderPages = [
        [1, "..", pages - 1, pages],
        [1, "..", pages - 2, pages - 1, pages],
        [1, "..", pages - 3, pages - 2, pages - 1, pages],
        [
          1,
          "..",
          pageActiveRender - 1,
          pageActiveRender,
          pageActiveRender + 1,
          "..",
          pages,
        ],
      ][pages - pageActiveRender > 3 ? 3 : pages - pageActiveRender];
  }

  return (
    <div className="paginate">
      <PaginatePageButton
        action={setPreviousPage}
        imageSrc={imagePreviousPage}
        disabled={loadingVacancies || pageActiveRender === 1}
      />
      {renderPages.map((pageNumber: number | string, index) => {
        if (typeof pageNumber == "string")
          return <PaginateDots key={pageNumber + index} />;
        if (typeof pageNumber == "number")
          return (
            <PaginatePageButton
              key={pageNumber}
              pageNumber={pageNumber}
              action={() => setPageActive(pageNumber - 1)}
              pageActive={pageActiveRender}
              disabled={loadingVacancies}
            />
          );
      })}
      <PaginatePageButton
        action={setNextPage}
        imageSrc={imageNextPage}
        disabled={loadingVacancies || pageActiveRender === pages}
      />
    </div>
  );
}
