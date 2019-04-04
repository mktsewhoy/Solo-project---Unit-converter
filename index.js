const feet = 0.3048;
const miles = 1.60934;
const pounds = 2.205;
const tons = 2204.6;
const fahrenheit = 1.8;
const gallons = 4.54609;
const cubicinches = 16.387;

function convertTo (source, n) {
    n = parseFloat(n);
    // var inp = document.getElementById("fromUnit").innerHTML;
    // var out = document.getElementById("toUnit").innerHTML;
    var inp = document.getElementById("fromUnit");
    var out = document.getElementById("toUnit");

    if (source == "fromUnit") {
        out.value = (n * miles).toFixed(3);
    }
    if (source == "toUnit") {
        inp.value = (n / miles).toFixed(3);
    }    
}
