import { Link } from "react-router-dom";
import MyButton from "../../atom/my-button";
import "./style.css";

interface IEmptySearch {
  image: string;
  text: { explain: string; textButton: string };
  hasLink?: boolean;
  action: () => void;
}

export default function EmptySearch({ image, text, hasLink, action }: IEmptySearch) {
  return (
    <div className="empty-search">
      <img src={image} alt={text.explain} />
      <div className="empty-search-text">{text.explain}</div>
      {hasLink && (
        <div className="empty-search-button">
          <Link to={"/vacancies"}>
            <MyButton action={action}>{text.textButton}</MyButton>
          </Link>
        </div>
      )}
    </div>
  );
}
