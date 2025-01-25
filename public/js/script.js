const socket = io();

//check if navigation is supported in your window object and take its coordinates ,
//Set position for high accuracy , 3 second timeout and no caching
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position)=>{
        const {latitude , longitude } = position.coords;
        socket.emit("send-location" , {latitude , longitude}); // sent to backend
    } , (error) => {
        console.error(error);
    } , 
    {
        enableHighAccuracy : true,
        timeout : 3000, 
        maximumAge : 0,
    }
)
}

const map = L.map("map").setView([0 , 0] , 16); //default view of lat - 0 , log - 0 with view level - 10

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" , {
    attribute:"Surya's POV"
}).addTo(map);

const markers = {} //empty object marker

socket.on("recieve-location" , (data) => {
    const { id , latitude , longitude } = data;
    map.setView([latitude , longitude]);
    if(markers[id]){
        markers[id].setLatLng([latitude , longitude]);
    }
    else {
        markers[id] = L.marker([latitude , longitude]).addTo(map);
    }
})

//on disconnection
socket.on("user-disconnected" , (id) => {
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    } 
})