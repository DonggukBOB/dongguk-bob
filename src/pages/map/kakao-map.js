import currentLocationImage from "../../assets/current-location-image.png";
const { kakao } = window;

const $kakao = (() => {
  let map;
  const markers = [];

  const initMap = (targetID) => {
    const container = document.getElementById(targetID);
    const options = {
      center: new kakao.maps.LatLng(37.5581, 126.9983),
      level: 3,
    };

    map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  };

  const drawMarker = (location) => {
    const markerPosition = new kakao.maps.LatLng(
      location.latitude,
      location.longitude
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
    markers.push(marker);
  };

  const addClickEventToMarker = (place, method) => {
    kakao.maps.event.addListener(markers[place.id], "click", () => {
      method(place.id);
    });
  };

  const drawCurrentLocationMarker = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const currentPosition = new kakao.maps.LatLng(lat, lon);

      const imageSrc = currentLocationImage;
      const imageSize = new kakao.maps.Size(36, 36);
      const imageOption = { offset: new kakao.maps.Point(18, 18) };
      const currentMarkerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      const marker = new kakao.maps.Marker({
        map: map,
        position: currentPosition,
        image: currentMarkerImage,
      });
      marker.setMap(map);
      map.setCenter(currentPosition);
    });
  };

  return {
    initMap,
    drawMarker,
    drawCurrentLocationMarker,
    addClickEventToMarker,
  };
})();

export default $kakao;
