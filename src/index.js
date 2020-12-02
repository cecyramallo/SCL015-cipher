//import cipher from './cipher.js';

document.getElementById("startButton").addEventListener("click", function(){
    document.getElementById("Page1").style.display = "none";
    document.getElementById("Page2").style.display = "block";

    let input = document.getElementById("userName");
    let userName = input.value
    //console.log(userName)
    document.getElementById("Greeting").innerHTML = "¡AVE, " + userName + "!";
});

function code(){
    //Declare a variable for the original message, take its value and turn it into capital letters
    let originalMessage = document.getElementById("originalMessage").value.toUpperCase();
    //*console.log(originalMessage);
    //Declare a variable for the offset, take its value and turn it into an integer number
    let offset = parseInt(document.getElementById("offsetNumber").value);
    //console.log(offset);
    //Declare another variable for the final message
    let finalMessage = ""
    //Declare a for loop
    for (let i = 0; i < originalMessage.length; i++) {
        //Obtain the ASCII code
        let ascii = originalMessage.charCodeAt(i);
        //console.log(ascii);
        //Apply the Math formula to obtain the character's new ASCII code
        let newAscii = (ascii -65 + offset) % 26 +65;
        //console.log (newAscii);
        //Declare an if conditional for the space character
        if (ascii === 32){
            newAscii = 32;
        }
        //Obtain the character of the new ASCII
        let result = String.fromCharCode(newAscii);    
        //console.log(result);
    
        finalMessage += result;

    }
    
    document.getElementById("newMessage").innerHTML = finalMessage;

    return finalMessage;
}

function decode(){
    //Declare a variable for the original message, take its value and turn it into capital letters
    let originalMessage = document.getElementById ("originalMessage").value.toUpperCase();
    //console.log(originalMessage);
    //Declare a variable for the offset, take its value and turn it into an integer number
    let offset = parseInt(document.getElementById ("offsetNumber").value);
    //console.log(offset);
    //Declare another variable for the final message
    let finalMessage = ""
    //Declare a for loop
    for (let i = 0; i < originalMessage.length; i++) {
        //Obtain the ASCII code
        let ascii = originalMessage.charCodeAt(i);
        //console.log(ascii);
        //Apply the Math formula to obtain the character's new ASCII code
        let newAscii = (ascii +65 - offset) % 26 +65;
        //console.log (newAscii);
        //Declare an if conditional for the space character
        if (ascii === 32){
            newAscii = 32;
        }
        //Obtain the character of the new ASCII
        let result = String.fromCharCode(newAscii);    
        //console.log(result);

        finalMessage += result;
    }

    document.getElementById("newMessage").innerHTML = finalMessage;

    return finalMessage;
}

















/*function code(){
    //Declare a variable for the original message, take its value and turn it into capital letters
    let originalMessage = document.getElementById ("originalMessage").value.toUpperCase();
    console.log(originalMessage);
    //Declare a variable for the offset, take its value and turn it into an integer number
    let offset = parseInt(document.getElementById ("offsetNumber").value);
    console.log(offset);
    //Declare another variable for the final message
    let finalMessage = ""
    //Use a for cicle to apply the function to every character of the string
    for (let i = 0; i <originalMessage.lenght; i++){
        //Obtain the ASCII code
        let ascii = originalMessage.charCodeAt(i);
        console.log(ascii);
        //Apply the Math formula to obtain the character's new ASCII code
        let newAscii = (ascii -65 + offset) % 26 +65;
        //Create a conditional only for the case of spaces
        if (ascii === 32){
            newAscii = 32;
        }
        //Obtain the character of the new ASCII
        let result = String.fromCharCode(newAscii);  

        finalMessage += result;
    }

    document.getElementById("newMessage").innerHTML = finalMessage;

    return finalMessage;
}*/

/*document.getElementById("botonCifrar").addEventListener("click", code);*/

/*document.getElementById("startButton").onclick = function(){
    let input = document.getElementById("userName");
    let userName = input.value
    document.getElementById("printHere").value = "¡AVE," + userName + "!";
    console.log(userName)
}*/

/*function Welcome(){
    let userName = document.getElementById("user.Name").value;

    console.log(userName);

    document.getElementById("printHere").value = "¡AVE," + userName + "!";
}*/



/*document.getElementById("botonCifrar").addEventListener("click", function(){
    document.getElementById("Page2").style.display = "none";
    document.getElementById("Page3").style.display = "block";

    let originalMessage = document.getElementById("originalMessage").value;
    
    console.log(originalMessage);

    let character = originalMessage.charAt().chardCodeAt();

    console.log(character);

    let offset = document.getElementById("offsetNumber").value;

    console.log(offset);

    chardCodeAt();
});*/

/*document.getElementById("botonDescifrar").addEventListener("click", function(){
    document.getElementById("Page2").style.display = "none";
    document.getElementById("Page4").style.display = "block";
});*/

/*document.getElementById("botonNuevoMensaje1").addEventListener("click", function(){
    document.getElementById("Page3").style.display = "none";
    document.getElementById("Page2").style.display = "block";
});

document.getElementById("botonNuevoMensaje2").addEventListener("click", function(){
    document.getElementById("Page4").style.display = "none";
    document.getElementById("Page2").style.display = "block";
});*/

//console.log(cipher);

