import "./style.css";
import MyButton from "../../atom/my-button";
import { useState } from "react";
import StarSvg from "../../atom/star-svg";

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
  const [hover, setHover] = useState(false);
  const handleMouseLeave = () => setHover(false);
  const handleMouseOver = () => setHover(true);
  const actionWithPrevent = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    action();
  };
  return (
    <div
      className={`star-favorite ${isFavorite ? "is-favorite" : ""}`}
      title={altFavorite}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <MyButton action={actionWithPrevent} dataElem={dataElem}>
        <StarSvg filled={isFavorite} />
      </MyButton>
    </div>
  );
}
