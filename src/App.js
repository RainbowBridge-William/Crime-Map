import React, {useState, useEffect} from "react";
import Map from "./Map";
import './index.css';



function App() {
  const token = "$$app_token=wH0ZPAJxQX2hg2xTaeLbqCbUV";
  const URL = `https://data.seattle.gov/resource/tazs-3rd5.json&${token}`;
  const { data, setData } = useState(null);

  useEffect(() => {
    fetch(URL)
    .then((res) => {return res.json()})
    .then((res) => {setData(res)})
  }, [])

    return (
        <div className="App">
            <header>
                <h1 className="text-3xl font-bold underline">Seattle Crime Map</h1>
            </header>
            <body>
                <Map data={""}/>
            </body>
            <footer></footer>
        </div>
    );
}

export default App;
