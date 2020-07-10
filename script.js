
    var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality


  
function multiplyBy(){

        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("output").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("output").innerHTML = num1 / num2;
}

function addBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
document.getElementById("output").innerHTML = num1 + num2;
document.getElementById("output").innerHTML = parseFloat(num1) + parseFloat(num2);

}
function subtractBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
    document.getElementById("output").innerHTML = num1 - num2;
}