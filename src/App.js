import React from "react";
import Map from "./Map";
import './index.css';


function App() {
    return (
        <div className="App">
            <header>
                <h1 className="text-3xl font-bold underline">Seattle Crime Map</h1>
            </header>
            <body>
                <Map />
            </body>
            <footer></footer>
        </div>
    );
}

export default App;
