import { Link } from "react-router-dom";
import MyButton from "../../atom/my-button";
import "./style.css";

interface IEmptySearch {
  image: string;
  text: { explain: string; textButton: string };
}

export default function EmptySearch({ image, text }: IEmptySearch) {
  return (
    <div className="empty-search">
      <img src={image} alt={text.explain} />
      <div className="empty-search-text">{text.explain}</div>
      <div className="empty-search-button">
        <Link to={"/vacancies"}>
          <MyButton>{text.textButton}</MyButton>
        </Link>
      </div>
    </div>
  );
}
