function calc(){
    var num1=parseFloat(document.getElementById("num1").value)
    var num2=parseFloat(document.getElementById("num2").value)
    var operador=(document.getElementById("operador").value)
    var resultado
    
    switch(operador){
        case "+":
            resultado, num1+num2
            break;
            case "-":
                reultado, num1-num2
            break;
            case "*":
                reultado, num1*num2
            break;
            case "/":

            if (num2 !== 0){
                resultado=num1 / num2
            }else{ 
                resultado="Erro na conta divisor por 0 "
            }
            break;
            default:
                resultado="operador invalido"
                break;
       
 
    }
    if (resultado!=="Erro na conta divisor por 0 " ){
        var a = document.getElementById("resultado")
        a.textContent = format(resultado)
        
    }else{
        var a = document.getElementById("resultado")
        a.textContent=resultado
    }
}
console.log(resultado)
const format = (num) => Number.isInteger(num) ? num : num.toFixed(2)