var connect = "wss://test.mosquitto.org:8081/mqtt";
var topic = "SaveWater/#"

$(document).ready(function () {
    client = mqtt.connect(connect);
    client.subscribe(topic)
    console.log("connected to " + connect)
    client.on("message", function (topic, payload) {
        console.log([topic, payload].join(": "))
        if (payload == "Water Detected t1") {
            $("#status_tank1").html("Status: Tank 1 is full")
        } else if (payload == "No Water Detected t1") {
            $("#status_tank1").html("Status: Tank 1 is empty")
        } else if (payload == "No Water Detected t2") {
            $("#status_tank2").html("Status: Tank 2 is empty")
        } else if (payload == "Water Detected t2") {
            $("#status_tank2").html("Status: Tank 2 is full")
        }
    })

})


function switch1() {
    var image = document.getElementById('switch1');
    if (image.src.match("./images/off.png")) { // if the switch is currently off
        image.src = "./images/on.png"; // display switch on 
        document.getElementById("switch_status1").innerHTML = "Tank 1 motor is now on";
        client.publish("Turn/On", "Turn on the motor of tank 1") // if switch is turned on, this will send or publish the topic turn/on
    } else {    // the switch is currently on 
        image.src = "./images/off.png"; // display switch off 
        document.getElementById("switch_status1").innerHTML = 'Tank 1 motor is now off';
        client.publish("Turn/Off", "Turn off the motor of tank 1") // if switch is turned off, this will send or publish the topic turn/off
    }
}

function switch2() {
    var image = document.getElementById('switch2');
    if (image.src.match("./images/off.png")) {
        image.src = "./images/on.png";
        document.getElementById("switch_status2").innerHTML = "Tank 2 motor is now on";
        client.publish("Turn/On", "Turn on the motor of tank 2") // if switch is turned on, this will send or publish the topic turn/on
        console.log()
    } else {
        image.src = "./images/off.png";
        document.getElementById("switch_status2").innerHTML = "Tank 2 motor is now off";
        client.publish("Turn/Off", "Turn off the motor of tank 2") // if switch is turned off, this will send or publish the topic turn/off
    }
}