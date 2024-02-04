





const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");

//console.log("num1 + num2 = ", number1 + number2);
const output = document.getElementById("Output");


function add(){
    output.innerHTML = +number1.value + +number2.value;
    return output;
}
