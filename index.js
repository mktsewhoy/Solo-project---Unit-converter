// Distance & length
const feet = 0.3048;
const yards = 0.9144;
const miles = 1.60934;
const inches = 2.54;
// Weight & mass
const pounds = 2.205;
const ounces = 16;
const stone = 14;
// Temperature
const fahrenheitDiff = 32;
const fahrenheitMult = 1.8;
// Volume
const cubicinches = 16.387;
const gallons = 4.54609;

function convertTo(source, n) {
    n = parseFloat(n);
    let inp = document.getElementById("fromUnit");
    let impUnits = document.getElementById("imperial");
    let impMenu = impUnits.options[impUnits.selectedIndex].value;
    let out = document.getElementById("toUnit");
    let metUnits = document.getElementById("metric");
    let metMenu = metUnits.options[metUnits.selectedIndex].value;

    //Convert distance/length when imperial value typed in.
    if (source == "fromUnit") {
        // Convert imperial length to km.
        if (impMenu == "miles" && metMenu == "km") {
            out.value = (n * miles).toFixed(3);
        }
        if (impMenu == "yards" && metMenu == "km") {
            out.value = ((n * yards) / 1000).toFixed(6);
        }
        if (impMenu == "feet" && metMenu == "km") {
            out.value = ((n * feet) / 1000).toFixed(6);
        }
        if (impMenu == "inches" && metMenu == "km") {
            out.value = ((n * inches) / 100000).toFixed(6);
        }
        //Convert imperial length to m.
        if (impMenu == "miles" && metMenu == "m") {
            out.value = (n * miles * 1000).toFixed(1);
        }
        if (impMenu == "yards" && metMenu == "m") {
            out.value = (n * yards).toFixed(3);
        }
        if (impMenu == "feet" && metMenu == "m") {
            out.value = (n * feet).toFixed(3);
        }
        if (impMenu == "inches" && metMenu == "m") {
            out.value = ((n * inches) / 100).toFixed(4);
        }
        //Convert imperial length to cm.
        if (impMenu == "miles" && metMenu == "cm") {
            out.value = (n * miles * 100000).toFixed(0);
        }
        if (impMenu == "yards" && metMenu == "cm") {
            out.value = (n * yards * 100).toFixed(2);
        }
        if (impMenu == "feet" && metMenu == "cm") {
            out.value = (n * feet * 100).toFixed(2);
        }
        if (impMenu == "inches" && metMenu == "cm") {
            out.value = (n * inches).toFixed(2);
        }
        //Convert imperial length to mm.
        if (impMenu == "miles" && metMenu == "mm") {
            out.value = (n * miles * 1000000).toFixed(0);
        }
        if (impMenu == "yards" && metMenu == "mm") {
            out.value = (n * yards * 1000).toFixed(0);
        }
        if (impMenu == "feet" && metMenu == "mm") {
            out.value = (n * feet * 1000).toFixed(0);
        }
        if (impMenu == "inches" && metMenu == "mm") {
            out.value = (n * inches * 10).toFixed(0);
        }
        //Convert Fahrenheit to Celsius.
        if (impMenu == "fahrenheit") {
            metMenu = "celsius";
            out.value = ((n - fahrenheitDiff)/fahrenheitMult).toFixed(1);
        }
        //Convert imperial mass to kg/tonnes.
        if (impMenu == "ounces" && metMenu == "grams") {
            out.value = ((n / pounds / ounces) * 1000).toFixed(0);
        }
        if (impMenu == "ounces" && metMenu == "kg") {
            out.value = ((n / pounds / ounces) * 1000).toFixed(0);
        }
        if (impMenu == "ounces" && metMenu == "tonnes") {
            out.value = ((n / pounds / ounces) * 1000).toFixed(0);
        }
        if (impMenu == "pounds" && metMenu == "grams") {
            out.value = ((n / pounds) * 1000).toFixed(0);
        }
        if (impMenu == "pounds" && metMenu == "kg") {
            out.value = (n / pounds).toFixed(3);
        }
        if (impMenu == "pounds" && metMenu == "tonnes") {
            out.value = (n / pounds / 1000).toFixed(6);
        }
        if (impMenu == "stone" && metMenu == "grams") {
            out.value = ((n / pounds) * stone * 1000).toFixed(0);
        }
        if (impMenu == "stone" && metMenu == "kg") {
            out.value = ((n / pounds) * stone).toFixed(3);
        }
        if (impMenu == "stone" && metMenu == "tonnes") {
            out.value = ((n / pounds) * stone / 1000).toFixed(6);
        }
        console.log(impMenu, metMenu)
    }
    //Convert length when metric value typed in.
    if (source == "toUnit") {
        //Convert km to imperial.
        if (impMenu == "miles" && metMenu == "km") {
            inp.value = (n / miles).toFixed(3);
        }
        if (impMenu == "yards" && metMenu == "km") {
            inp.value = ((n / yards) * 1000).toFixed(1);
        }
        if (impMenu == "feet" && metMenu == "km") {
            inp.value = ((n / feet) * 1000).toFixed(1);
        }
        if (impMenu == "inches" && metMenu == "km") {
            inp.value = ((n / inches) * 100000).toFixed(1);
        }
        //Convert m to imperial.
        if (impMenu == "miles" && metMenu == "m") {
            inp.value = ((n / miles) / 1000).toFixed(6);
        }
        if (impMenu == "yards" && metMenu == "m") {
            inp.value = ((n / yards)).toFixed(3);
        }0
        if (impMenu == "feet" && metMenu == "m") {
            inp.value = ((n / feet)).toFixed(3);
        }
        if (impMenu == "inches" && metMenu == "m") {
            inp.value = ((n / inches) * 100).toFixed(3);
        }
        //Convert cm to imperial.
        if (impMenu == "miles" && metMenu == "cm") {
            inp.value = ((n / miles) / 100000).toFixed(6);
        }
        if (impMenu == "yards" && metMenu == "cm") {
            inp.value = (n / yards / 100).toFixed(6);
        }
        if (impMenu == "feet" && metMenu == "cm") {
            inp.value = ((n / feet) /100).toFixed(6);
        }
        if (impMenu == "inches" && metMenu == "cm") {
            inp.value = ((n / inches) ).toFixed(3);
        }
        //Convert mm to imperial.
        if (impMenu == "miles" && metMenu == "mm") {
            inp.value = ((n / miles) / 1000000).toFixed(9);
        }
        if (impMenu == "yards" && metMenu == "mm") {
            inp.value = ((n / yards) / 1000).toFixed(6);
        }
        if (impMenu == "feet" && metMenu == "mm") {
            inp.value = ((n / feet) /1000).toFixed(6);
        }
        if (impMenu == "inches" && metMenu == "mm") {
            inp.value = (n / inches /10).toFixed(3);
        }
        //Convert Celsius to Fahrenheit
        if (metMenu == "celsius") {
            impMenu = "fahrenheit";
            inp.value = (fahrenheitDiff + (n * fahrenheitMult)).toFixed(1);
        }
        //Convert pounds/tons to kg/tonnes.
        if (impMenu == "pounds" && metMenu == "grams") {
            inp.value = ((n * pounds) / 1000).toFixed(6);
        }
        if (impMenu == "pounds" && metMenu == "kg") {
            inp.value = (n * pounds).toFixed(3);
        }
        if (impMenu == "pounds" && metMenu == "tonnes") {
            inp.value = ((n * pounds) / 1000000).toFixed(3);
        }
        console.log(impMenu, metMenu)
    }
}
