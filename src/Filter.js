import React, { useEffect, useState } from "react";

function Filter(props) {
    const data = props.data;
    const setData = props.callBack;
    const [choice, setChoice] = useState(null);

    useEffect(() => {
        if (choice === "assult") {
            const filteredData = data.filter((crime) => {
                if (crime.offense_code.match(/^13[a-zA-Z]/)) {
                    return crime;
                }
                return null;
            })
            console.log(filteredData);
            setData(filteredData);
        }
    }, [choice]);

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
                        onClick={() => setChoice("assult")}>
                        Assult
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Filter;
