import "./ExploreContainer.css";

import { CreateAnimation, IonFooter, IonSkeletonText, IonTitle } from "@ionic/react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

interface ContainerProps {
  name: string;
}

const queryClient = new QueryClient();

const FetchCurrency: React.FC<ContainerProps> = ({ name }) => {
  const url = `http://api.nbp.pl/api/exchangerates/rates/C/${name}/?format=json`;
  const { isFetching, data } = useQuery(["currencyData"], () =>
    fetch(url).then((res) => res.json())
  );

  const getBidAndAsk = (data: any) => {
    // TODO: Refactor that to return many values + desctructuring
    return [data?.["rates"][0]["bid"], data?.["rates"][0]["ask"], data?.["currency"]];
  };


  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <strong>{name}</strong>
        <p className="subtitle">({getBidAndAsk(data)[2]})</p>
        {/* <p className="subtitle">what is your value?</p> */}

        {/* TODO: Do wait for data before displaying it (maybe skeleton?) */}
        {useQuery("currencyData").isFetching ? (
          <>
            <IonSkeletonText animated style={{ width: "88%" }} />
            <IonSkeletonText animated style={{ width: "88%" }} />
          </>
        ) : (
          data && (
            <>
              <div className="exchangeValuesContainer">
                <p>ask: {getBidAndAsk(data)[1]}</p>
                <p>bid: {getBidAndAsk(data)[0]}</p>
              </div>
            </>
          )
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
