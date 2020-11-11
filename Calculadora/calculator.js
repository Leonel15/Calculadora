let value;
let result;

function button(num){
    value = document.calc.visor.value += num;

}

function reset(){
    document.calc.visor.value = '';
}

function calculate(){
    result = eval(value);
    document.calc.visor.value = result.toLocaleString('pt-br');
    
}
