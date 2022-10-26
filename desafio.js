/*
1. Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
guarde cada um no seu respectivo array.

2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
opção escolhida pelo usuário.

3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas. Se as duas comparações forem válidas
retorne true se uma delas não for válida retorne false.

4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
então procure pelo nome no array de nomes e exclua ele e a senha correspondente
do outro varray, por fim organize o array para eliminar os espaços vazios.

5. Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
que o usuário pode escolher quando encerrar o programa conforme as opções e
que no login caso seja bem sucedido retorna uma mensagem “Login feito com
sucesso!” e em caso negativo “Nome ou senha incorretos!”
*/

var indexnome = 0
var indexsenha = 0
var arrayNome = []
var arraySenha = []
var nome = ""
var senha = ""
var condicao = 1 

            while(condicao != 4){
                condicao = desejafazer()
                    if(condicao == 1){
                        fazerCadastro()
                    }
                    if(condicao == 2){
                        fazerLogin()
                    } 
           } 

           function fazerCadastro(){
                pedirNome() 
                indexnome++
                pedirSenha()
                indexsenha++
            }
            
            function pedirNome(){
                arrayNome[indexnome] = prompt("CADASTRO: Informe seu nome: ")   
            }

            function pedirSenha(){
                arraySenha[indexsenha] = prompt("CADASTRO:  Informe sua senha: ")
            }

            function fazerLogin(){
                var nomeLogin = prompt("Informe o seu nome")
                var senhaLogin = prompt("Informe a sua senha")
                var c = 0
                for(var index=0; index<arrayNome.length; index++){
                    if(nomeLogin == arrayNome[index]){
                           if(senhaLogin == arraySenha[index]){
                               alert("Login realizado!")}
                           else{
                            alert("Login não foi realizado!")}
                            var c = 0
                            c++
                     }
                     if(c == 0){
                        alert("Login não foi realizado!")}
                     }
                }  

            function desejafazer(){
                condicao = parseInt(prompt("O que você deseja fazer? 1 = Cadastrar; 2 = Login; 3 = Excluir Cadastro; 4 = Encerrar o programa"))
                return condicao
            }

            
    