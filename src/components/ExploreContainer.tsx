import "./ExploreContainer.css";

import {
  CreateAnimation,
  IonFooter,
  IonSkeletonText,
  IonTitle,
} from "@ionic/react";
import {
  CurrencyContext,
  CurrencyContextType,
  ICurrency,
} from "../currencyContext";
import { useCallback, useContext, useEffect, useState } from "react";

const Footer = () => {
  return (
    <div className="y-footer">
      <IonFooter>
        <IonTitle size="small" color="medium">
          made by JW/HL/JP squad 😏
        </IonTitle>
      </IonFooter>
    </div>
  );
};

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [currency, setCurrency] = useState<ICurrency | null>();
  const { currencies, addCurrency, removeCurrency } = useContext(
    CurrencyContext
  ) as CurrencyContextType;

  const parseCurrency = (data: any): ICurrency => {
    const code = data["code"];
    const result = {
      url: `/currency/${code}`,
      code: code,
      currency: data["currency"],
      bid: data["rates"][0]["bid"],
      ask: data["rates"][0]["ask"],
    } as ICurrency;
    return result;
  };

  const fetchData = useCallback(async () => {
    const url = `http://api.nbp.pl/api/exchangerates/rates/C/${name}/?format=json`;
    const data = await fetch(url).then((res) => res.json());
    const parsedData = parseCurrency(data);
    setCurrency(parsedData);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  console.log(currencies);

  return (
    <>
      <div className="container">
        <strong>{name}</strong>
        {currency && (
          <>
            <p className="subtitle">({currency["currency"]})</p>
            <div className="exchangeValuesContainer">
              <p>ask: {currency["ask"]}</p>
              <p>bid: {currency["bid"]}</p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ExploreContainer;
