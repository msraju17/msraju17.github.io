//Addition
function printAdd(){
    var first = parseInt(document.getElementById("fvalue").value);
    var second = parseInt(document.getElementById("svalue").value);
    alert("Addition of " + first + " and " + second + " is " + (first+second));
}

//Subtraction
function printSub(){
    var first = parseInt(document.getElementById("fvalue").value);
    var second = parseInt(document.getElementById("svalue").value);
    alert("Addition of " + first + " and " + second + " is " + (first-second));
}

//Multiplication
function printMul(){
    var first = parseInt(document.getElementById("fvalue").value);
    var second = parseInt(document.getElementById("svalue").value);
    alert("Addition of " + first + " and " + second + " is " + (first*second));
}

//Division
function printDiv(){
    var first = parseInt(document.getElementById("fvalue").value);
    var second = parseInt(document.getElementById("svalue").value);
    alert("Addition of " + first + " and " + second + " is " + (first/second));
}

//Modulus (Reaminder)
function printRem(){
    var first = parseInt(document.getElementById("fvalue").value);
    var second = parseInt(document.getElementById("svalue").value);
    alert("Addition of " + first + " and " + second + " is " + (first%second));
}