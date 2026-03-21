import React, { useRef } from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';


const Coverage = () => {
    const position = [23.8103, 90.4125]
    const servicesCentres = useLoaderData()
    // console.log(servicesCentres)

    const mapRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value
        // console.log('Searching for:', location);
        const district = servicesCentres.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coord = [district.latitude, district.longitude];
            console.log(district, coord)
            // go to the location
            mapRef.current.flyTo(coord, 14);
    }
}
    return (
        <div className='space-y-5 p-5'>
            <h1 className='text-3xl font-bold text-center mt-10'>Our Coverage Area</h1>
            {/* search  */}
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" name="location" placeholder="Search" />

                    </label>
                    </form>
            <div className='h-[800px] w-full border'>
                <MapContainer className='h-[800px]' ref={mapRef} center={position} zoom={7} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        servicesCentres.map((centre, index) => (
                            <Marker
                                position={[centre.latitude, centre.longitude]}
                                key={index}
                            >
                                <Popup>
                                    <strong>{centre.district} Service Centre</strong> <br />
                                    Service Area:{centre.covered_area.join(', ')} <br />
                                    
                                </Popup>
                            </Marker>
                        ))}
                    



                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;