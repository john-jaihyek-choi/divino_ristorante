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
            <div id="address" className="d-flex flex-column overflow-auto">
                <div className="contactInfo">
                    <h5><b><u>CONTACT</u></b></h5>
                </div>
                <div className="pt-2">
                    <p>
                        968 Ralston Ave
                        <br/>
                        Belmont,CA 94002
                    </p>
                    <a href="tel:1-562-708-7297" className="text-white">
                        <u>T:(650) 620-9102</u>
                    </a>
                </div>
            </div>
            <div id={styles.mapWrapper} className="container-fluid px-0 py-4 w-100">
                <GoogleMap 
                    mapContainerStyle={mapContainerStyle}
                    zoom={18}
                    center={center}
                ></GoogleMap>
            </div>
            <div id="hours" className="d-flex flex-column overflow-auto">
                <div>
                    <h5><b><u>Temporary Hours</u></b></h5>
                </div>
                <div>
                    <p>
                        Mon - Sun: 5:00 pm - 7:00 pm
                        <br/>
                        Pick Up or Delivery
                    </p>
                </div>
                <div>
                    <h5><b><u>Normal Hours</u></b></h5>
                </div>
                <div>
                    <h6><b>Lunch:</b></h6>
                </div>
                <div>
                    <p>Mon - Fri: 11:30 am - 2:00 pm</p>
                </div>
                <div>
                    <h6><b>Dinner:</b></h6>
                </div>
                <div>
                    <p>
                        Mon - Sat: 5:00 pm - 9:30 pm
                        <br/>
                        Sun: 5:00 pm - 9:00 pm
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact;