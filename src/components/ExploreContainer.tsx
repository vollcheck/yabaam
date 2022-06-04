import "./ExploreContainer.css";

import { IonFooter, IonTitle } from "@ionic/react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

interface ContainerProps {
  name: string;
}

const queryClient = new QueryClient();

const FetchCurrency: React.FC<ContainerProps> = ({ name }) => {
  const url = `http://api.nbp.pl/api/exchangerates/rates/C/${name}/?format=json`;
  const { isLoading, error, data } = useQuery("currencyData", () =>
    fetch(url).then((res) => res.json())
  );

  const getBidAndAsk = (data: any) => {
    // TODO: Refactor that to return many values + desctructuring
    return [data?.["rates"][0]["bid"], data?.["rates"][0]["ask"]];
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <strong>{name}</strong>
        <p className="subtitle">what is your value?</p>

        {/* TODO: Do wait for data before displaying it (maybe skeleton?) */}
        {isLoading ? (
          <p>Downloading fresh currency data...</p>
        ) : error ? (
          <p>Having troubles fetching data, will try again in a minute...</p>
        ) : (
          <div className="exchangeValuesContainer">
            <p>ask: {getBidAndAsk(data)[1]}</p>
            <p>bid: {getBidAndAsk(data)[0]}</p>
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
};

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FetchCurrency name={name} />
      </QueryClientProvider>
      <div className="y-footer">
        <IonFooter>
          <IonTitle size="small" color="medium">
            made by JW/HL/JP squad 😏
          </IonTitle>
        </IonFooter>
      </div>
    </>
  );
};

export default ExploreContainer;
