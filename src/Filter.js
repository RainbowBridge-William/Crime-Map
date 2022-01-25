import React, { useEffect, useState } from "react";

function Filter(props) {
    const data = props.data;
    const setData = props.callBack;
    const [choice, setChoice] = useState(null);

    useEffect(() => {
        filter("assult", /^13[a-zA-Z]/);
        filter("all");
        filter("murder", /^09/);
        filter("burglary", "220");
        filter("robbery", "120");
        filter("other");
    }, [choice]);

    function filter(filterTerm, expression) {
        if (choice === "all") {
            setData(data);
        } else if (choice === "other") {
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
                Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="filter">
                <li>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("all")}>
                        All
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("assult")}>
                        Assult
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("burglary")}>
                        Burglary
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("robbery")}>
                        Robbery
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={() => setChoice("other")}>
                        Other
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Filter;
