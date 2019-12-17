document.addEventListener("DOMContentLoaded", function(event) {
  var mapEl = document.querySelector('#map');
  var mapJS = document.querySelector('.contacts__map');

  mapEl.classList.remove('contacts__map-js--dn');
  mapJS.classList.add('contacts__map-js--dn');

  if (mapEl) {
    ymaps.ready(init); // активируем карту после загрузки страницы
  }

  var map;
  function init() {
    map = new ymaps.Map("map", { // в кавычках id элемента куда загружается карта
        center: [59.9387165, 30.32304739999995], 
        zoom: 17, // координаты центра фрагмента карты
        controls: []
    });
    var placemark = new ymaps.Placemark([59.9387165, 30.32304739999995], {}, { // координаты метки
        iconLayout: "default#image",
        iconImageHref: "http://placehold.it/100", // иконка метки
        iconImageSize: [82, 82] // размер метки
    });
  map.geoObjects.add(placemark);
  }
});
