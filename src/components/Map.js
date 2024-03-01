import React, { useState, useEffect } from 'react';
import loader from '../components/googleMapsLoader';

const Map = ({ locations }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const locationInfo = {
    Snohomish: 'Rickster: 425-503-9466',
    Shoreline: 'Davin: 425-273-2459',
    Tulalip: 'Emily: 206-280-4815',
    Everett: 'Seth: 720-988-3329',
    LakeStevens: 'Donovan: 425-652-0156',
    Stanwood: 'Pat: 425-870-7692',
    Lynwood: 'Jason: 206-850-4584',
  };

  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      const newMap = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: { lat: 47.9789, lng: -122.2021 }, // Default center for Washington state
      });

      const newMarkers = [];

      locations.forEach((location) => {
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === 'OK') {
            const marker = new window.google.maps.Marker({
              position: results[0].geometry.location,
              map: newMap,
            });

            const infoWindowContent = `<div style="color: black;"><a href="tel:${locationInfo[location].split(': ')[1]}">${locationInfo[location]}</a></div>`;

            const infoWindow = new window.google.maps.InfoWindow({
              content: infoWindowContent,
            });

            marker.addListener('click', () => {
              infoWindow.open(newMap, marker);
            });

            newMarkers.push(marker);
          }
        });
      });

      setMap(newMap);
      setMarkers(newMarkers);
    });
  }, [locations]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default Map;
