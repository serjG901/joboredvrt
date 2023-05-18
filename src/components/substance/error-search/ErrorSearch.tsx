import "./style.css";

interface IErrorSearch {
  image: string;
  text: string;
}

export default function ErrorSearch({ image, text }: IErrorSearch) {
  return (
    <div className="error-search">
      <img src={image} alt={text} />
      <div className="error-search-text">{text}</div>
    </div>
  );
}
