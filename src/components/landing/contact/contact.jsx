import React from 'react';
import styles from "./contact.module.css";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
    width: '100%',
    height: '100%'
}
const center = {
    lat: 37.519642,
    lng: -122.277473
}

function Contact () {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    if(loadError) return "Error Loading Map";
    if(!isLoaded) return "Loading Maps";

    return (
        <section className={`container-fluid px-0 pt-4 d-flex flex-column ${styles.contact} text-center`}>
            <div id="address" className="d-flex flex-column">
                <div>
                    <h5><b><u>CONTACT</u></b></h5>
                </div>
                <div className="pt-2">
                    <p>
                        968 Ralston Ave
                        <br/>
                        Belmont,CA 94002
                    </p>
                    <p>
                        T:(650) 620-9102
                    </p>
                </div>
            </div>
            <div id={styles.mapWrapper} className="container-fluid p-0 w-100">
                <GoogleMap 
                    mapContainerStyle={mapContainerStyle}
                    zoom={18}
                    center={center}
                ></GoogleMap>
            </div>
        </section>
    )
}

export default Contact;