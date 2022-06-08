import "./About.css";

import { useEffect, useState } from "react";

interface Currency {
  ask: number;
  bid: number;
  code: string;
  currency: string;
}

const TableData = () => {
  const [data, setData] = useState([]);
  const URL =
    "https://api.nbp.pl/api/exchangerates/tables/C/?format=json/rates";

  useEffect(() => {
    fetchData(URL);
  }, []);

  const fetchData = (url: string) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res[0]["rates"]);
        setData(res[0]["rates"]);
      });
  };

  const currencyPreview = (c: Currency) => {
    return (
      <>
        <tr>
          <td>{c["code"]}</td>
          <td>{c["ask"]}</td>
          <td>{c["bid"]}</td>
          <td>{c["currency"]}</td>
        </tr>
      </>
    );
  };

  return (
    <>
      <h1>title</h1>
      <table>
        <tbody>
          <tr>
            <th>Code</th>
            <th>Ask</th>
            <th>Bid</th>
            <th>Currency</th>
          </tr>
          {data.map((item, idx) => currencyPreview(item))}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
