import "./App.css";
import ErrorBoundary from "./components/substance/errorboundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./routes/main-page";
import Error404Page from "./routes/error-404-page";
import VacanciesPage from "./routes/vacancies-page";
import FavoritesPage from "./routes/favorites-page";
import VacancyPage from "./routes/vacancy-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "vacancies",
        element: <VacanciesPage />,
      },
      {
        path: "vacancies/:id",
        element: <VacancyPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
