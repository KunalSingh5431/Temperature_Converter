function openConversionOptions() 
  {
    document.getElementById("conversionOptions").style.display = "block";
  }
  function closeConversionOptions() 
  {
    document.getElementById("conversionOptions").style.display = "none";
  }
  function convertTemperature() 
  {
    var temperatureInput = document.getElementById("Input").value;
    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
    if (!temperatureInput) 
    {
      alert("Please enter a value for conversion!!!");
      return;
    }
    var result = 0;
    if (fromUnit === "celsius" && toUnit === "fahrenheit") 
    {
      result = ((temperatureInput * 9)/5) + 32;
    } 
    else if (fromUnit === "celsius" && toUnit === "kelvin") 
    {
      result = parseFloat(temperatureInput) + 273.15;
    } 
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") 
    {
      result = ((temperatureInput - 32) * 5)/9;
    } 
    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") 
    {
      result = ((temperatureInput - 32) * 5)/9 + 273.15;
    } 
    else if (fromUnit === "kelvin" && toUnit === "celsius") 
    {
      result = (temperatureInput - 273.15);
    } 
    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") 
    {
      result = ((temperatureInput - 273.15) * 9)/5 + 32;
    } 
    else 
    {
      alert("Please Select Valid Conversion");
      return;
    }
    document.getElementById("result").textContent = temperatureInput + " " + fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1) + " is equal to " + result.toFixed(2) + " " + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
  }