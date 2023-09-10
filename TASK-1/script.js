var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");
var kelvin = document.getElementById("kelvin")

function celsiusConv(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    let kelout =(parseFloat(celsius.value))+273.15;
    fahrenheit.value = parseFloat(output.toFixed(2));
    kelvin.value= parseFloat(kelout.toFixed(2));

}

function fahrenConv(){

    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    let kelout = ((parseFloat(fahrenheit.value)-32)/1.8) +273.15;
    celsius.value = parseFloat( output.toFixed(2));
    kelvin.value= parseFloat(kelout.toFixed(2));
    console.log(output);

}

function kelvinConv(){

    let output= ( parseFloat(kelvin.value))-273.15;
    let kelout= (( parseFloat(kelvin.value)-273.15)* 1.8)+32;
    celsius.value = parseFloat(output.toFixed(2));
    fahrenheit.value = parseFloat(kelout.toFixed(2));
    
}