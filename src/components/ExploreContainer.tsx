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

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: "; // + error.message;

  const rates = data?.["rates"][0];
  const bid = rates?.["bid"];
  const ask = rates?.["ask"];

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <strong>{name}</strong>
        <p>What is your value?</p>
        <p>
          ask: {ask} bid: {bid}
        </p>
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
