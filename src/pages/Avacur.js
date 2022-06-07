import "./About.css";

import React, { useState, useEffect } from 'react';
 
function TableData() {
    const [data, getData] = useState([])
    const URL = 'https://api.nbp.pl/api/exchangerates/tables/C/?format=json/rates';
 
    useEffect(() => {
        fetchData()
    }, [])
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
    }
 
    return (
        <>
            <h1>title</h1>
            <table>
            <tbody>
                <tr>
                    <th>Code</th>
                    <th>BID</th>
                    <th>Currency</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item["rates"][i]["code"]}</td>
                        <td>{item["rates"][i]["bid"]}</td>
                        <td>{item["rates"][i]["currency"]}</td>
                        <td>{i}</td>
                    </tr>
                ))}
            </tbody>
            </table>
                    
        </>
    );
}
 
export default TableData;