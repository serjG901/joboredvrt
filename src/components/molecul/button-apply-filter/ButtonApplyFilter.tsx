import "./style.css";
import MyButton from "../../atom/my-button";

interface IButtonApplyFilter {
  text: string;
  action: () => void;
}

export default function ButtonApplyFilter({ text, action }: IButtonApplyFilter) {
  return (
    <div className="button-apply-filter">
      <MyButton action={action}>{text}</MyButton>
    </div>
  );
}
