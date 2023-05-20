import "./style.css";
import StarEmpty from "./star-empty.svg";
import StarFill from "./star-fill.svg";
import StarHover from "../../../assets/favorite-star-empty-hover.svg";
import MyButton from "../../atom/my-button";
import { useState } from "react";

interface IStarFavorite {
  action: () => void;
  isFavorite: boolean;
  altFavorite: string;
}

export default function StarFavorite({
  action,
  isFavorite,
  altFavorite,
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
      <MyButton action={actionWithPrevent}>
        <>
          <img
            className={`star-favorite-star ${
              !isFavorite ? "is-favorite-empty" : ""
            }`}
            src={hover ? StarHover : StarEmpty}
            alt={altFavorite}
          />
          <img
            className={`star-favorite-star ${
              isFavorite ? "is-favorite-fill" : ""
            }`}
            src={StarFill}
            alt={altFavorite}
          />
        </>
      </MyButton>
    </div>
  );
}
