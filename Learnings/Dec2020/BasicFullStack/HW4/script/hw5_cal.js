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

/*
    Following function perform addition mathematicall operations
*/
//Check number is even
function checkEven(){
    var num = parseInt(document.getElementById("even").value);
    if(num%2 === 0)
    {
        alert(num + " number is even");
    }
    else{
        alert(num + " number is odd");
    }
    
}

//check number is  prime
function checkPrime(){
    var num = parseInt(document.getElementById("prime").value);
    for(var i=2; i<Math.sqrt(num); i++)
    {
        if(num%i === 0)
        {
            alert(num + " is not a prime number. Because least number which divisible by " + i);
            return;
        }
    }
    alert(num + " is a prime number");
}

//check number is  palindrome
function checkRev(){
    var num = parseInt(document.getElementById("rev").value);
    var temp = num;
    var rev = 0;
    while(num > 0)
    {
        var r = num%10;
        rev = rev*10 + r;
        num = Math.floor(num/10);
    }
    if(temp == rev)
    {
        alert(temp + " is a palindrome");
    }
    else{
        alert(temp + " is not a palindrome because reverse of number is " + rev);
    }
    
}