import "./style.css";

interface IMyButton {
  children: React.ReactNode;
  action?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  dataElem?: string;
}

export default function MyButton({
  children,
  action,
  disabled,
  dataElem,
}: IMyButton) {
  return (
    <button
      className="my-button"
      onClick={action}
      disabled={disabled}
      data-elem={dataElem}
    >
      {children}
    </button>
  );
}
