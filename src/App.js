import React, { useState, useEffect } from "react";
import Map from "./Map";
import Alert from "./Alert";
import "./index.css";

function App() {
    const token = "$$app_token=wH0ZPAJxQX2hg2xTaeLbqCbUV";
    const URL = `https://data.seattle.gov/resource/tazs-3rd5.json?${token}`;
    const [data, setData] = useState(null);

    useEffect(() => {
        const todayDate = new Date();
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
            });
    }, []);

    // async function getTodayCrimes() {
    //     if (!data) {

    //     }
    // }
    //data.cityofchicago.org/resource/6zsd-86xi.json?$where=date between '2015-01-10T12:00:00' and '2015-01-10T14:00:00'
    return (
        <div className="App">
            <header>
                <h1 className="text-3xl font-bold underline">
                    Seattle Crime Map
                </h1>
            </header>
            <body>
                <Alert data={data}/>
                <Map data={data} />
            </body>
            <footer></footer>
        </div>
    );
}

export default App;
