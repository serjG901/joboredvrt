import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IText {
  header: {
    projectName: string;
    links: { text: string; href: string }[];
  };
  filtervacancies: {
    formName: string;
    formResetText: string;
    catalogies: string;
    payment: string;
    placeholders: {
      catalogies: string;
      payment_from: string;
      payment_to: string;
    };
    buttontext: string;
    loadingmessage: string;
    errormessage: string;
    showFilter: string;
    hideFilter: string;
  };
  searchvacancies: {
    placeholder: string;
    textButton: string;
  };
  emptysearch: { explain: string; textButton: string };
  emptyFavorites: { explain: string; textButton: string };
  errorSearch: string;
  altAddFavorite: string;
  altDeleteFavorite: string;
  paymentTemplate: {
    payment: string;
    from: string;
    to: string;
    empty: string;
  };
  paginateTitle: {
    previous: string;
    page: string;
    next: string;
  };
}

interface ITextes {
  [key: string]: IText;
}

interface LanguageState {
  currentLanguage: string;
  textes: IText;
  setCurentLanguage: (lang: string) => void;
}

const textes: ITextes = {
  ru: {
    header: {
      projectName: "Jobored",
      links: [
        { text: "Поиск Вакансий", href: "/vacancies" },
        { text: "Избранное", href: "/favorites" },
      ],
    },
    filtervacancies: {
      catalogies: "Отрасль",
      payment: "Оклад",
      formName: "Фильтры",
      formResetText: "Сбросить все",
      placeholders: {
        catalogies: "Выберите отрасль",
        payment_from: "От",
        payment_to: "До",
      },
      buttontext: "Применить",
      loadingmessage: "Загружаем данные...",
      errormessage: "Ошибка загрузки...",
      showFilter: "Показать фильтр",
      hideFilter: "Спрятать фильтр",
    },
    searchvacancies: {
      placeholder: "Введите название вакансии",
      textButton: "Поиск",
    },
    emptysearch: {
      explain: "Упс, ничего не нашли!",
      textButton: "Поиск вакансий",
    },
    emptyFavorites: {
      explain: "Упс, здесь еще ничего нет!",
      textButton: "Поиск вакансий",
    },
    errorSearch: "Ошибка. Что-то пошло не так!",
    altAddFavorite: "Добавить в избранное",
    altDeleteFavorite: "Удалить из избранного",
    paymentTemplate: {
      payment: "з/п",
      from: "от",
      to: "до",
      empty: "не указана",
    },
    paginateTitle: {
      previous: "Предыдущая страница",
      page: "страница",
      next: "Следующая страница",
    },
  },
};

const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      currentLanguage: "ru",
      textes: textes["ru"],
      setCurentLanguage: (lang) =>
        set({ currentLanguage: lang, textes: textes[lang] }),
    }),
    {
      name: "currentLanguage-storage",
      partialize: (state) => state.currentLanguage,
    }
  )
);

export default useLanguageStore;
