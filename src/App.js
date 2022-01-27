import React, { useState, useEffect } from "react";
import Map from "./Map";
import Alert from "./Alert";
import Filter from "./Filter";
import "./index.css";

function App() {
    const token = "$$app_token=wH0ZPAJxQX2hg2xTaeLbqCbUV";
    const URL = `https://data.seattle.gov/resource/tazs-3rd5.json?${token}`;
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        const todayDate = new Date();
        // Date.getTime: when you need to calculate Date, getTime() returns the number of milliseconds since January 1, 1970 00:00:00. then +-*/
        const isoDate = new Date(
            todayDate.getTime() -
                todayDate.getTimezoneOffset() * 60000 -
                24 * 3600000
        )
            .toISOString()
            .substr(0, 10);
        const query = `&$where=offense_start_datetime>'${isoDate}T00:00:00.000'`;
        console.log(URL + query);
        fetch(URL + query)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setData(res);
                setFilteredData(res);
            });
    }, []);

    return (
        <div className="App">
            <header>
                <h1 className="text-2xl font-bold text-white">
                    Seattle Crime Map
                </h1>
            </header>
            <body>
                <Alert data={data}/>
                <Filter data={data} callBack={setFilteredData}></Filter>
                <Map data={filteredData} />
            </body>
            <footer></footer>
        </div>
    );
}

export default App;
