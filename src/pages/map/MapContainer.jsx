import React, { useEffect } from "react";
import places from "../../data/places.js";

const { kakao } = window;

export default function MapContainer() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    const container = document.getElementById("list-map");
    const options = {
      center: new kakao.maps.LatLng(37.5581, 126.9983),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    places.forEach((el) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(
          el.location.latitude,
          el.location.longitude
        ),
        title: el.name,
        clickable: true,
      });

      const infowindow = new kakao.maps.InfoWindow({
        map: map,
        position: new kakao.maps.LatLng(
          el.location.latitude + 0.00033,
          el.location.longitude
        ),
        content: el.name,
      });

      function makeClickListener(map) {
        return function () {
          console.log(map.location, "Clicked");
        };
      }

      kakao.maps.event.addListener(
        marker,
        "click",
        makeClickListener(map, marker, infowindow)
      );

      function makeInfoWindow(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker);
        };
      }
      makeInfoWindow(map, marker, infowindow);
    });
  };
  return (
    <div
      id="list-map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}
