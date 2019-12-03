$(document).ready(function () {
    var connect = "wss://test.mosquitto.org:8081/mqtt";
    client = mqtt.connect(connect);
    console.log("connected to " + connect)
})