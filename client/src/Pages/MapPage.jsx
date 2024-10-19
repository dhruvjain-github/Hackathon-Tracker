import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Navbar from '../components/Navbar';

// Customize the marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapPage = () => {
  const [currentLocation, setCurrentLocation] = useState([51.505, -0.09]); // Default to London
  const [loaded, setLoaded] = useState(false);

  // Get the user's live location using geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation([position.coords.latitude, position.coords.longitude]);
        setLoaded(true);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Interactive Text */}
      <div className="text-center p-4 bg-purple-100 rounded-lg shadow-md mx-4 md:mx-20 lg:mx-40 mt-5 mb-6">
        <h2 className="text-2xl font-semibold text-purple-800">Explore the Hackathons Near You</h2>
        <p className="mt-2 text-gray-700">
          Find hackathons happening in your area. Your location is marked on the map below. You can zoom in and explore nearby events!
        </p>
      </div>

      {/* Map Section */}
      <div className="mx-4 md:mx-20 lg:mx-40">
        {loaded ? (
          <MapContainer
            center={currentLocation}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '70vh', width: '100%', borderRadius: '10px', overflow: 'hidden' }}
            className="shadow-lg"
          >
            {/* Remove the initial TileLayer and add the street view TileLayer */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" // CartoDB Light Tiles for better street view
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <Marker position={currentLocation}>
              <Popup>You are here!</Popup>
            </Marker>
            {/* Add additional markers for hackathons if needed */}
          </MapContainer>
        ) : (
          <p className="text-center text-gray-600">Loading map...</p>
        )}
      </div>
    </div>
    
  );
};
export default MapPage;

     