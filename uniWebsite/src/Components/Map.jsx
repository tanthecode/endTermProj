import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 12.838660, lng: 77.664381 },
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#1e3a8a" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Add a marker
      const marker = new window.google.maps.Marker({
        position: { lat: 12.838660, lng: 77.664381 },
        map: map,
        title: "Evergreen University",
        animation: window.google.maps.Animation.DROP
      });

      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px;">
            <h3 style="margin: 0 0 5px 0; color: #1e3a8a;">Evergreen University</h3>
            <p style="margin: 0;">14, 3rd cross, Parappana Agrahar<br>
            Electronic City Rd, Electronics City Phase 1<br>
            Electronic City, Bengaluru, Karnataka 560100</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    };

    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAH53JEVr-s5KNMBbZAbprAtO0kl4dZYOU&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      window.initMap = initMap;
    } else {
      initMap();
    }

    return () => {
      if (window.google) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '450px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
      }} 
    />
  );
};

export default Map; 