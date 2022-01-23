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


    useEffect(() => {
        if (todayData) {
            console.log("mark");
            todayData.forEach((crime) => {
                
                const marker = document.createElement('i'); // React can use document?????? to create HTMLDOM element rather than jsx element
                marker.classList.add("fas");
                marker.classList.add(crime.offense_code);
                new mapboxgl.Marker(marker)
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
