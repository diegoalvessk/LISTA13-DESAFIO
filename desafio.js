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
var nome
var senha
var condicao = 0

while(condicao != 4){

            condicao = desejafazer(condicao)
            
            while(condicao == 1){
                arraySenha[indexsenha] = pedirNome(nome, indexnome)
                arrayNome[indexnome] = pedirSenha(senha, indexsenha)
                indexnome++
                indexsenha++
                condicao = desejafazer(condicao)
            }
            
            function pedirNome(nome, indexnome){
                nome = prompt("Informe seu nome: ")
                
                if(indexnome != 0){
                }    
                return nome
            }

            function pedirSenha(senha, indexsenha){
                senha = prompt("Informe sua senha: ")
                if(indexsenha != 0){
                }
                return senha
            }

            function desejafazer(condicao){
                condicao = parseInt(prompt("O que você deseja fazer? 1 = Cadastrar; 2 = Login; 3 = Excluir Cadastro; 4 = Encerrar o programa"))
                if(condicao == 2){
                    fazerLogin()
                }
                if(condicao == 3){

                }
                return condicao
            }
        }

        console.log(arrayNome)
        console.log(arraySenha)

