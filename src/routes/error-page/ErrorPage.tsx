import { useRouteError } from "react-router-dom";
import ErrorSearchData from "../../components/soul/error-search-data";

interface IError {
  status?: string;
  statusText?: string;
  data?: string;
  message?: string;
}

export default function ErrorPage() {
  const error: IError = useRouteError() as IError;
  console.error("errorpage", error);

  return (
    <div id="error-page">
      <ErrorSearchData />
      <h1>{error.status}</h1>
      <h2>{error.statusText}</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.data || error.message}</i>
      </p>
    </div>
  );
}
