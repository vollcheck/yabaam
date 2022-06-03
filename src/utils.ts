import { CurrencyPage } from "./appStore";

export const createCurrency = (code: string) => {
  return {
    code: code,
    url: `/currency/${code}`,
  } as CurrencyPage;
};
