/* 
1. Faça uma função que recebe um valor inteiro e verifica se o
valor é positivo, negativo ou zero. A função deve retornar 1
para valores positivos, -1 para valores negativos e 0 para o
valor 0.
*/
var numero = verificarNumero(numero)

function verificarNumero(numero){
    numero = parseInt(prompt("Infomre um número: "))

    if(numero == 0){
        alert("O número é 0.")
    }
    if(numero>0){
        alert("O número é positivo.")

        
    }
    if(numero<0){
        alert("O número é negativo.")
    }
}