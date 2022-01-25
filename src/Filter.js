import React, { useEffect, useState } from "react";

function Filter(props) {
    const data = props.data;
    const setData = props.callBack;
    const [choice, setChoice] = useState(null);

    useEffect(() => {
        filter("Assult", /^13[a-zA-Z]/);
        filter("All");
        filter("Murder", /^09/);
        filter("Burglary", "220");
        filter("Robbery", "120");
        filter("Other");
    }, [choice]);

    function filter(filterTerm, expression) {
        if (choice === "All") {
            setData(data);
        } else if (choice === "Other") {
            const filteredData = data.filter((crime) => {
                if (
                    crime.offense_code.match(/^13[a-zA-Z]|^09/) ||
                    crime.offense_code === "120" ||
                    crime.offense_code === "220"
                ) {
                    return null;
                }
                return crime;
            });
            setData(filteredData);
        } else if (choice === filterTerm) {
            const filteredData = data.filter((crime) => {
                if (
                    crime.offense_code === expression ||
                    crime.offense_code.match(expression)
                ) {
                    return crime;
                }
                return null;
            });
            setData(filteredData);
        }
    }

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="filter"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {choice ? choice : "Filter"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="filter">
                <li>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("All")}>
                        All
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("Assult")}>
                        Assult
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("Burglary")}>
                        Burglary
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("Robbery")}>
                        Robbery
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("Other")}>
                        Other
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Filter;
