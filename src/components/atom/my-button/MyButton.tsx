import "./style.css";

interface IMyButton {
  children: React.ReactNode;
  action?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  dataElem?: string;
  title?: string;
}

export default function MyButton({
  children,
  action,
  disabled,
  dataElem,
  title,
}: IMyButton) {
  return (
    <button
      className="my-button"
      onClick={action}
      disabled={disabled}
      data-elem={dataElem}
      title={title}
    >
      {children}
    </button>
  );
}
