const txtOp1 = document.getElementById('op1');
const txtOperador = document.getElementById('operador');
const txtOp2 = document.getElementById('op2');
const btnCalcular = document.getElementById('Calcular');
const pResultado = document.getElementById('resultado');

btnCalcular.addEventListener('click', Calcular)

function Calcular(){
  const operador = txtOperador.value;
  const op1 = parseFloat(txtOp1.value)
  const op2 = parseFloat(txtOp2.value)
  
  
  
  if((operador == '+' || operador == '-' || operador == '*' || operador == '/') && !isNaN(op1) && !isNaN(op2)){
    let resultado;
    switch (operador){
      case '+':
        resultado = op1+op2
        break;

      
      case '-':
        resultado = op1-op2
        break;
      
      
        case '*':
          resultado = op1*op2
          break;  

      case '/':
        resultado = op1/op2
        break;
    }
    pResultado.innerText="Total:" + " = " + resultado;
  }else{
    pResultado.innerText="Calculo imposible, Error."
    
  }
}