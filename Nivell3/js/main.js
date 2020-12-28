//Collect all numbers in an array
let numbers = document.getElementsByClassName('number'); 
//Collect the screen in an variable
let screen = document.getElementById('resultado'); 
//Collect all operators in an array
let operadores = document.getElementsByClassName('operador'); 

//Reset button "C"
document.getElementById("reset").addEventListener("click", function(){
    screen.value = "";
    //Reset variable values
    clear();
});

//aux variable
let aux;
//num1
let num1 = "";
//num2
let num2 = "";
//operator
let operador;

for(let i = 0; i < numbers.length; i++){
    //Make event listener on array of numbers
    numbers[i].addEventListener("click", function(){
        //addScreen(this.value);
        if(aux == true){
            numbers[i];
            num2 += numbers[i].value;
            screen.value = num2;
        } else{
            numbers[i];
            num1 += numbers[i].value;
            screen.value = num1;
        }
    });
}

for(let i = 0; i < operadores.length; i++){
    //Make event listener on array of operators
    operadores[i].addEventListener("click", function(){
        //addScreen(this.value);
        aux = true;
        operador = operadores[i].value;
        screen.value = operador;
    });
}
//Collect "=" and make event listener
document.getElementById("igual").addEventListener("click", function(){
    switch (operador) {
        case "+":
            screen.value = parseFloat(num1)+parseFloat(num2);
            clear();
            break;
        case "-":
            screen.value = parseFloat(num1)-parseFloat(num2);
            clear();
             break;
        case "x":
            screen.value = parseFloat(num1)*parseFloat(num2);
            clear();
            break;
        case "÷":
            //If the denominator is "0" I indicate to the user that it is impossible
            if(num2=="0"){
                screen.value= `ERROR`;
                clear();
            }else{
                screen.value = parseFloat(num1)/parseFloat(num2);
                clear();
            }
            break;
    }
});

//Reset variable values & aux value
function clear(){
    num1 = "";
    num2 = "";
    aux = false;
}