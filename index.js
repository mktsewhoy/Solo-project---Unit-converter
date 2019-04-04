const feet = 0.3048;
const miles = 1.609;
const pounds = 2.205;
const tons = 2204.6;
const fahrenheit = 1.8;
const gallons = 4.54609;
const cubicinches = 16.387;

function convertToImperial (n) {
//     var from = document.getElementById("from").innerHTML;
//     var to = document.getElementById("to").innerHTML;
//   to = from * miles;
document.getElementById("to").innerHTML = n * miles;
}