let spanLatitude = document.querySelector("#latitude");
let spanLongitude = document.querySelector("#longitude");

document.querySelector("#getLocation").addEventListener("click", function(){
    if (!!navigator.geolocation) {
        //Pedimos los datos de geolocalizacion al navegador
        navigator.geolocation.getCurrentPosition(
            //Si el navegador entrega los datos de geolocalizacion los imprimimos
            function (position) {
                spanLatitude.innerHTML = "Latitud: " + position.coords.latitude
                spanLongitude.innerHTML = "Longitud: " + position.coords.longitude
                
                let coord = {lat:position.coords.latitude ,lng: position.coords.longitude};
                let map = new google.maps.Map(document.getElementById('map'),{
                zoom: 10,
                center: coord
                });
                let marker = new google.maps.Marker({
                position: coord,
                map: map
                });
            },
            //Si no los entrega manda un alerta de error
            function () {
                window.alert("nav no permitido");
            }
        );
    }
})