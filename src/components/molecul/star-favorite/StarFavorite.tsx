import "./style.css";
import MyButton from "../../atom/my-button";
import StarSvg from "../../atom/star-icon";

interface IStarFavorite {
  action: () => void;
  isFavorite: boolean;
  altFavorite: string;
  dataElem?: string;
}

export default function StarFavorite({
  action,
  isFavorite,
  altFavorite,
  dataElem,
}: IStarFavorite) {
  const actionWithPrevent = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    action();
  };
  return (
    <div
      className={`star-favorite ${isFavorite ? "is-favorite" : ""}`}
      title={altFavorite}
    >
      <MyButton action={actionWithPrevent} dataElem={dataElem}>
        <StarSvg filled={isFavorite} />
      </MyButton>
    </div>
  );
}
