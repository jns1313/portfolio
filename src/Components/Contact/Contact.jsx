import { useState, useEffect } from 'react';
import TextAnimations from '../TextAnimations/TextAnimations';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import Loader from 'react-loaders';
import './contact.scss';

const Contact = () => {

    const [charClass, setCharClass] = useState('text-animation');

    useEffect(() => {
        const hoverTimer = setTimeout(() => {
            setCharClass('text-animation-hover');
        }, 4000)

        return () => clearTimeout(hoverTimer);
    }, [])

    return(
        <>
        <Loader type="line-scale" />
        <div className="section contact-section">
            <div className="intro-title">
                <h1>
                    <TextAnimations charClass={charClass} currentArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} index={5} />
                </h1>
            </div>
            <form>
                <input className="half" name="name" type="text" placeholder="Name" />
                <input className="half" name="email" type="email" placeholder="Email" />
                <input className="full" name="subject" type="text" placeholder="Subject" />
                <textarea name="message" placeholder="Message"></textarea>
                <input className="send-btn" type="submit" value="Send" />
            </form>
            <div className="info-map">
                Joonas Niemi
                <br />
                Helsinki, Finland
                <br />
                <span>@: joonas.niemi13@windowslive.com</span>
            </div>
            <div className="map-wrapper">
                <MapContainer center={[60.19857, 24.95791]} zoom={8}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[60.19857, 24.95791]}>
                        <Popup>Joonas lives here</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        </>
    )
}

export default Contact;