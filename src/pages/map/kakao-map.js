import currentLocationImage from "../../assets/elephant.png";
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
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var currentPosition = new kakao.maps.LatLng(lat, lon);

      var imageSrc = currentLocationImage;
      var imageSize = new kakao.maps.Size(36, 36);
      var imageOption = { offset: new kakao.maps.Point(18, 18) };
      var currentMarkerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      var marker = new kakao.maps.Marker({
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
