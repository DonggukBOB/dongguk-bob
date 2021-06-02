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

  return {
    initMap,
    drawMarker,
    addClickEventToMarker,
  };
})();

export default $kakao;
