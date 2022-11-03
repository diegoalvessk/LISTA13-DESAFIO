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