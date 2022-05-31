import { Method } from "ionicons/dist/types/stencil-public-runtime";

interface CurrencyRate {
    currency: string,
    code: string,
    date: string,
    bid: number, // when you sell
    ask: number, // when you buy
}


const CURRENCY_CODE = "GBP";
const BASE_URL = `http://api.nbp.pl/api/exchangerates/rates/C/${CURRENCY_CODE}/?format=json`

async function getCurrencyData() {
    try {
        const response = await fetch(
            BASE_URL, { 
            method: 'GET',
            headers: { Accept: 'application/json' }
        });

        if (!response.ok) {
            throw new Error(`Error! status ${response.status}`);
        }

        const result = (await response.json()) as CurrencyRate;
        return result;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

interface ContainerProps {
    name: string;
  }
  
const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};
  
export default getCurrencyData;
