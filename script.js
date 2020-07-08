{
    var bootstrapButton = $.fn.button.noConflict() // return $.fn.button to previously assigned value
$.fn.bootstrapBtn = bootstrapButton // give $().bootstrapBtn the Bootstrap functionality

  
function multiplyBy()

    var x = multiplyBy(document.getElementById('x').value);
    var y = divideBy(document.getElementById('y').value);
    var a = addBy(document.getElementById('a').value);
    var s = subtractBy(document.getElementById('s').value);
    
    document.getElementById('result').innerHTML = x*y;
    return false;
}
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
function addBy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
function subtractBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}
    {
    
var x = document.getElementById('*').value
var y = document.getElementById('/').value
var a = document.getElementById('+').value
var s = document.getElementById('-').value
document.write(x+y*a+(1/2)*t*a*a);
}
        var inputIdFirst = "valueOfX",inputIdSecond = "valueOfY",outputId = "resultHere";
               }