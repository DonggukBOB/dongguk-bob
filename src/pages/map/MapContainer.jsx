import React, { useEffect } from "react";

const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("list-map");
    const options = {
      center: new kakao.maps.LatLng(37.5581, 126.9983),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);
  return (
    <div
      id="list-map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default MapContainer;
