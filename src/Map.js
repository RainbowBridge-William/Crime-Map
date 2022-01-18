import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./map.css";

function Map() {
    mapboxgl.accessToken =
        "pk.eyJ1Ijoid2lsbGlhbXdhbmcwNjAyIiwiYSI6ImNreWpjNGJjdzFlbXkyb212Y3pjZnBxNHkifQ.x-AUe1Vk5tKF7k3j-wlfhg";

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.3321);
    const [lat, setLat] = useState(47.6);
    const [zoom, setZoom] = useState(9);
    
    useEffect(() => {

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
        const marker = new mapboxgl.Marker()
            .setLngLat([-122.3321, 47.6062])
            .addTo(map.current);
    }, []);

    return <div ref={mapContainer} className="map-container"></div>;
}

export default Map;
