import React, { Component } from "react";

export function Alert(props) {
    const data = props.data;
    if (data) {
        let sortedData = data.sort((a, b) => {
            let ADate = new Date(a.offense_start_datetime);
            let BDate = new Date(b.offense_start_datetime);
            console.log(BDate.getTime() - ADate.getTime());
            return BDate.getTime() - ADate.getTime();
        });
        console.log(sortedData);
    }
    return (
        <div>
            <h1>Alert The Most Recent Crime</h1>
            <div>
                <div className="data-container">
                    <h2>Location</h2>
                    <p></p>
                </div>
                <div className="data-container">
                    <h2>Time</h2>
                    <p></p>
                </div>
                <div className="data-container">
                    <h2>Crime Type</h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Alert;
