import React, { useState } from "react";

export function Alert(props) {
    const data = props.data;
    const [mostRecentData, setData] = useState(null);

    if (data) {
        let sortedData = data.sort((a, b) => {
            // turn date string into Date then gettime to calculate
            //sort(compareFunction)
            //compareFunction(a,b) ?
            let ADate = new Date(a.offense_start_datetime);
            let BDate = new Date(b.offense_start_datetime);
            return BDate.getTime() - ADate.getTime();
        });
        if (!mostRecentData) {
            setData(sortedData[0]);
        }
    }

    function processDate(mostRecentData) {
        if (mostRecentData) {
            return (
                mostRecentData.offense_start_datetime.substr(0, 10) +
                " " +
                mostRecentData.offense_start_datetime.substr(11)
            );
        } else {
            return "";
        }
    }

    return (
        <div className="alert-container">
            <h1>Most Recent Crime Alert</h1>
            <div className="data">
                <div className="data-container">
                    <h2>Block Location</h2>
                    <p>
                        {mostRecentData
                            ? mostRecentData._100_block_address
                            : ""}
                    </p>
                </div>
                <div className="data-container">
                    <h2>Time</h2>
                    <p>{processDate(mostRecentData)}</p>
                </div>
                <div className="data-container">
                    <h2>Crime Type</h2>
                    <p>{mostRecentData ? mostRecentData.offense : ""}</p>
                </div>
            </div>
        </div>
    );
}

export default Alert;
