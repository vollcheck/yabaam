// TODO: To remove

import { Store } from "pullstate";

export interface CurrencyPage {
  code: string;
  url: string;
}

// Initial values
export const currencyStore = new Store<CurrencyPage[]>([
  {
    code: "GBP",
    url: "/currency/GBP",
  },
  {
    code: "EUR",
    url: "/currency/EUR",
  },
]);
