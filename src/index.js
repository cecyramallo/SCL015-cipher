//import cipher from './cipher.js';

document.getElementById("botonComenzar").addEventListener("click", function(){
    document.getElementById("Page1").style.display = "none";
    document.getElementById("Page2").style.display = "block";

    let userName = document.getElementById("nombre").value;

    document.getElementById("printHere").innerHTML = userName;
    
    console.log(name);
});

document.getElementById("botonCifrar").addEventListener("click", function(){
    document.getElementById("Page2").style.display = "none";
    document.getElementById("Page3").style.display = "block";

    let originalMessage = document.getElementById("originalMessage").value;

    console.log(originalMessage);

    let offset = document.getElementById("offsetNumber").value;

    console.log(offset);
});

document.getElementById("botonDescifrar").addEventListener("click", function(){
    document.getElementById("Page2").style.display = "none";
    document.getElementById("Page4").style.display = "block";
});

document.getElementById("botonNuevoMensaje1").addEventListener("click", function(){
    document.getElementById("Page3").style.display = "none";
    document.getElementById("Page2").style.display = "block";
});

document.getElementById("botonNuevoMensaje2").addEventListener("click", function(){
    document.getElementById("Page4").style.display = "none";
    document.getElementById("Page2").style.display = "block";
});

//console.log(cipher);
