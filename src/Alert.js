import React, { useState } from "react";

export function Alert(props) {
    const data = props.data;
    const [mostRecentData, setData] = useState(null);


    if (data) {
        let sortedData = data.sort((a, b) => {
            let ADate = new Date(a.offense_start_datetime);
            let BDate = new Date(b.offense_start_datetime);
            return BDate.getTime() - ADate.getTime();
        });
        if (!mostRecentData) {
            setData(sortedData[0]);
        }
    }
    return (
        <div>
            <h1>Alert The Most Recent Crime</h1>
            <div>
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
                    <p>
                        {mostRecentData
                            ? mostRecentData.offense_start_datetime
                            : ""}
                    </p>
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
