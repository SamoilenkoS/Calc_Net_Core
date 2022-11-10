var a = '';
var operator = '';

function AddButtonValueToInput(element){
    var text = element.innerText;
    console.log('Clicked ' + text);
    let input = document.getElementById('calc-input');
    var inputText = input.value;
    if(text == '0' && inputText == ''){
        return;
    }
    if(inputText == '+' || inputText == '-' || inputText == '*' || inputText == '/'){
        input.value = '';
    }

    input.value = input.value + text;
}

function MakeOperation(element){
    var chosenOperator = element.innerText;
    console.log('Clicked ' + chosenOperator);
    let input = document.getElementById('calc-input');
    if(input.value !== ''){
        a = input.value;
        input.value = chosenOperator;
        operator = chosenOperator;
    }
}

function Calculate(){
    let input = document.getElementById('calc-input');
    if(input.value !== ''){
        var aNum = parseInt(a);
        var bNum = parseInt(input.value);
        var result = Calc(aNum, bNum, operator);
        input.value = result;
        a = result;
    }
}

function Calc(a, b, operator){
    if(operator == '+'){
        return a + b;
    }
    else if(operator == '-'){
        return a - b;
    }
    else if(operator == '*'){
        return a * b;
    }
    else if(operator == '/'){
        return a / b;
    }
}