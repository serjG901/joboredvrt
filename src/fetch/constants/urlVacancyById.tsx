import urls from "./urls";

export default function urlVacancyById(id: number | string) {
  return `${urls.main}/${urls.vacancies}/${id}/`;
}
