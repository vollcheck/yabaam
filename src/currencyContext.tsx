import * as React from "react";

export interface ICurrency {
  url: string;
  code: string;
  currency?: string;
  bid?: number;
  ask?: number;
}

export type CurrencyContextType = {
  currencies: ICurrency[];
  addCurrency: (currency: ICurrency) => void;
  removeCurrency: (code: string) => void;
};

export const initialCurrencies: ICurrency[] = [
  {
    code: "GBP",
    url: "/currency/GBP",
  },
  {
    code: "EUR",
    url: "/currency/EUR",
  },
];

export const CurrencyContext = React.createContext<CurrencyContextType | null>(
  null
);

interface ProviderProps {
  children: any;
}

export const CurrencyProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currencies, setCurrencies] =
    React.useState<ICurrency[]>(initialCurrencies);

  const addCurrency = (currency: ICurrency) => {
    setCurrencies([...currencies, currency]);
  };

  const removeCurrency = (code: string) => {
    const newCurrencies = currencies.filter((c) => c.code !== code);
    setCurrencies(newCurrencies);
  };

  return (
    <CurrencyContext.Provider
      value={{ currencies, addCurrency, removeCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
