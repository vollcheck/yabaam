import "./ExploreContainer.css";

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
        <p>What is your value?</p>

        {/* TODO: Do wait for data before displaying it (maybe skeleton?) */}
        {isLoading ? (
          <p>Downloading fresh currency data...</p>
        ) : error ? (
          <p>Having troubles fetching data, will try again in a minute...</p>
        ) : (
          <p>
            {/* TODO: Refactor that along with `getBidAndAsk` */}
            ask: {getBidAndAsk(data)[1]} bid: {getBidAndAsk(data)[0]}
          </p>
        )}
      </div>
    </QueryClientProvider>
  );
};

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FetchCurrency name={name} />
    </QueryClientProvider>
  );
};

export default ExploreContainer;
