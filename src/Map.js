import ReactDOM from "react-dom";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./map.css";
import "mapbox-gl/dist/mapbox-gl.css";

function Map(props) {
    mapboxgl.accessToken =
        "pk.eyJ1Ijoid2lsbGlhbXdhbmcwNjAyIiwiYSI6ImNreWpjNGJjdzFlbXkyb212Y3pjZnBxNHkifQ.x-AUe1Vk5tKF7k3j-wlfhg";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const todayData = props.data;
    const [lng, setLng] = useState(-122.3321);
    const [lat, setLat] = useState(47.6);
    const [zoom, setZoom] = useState(9);
    const popUp = useRef(null);

    function handleMouseEnter(crime) {
        popUp.current = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
        });
        popUp.current
            .setLngLat([crime.longitude, crime.latitude])
            .setHTML(
                `<strong>${crime.offense}</strong>
                <p>Start Time: ${crime.offense_start_datetime}</p>
                <p>End Time: ${crime.offense_end_datetime}</p>
                <p>Address: ${crime._100_block_address}</p>
                `
            )
            .addTo(map.current);
    }

    function handleMouseLeave() {
        popUp.current.remove();
    }

    useEffect(() => {
        if (todayData) {
            todayData.forEach((crime) => {
                // const marker = document.createElement('div'); // React can use document?????? to create HTMLDOM element rather than jsx element
                // marker.classList.add("marker");
                // marker.classList.add("crimeMarker");
                // marker.classList.add(`c${crime.offense_code}`);
                const container = document.createElement("div");
                ReactDOM.render(
                    <div
                        className={`marker crimeMarker c${crime.offense_code}`}
                        onMouseEnter={() => handleMouseEnter(crime)}
                        onMouseLeave={() => handleMouseLeave(crime)}></div>,
                    container
                );
                new mapboxgl.Marker(container)
                    .setLngLat([crime.longitude, crime.latitude])
                    .addTo(map.current);
            });
        }
        if (!map.current) {
            console.log("map");
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [lng, lat],
                zoom: zoom,
            });
        }
    }, [map.current, todayData]);

    return <div ref={mapContainer} className="map-container"></div>;
}

export default Map;
