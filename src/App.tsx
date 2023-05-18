import "./App.css";
import ErrorBoundary from "./components/substance/errorboundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./routes/main-page";
import ErrorPage from "./routes/error-page";
import VacanciesPage from "./routes/vacancies-page";
import FavoritesPage from "./routes/favorites-page";
import VacancyPage from "./routes/vacancy-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
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
