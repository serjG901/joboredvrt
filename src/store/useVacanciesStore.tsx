import { create } from "zustand";
import { persist } from "zustand/middleware";
import fetchVacancies from "../fetch/fetchVacancies";
import fetchCatalogues from "../fetch/fetchCatalogues";
import fetchFavotitesVacancies from "../fetch/fetchFavoritesVacancies";
import fetchVacancyById from "../fetch/fetchVacancyById";

export interface IVacancy {
  canEdit: boolean;
  is_closed: boolean;
  id: number;
  id_client: number;
  payment_from: number;
  payment_to: number;
  date_pub_to: number;
  date_archived: number;
  date_published: number;
  address: string;
  profession: string;
  work: null;
  compensation: null;
  candidat: string;
  metro: string[];
  currency: string;
  vacancyRichText: string;
  covid_vaccination_requirement: {
    id: number;
    title: string;
  };
  contact: string;
  moveable: boolean;
  agreement: boolean;
  anonymous: boolean;
  is_archive: boolean;
  is_storage: boolean;
  type_of_work: {
    id: number;
    title: string;
  };
  place_of_work: {
    id: number;
    title: string;
  };
  education: {
    id: number;
    title: string;
  };
  experience: {
    id: number;
    title: string;
  };
  maritalstatus: {
    id: number;
    title: string;
  };
  children: {
    id: number;
    title: string;
  };
  client: {
    id: number;
    title: string;
    link: string;
    industry: string[];
    description: string;
    vacancy_count: number;
    staff_count: string;
    client_logo: string;
    address: null;
    addresses: string[];
    url: string;
    short_reg: boolean;
    is_blocked: boolean;
    registered_date: number;
    town: {
      id: number;
      title: string;
      declension: string;
      hasMetro: boolean;
      genitive: string;
    };
  };
  languages: string[];
  driving_licence: string[];
  catalogues: {
    id: number;
    title: string;
    key: number;
    positions: {
      id: number;
      title: string;
      key: number;
    }[];
  }[];
  agency: {
    id: number;
    title: string;
  };
  town: {
    id: number;
    title: string;
    declension: string;
    hasMetro: boolean;
    genitive: string;
  };
  already_sent_on_vacancy: boolean;
  rejected: boolean;
  response_info: string[];
  phone: string;
  phones: {
    number: number;
    additionalNumber: null;
  }[];
  fax: null;
  faxes: null;
  favorite: boolean;
  client_logo: string;
  highlight: boolean;
  age_from: number;
  age_to: number;
  gender: {
    id: number;
    title: string;
  };
  firm_name: string;
  firm_activity: string;
  link: string;
  isBlacklisted: boolean;
  latitude: number;
  longitude: number;
}

interface IVacancies {
  more: boolean;
  objects: IVacancy[];
  subscription_active: boolean;
  subscription_id: number;
  total: number;
}

interface ICatalog {
  key: number;
  positions: {
    id_parent: number;
    key: number;
    title: string;
    title_rus: number;
    url_rus: number;
  }[];
  title: string;
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}

interface VacanciesState {
  vacancies: IVacancy[];
  loadingVacancies: boolean;
  errorVacancies: unknown | null;
  getVacancies: () => void;

  totalVacancies: number;
  pageActive: number;
  itemsPerPage: number;
  setPageActive: (page: number) => void;
  setPreviousPage: () => void;
  setNextPage: () => void;

  keyword: string;
  setKeyword: (keyword: string) => void;

  payment_from: number;
  setPayment_from: (payment_from: string) => void;

  payment_to: number;
  setPayment_to: (payment_to: string) => void;

  order: string;

  catalog: ICatalog | null;
  setCatalog: (catalog: string) => void;

  catalogues: ICatalog[];
  loadingCatalogues: boolean;
  errorCatalogues: unknown | null;
  getCatalogues: () => void;
  applyFilter: () => void;
  resetFilter: () => void;

  favoriteVacanciesIds: number[];
  addFavoriteVacancyId: (id: number) => void;
  deleteFavoriteVacancyId: (id: number) => void;

  favoriteVacancies: IVacancy[];
  loadingFavoriteVacancies: boolean;
  errorFavoriteVacancies: unknown | null;
  getFavoriteVacancies: () => void;

  pageActiveFavoriteVacancies: number;
  totalFavoriteVacancies: number;
  itemsPerPageFavoriteVacancies: number;
  setPageActiveFavoriteVacancies: (page: number) => void;
  setPreviousPageFavoriteVacancies: () => void;
  setNextPageFavoriteVacancies: () => void;

  vacancyPage: null | IVacancy;
  loadingVacancyPage: boolean;
  errorVacancyPage: null | unknown;
  getVacancyPageById: (id: number | string) => void;
}

const useVacanciesStore = create<VacanciesState>()(
  persist(
    (set, get) => ({
      vacancies: [],
      loadingVacancies: false,
      errorVacancies: null,
      getVacancies: async () => {
        if (get().keyword) return;
        if (get().errorCatalogues) get().getCatalogues();
        set({ errorVacancies: null });
        set({ loadingVacancies: true });
        set({ vacancies: [] });
        const keyword = get().keyword;
        const payment_from = get().payment_from;
        const payment_to = get().payment_to;
        const catalogKey = get().catalog?.key || 0;
        console.log(catalogKey);
        const page = get().pageActive;
        const count = get().itemsPerPage;
        const order_field = get().order;
        try {
          const res = (await fetchVacancies({
            keyword,
            payment_from,
            payment_to,
            catalogKey,
            page,
            count,
            order_field,
          })) as IVacancies;
          set({
            vacancies: [...res.objects],
            totalVacancies: res.total > 500 ? 500 : res.total,
          });
        } catch (error) {
          console.log(error);
          set({ errorVacancies: error });
        }
        set({ loadingVacancies: false });
      },

      totalVacancies: 0,
      pageActive: 0,
      itemsPerPage: 4,
      setPageActive: (page: number) => {
        set({ pageActive: page });
        console.log(get().pageActive);
        get().getVacancies();
      },
      setPreviousPage: () => {
        const page = get().pageActive;
        if (page > 1) {
          set({ pageActive: get().pageActive - 1 });
          console.log(get().pageActive);
          get().getVacancies();
        }
      },
      setNextPage: () => {
        const page = get().pageActive;
        const total = get().totalVacancies;
        if (page < total) {
          set({ pageActive: get().pageActive + 1 });
          console.log(get().pageActive);
          get().getVacancies();
        }
      },

      keyword: "",
      setKeyword: (keyword) => set({ keyword }),

      payment_from: 0,
      setPayment_from: (payment_from) => set({ payment_from: +payment_from }),

      payment_to: 0,
      setPayment_to: (payment_to) => set({ payment_to: +payment_to }),

      order: "date",

      catalog: null,
      setCatalog: (title_trimmed: string) =>
        set({
          catalog: get().catalogues.find(
            (item: ICatalog) => item.title_trimmed === title_trimmed
          ),
        }),

      catalogues: [],
      loadingCatalogues: true,
      errorCatalogues: null,
      applyFilter: () => {
        if (get().errorCatalogues) return;
        const emptyFilter =
          !get().catalog && !get().payment_from && !get().payment_to;
        if (emptyFilter) return;
        get().getVacancies();
      },
      resetFilter: () => {
        set({
          keyword: "",
          payment_from: 0,
          payment_to: 0,
          catalog: null,
        });
        get().getVacancies();
      },

      getCatalogues: async () => {
        set({ errorCatalogues: null });
        set({ loadingCatalogues: true });
        set({ catalogues: [] });
        try {
          const res = (await fetchCatalogues()) as ICatalog[];
          set({ catalogues: [...res] });
        } catch (error) {
          set({ errorCatalogues: error });
        }
        set({ loadingCatalogues: false });
      },

      favoriteVacanciesIds: [],
      addFavoriteVacancyId: (id) =>
        set((state) => ({
          favoriteVacanciesIds: [...state.favoriteVacanciesIds, id],
        })),
      deleteFavoriteVacancyId: (id) =>
        set((state) => ({
          favoriteVacanciesIds: state.favoriteVacanciesIds.filter(
            (item) => item != id
          ),
        })),

      favoriteVacancies: [],
      loadingFavoriteVacancies: false,
      errorFavoriteVacancies: null,
      getFavoriteVacancies: async () => {
        set({ errorFavoriteVacancies: null });
        set({ loadingFavoriteVacancies: true });
        set({ favoriteVacancies: [] });
        const ids = get().favoriteVacanciesIds;
        if (!ids.length) {
          set({ loadingFavoriteVacancies: false });
          return;
        }
        const count = get().itemsPerPageFavoriteVacancies;
        const pageState = get().pageActiveFavoriteVacancies;
        const maxPages = Math.ceil(ids.length / count) - 1;
        const page = maxPages < pageState ? maxPages : pageState;
        try {
          const res = (await fetchFavotitesVacancies({
            ids,
            page,
            count,
          })) as IVacancies;
          set({
            favoriteVacancies: [...res.objects],
            totalFavoriteVacancies: res.total > 500 ? 500 : res.total,
            pageActiveFavoriteVacancies: page,
          });
        } catch (error) {
          console.log(error);
          set({ errorFavoriteVacancies: error });
        }
        set({ loadingFavoriteVacancies: false });
      },

      pageActiveFavoriteVacancies: 0,
      totalFavoriteVacancies: 0,
      itemsPerPageFavoriteVacancies: 4,
      setPageActiveFavoriteVacancies: (page: number) => {
        set({ pageActiveFavoriteVacancies: page });
        console.log(get().pageActiveFavoriteVacancies);
        get().getFavoriteVacancies();
      },
      setPreviousPageFavoriteVacancies: () => {
        const page = get().pageActiveFavoriteVacancies;
        if (page > 1) {
          set({
            pageActiveFavoriteVacancies: get().pageActiveFavoriteVacancies - 1,
          });
          console.log(get().pageActiveFavoriteVacancies);
          get().getFavoriteVacancies();
        }
      },
      setNextPageFavoriteVacancies: () => {
        const page = get().pageActiveFavoriteVacancies;
        const total = get().totalFavoriteVacancies;
        if (page < total) {
          set({
            pageActiveFavoriteVacancies: get().pageActiveFavoriteVacancies + 1,
          });
          console.log(get().pageActiveFavoriteVacancies);
          get().getFavoriteVacancies();
        }
      },

      vacancyPage: null,
      loadingVacancyPage: false,
      errorVacancyPage: null,
      getVacancyPageById: async (id) => {
        if (!id) set({ errorVacancyPage: "not found" });
        set({ vacancyPage: null });
        set({ loadingVacancyPage: true });
        set({ errorVacancyPage: null });
        try {
          const res = (await fetchVacancyById(id)) as IVacancy;
          set({ vacancyPage: res });
        } catch (error) {
          set({ errorVacancyPage: error });
        }
        set({ loadingVacancyPage: false });
      },
    }),
    {
      name: "favorites-ids-storage",
      partialize: (state) => ({
        favoriteVacanciesIds: state.favoriteVacanciesIds,
      }),
    }
  )
);

export default useVacanciesStore;
