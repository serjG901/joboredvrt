import "./style.css";

interface IProjectLogo {
  children: React.ReactNode;
}

export default function ProjectLogo({ children }: IProjectLogo) {
  return (
    <div className="project-logo">
      {typeof children === "string" ? (
        <img src={children} alt="logo" />
      ) : (
        children
      )}
    </div>
  );
}
