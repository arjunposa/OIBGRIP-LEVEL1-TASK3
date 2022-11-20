function convertToFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = celsius * 9 / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("result").innerHTML = celsius + "&deg;C is " + fahrenheit + "&deg;F";
  }
  
  function convertToCelsius() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("celsius").value = celsius;
    document.getElementById("result").innerHTML = fahrenheit + "&deg;F is " + celsius + "&deg;C";
  }