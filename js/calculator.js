
var globalAction = '';

function showNumber(number){
    let initial = document.getElementById("screen").value
    document.getElementById("screen").value = initial + number
}

function addAction(action){
    let initial = document.getElementById("screen").value
    document.getElementById("screen").value = initial + action
    globalAction = action
}

function submit(){
    let screen = document.getElementById("screen").value;
    let typedvalue = screen.split(globalAction)
    let result = ''
    switch(globalAction){
        case '+': 
        result = parseInt(typedvalue[0]) + parseInt(typedvalue[1]);
        break;
        case '-': 
        result = parseInt(typedvalue[0]) - parseInt(typedvalue[1]);
        break;
        case '/': 
        result = parseInt(typedvalue[0]) / parseInt(typedvalue[1]);
        break;
        case '*': 
        result = parseInt(typedvalue[0]) * parseInt(typedvalue[1]);
        break;
    }
    document.getElementById("screen").value = result;
}

function clearscreen(){
    document.getElementById("screen").value = ''
}