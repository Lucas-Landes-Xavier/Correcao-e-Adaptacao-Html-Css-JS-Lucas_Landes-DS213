var terminado = false;
/* Variável utilizada para controlar se o sistema foi encerrado */
var lotacao = [];
/* Vetor que armazenará os nomes cadastrados */
var mensagem = document.getElementById("mensagem");
/* Captura o elemento HTML responsável por exibir mensagens */
listaPessoas = document.getElementById("lista");
/* Captura o elemento HTML onde os nomes serão exibidos */

function validarPessoas(){
    /* Função responsável por validar e cadastrar os nomes */
    let nome = document.getElementById("nome").value;
    /* Captura o valor digitado no campo de texto */
    if(terminado){
        /* Verifica se o sistema já foi encerrado */
        return;
        /* Encerra a função imediatamente */
    }

    if(nome === ""){
        /* Verifica se nenhum nome foi digitado */
        mensagem.textContent = "Insira um nome!";
        /* Exibe mensagem de erro */
        mensagem.style.color = "#9c1509";
        /* Define a cor vermelha para a mensagem */
        return;
        /* Interrompe a execução da função */
    }

    if(nome === "SAIR"){
        /* Verifica se o usuário digitou o padrão de saída */
        mensagem.textContent = "Padrão de saída digitado! Lotação fechada!";
        /* Exibe mensagem informando encerramento */
        mensagem.style.color = "black";
        /* Define a cor da mensagem */
        terminado = true;
        /* Marca o sistema como encerrado */
        return;
        /* Finaliza a função */
    }

    lotacao.push(nome);
    /* Adiciona o nome digitado ao vetor */
    mensagem.textContent = "Validação de nome feita com sucesso!";
    /* Exibe mensagem de sucesso */
    mensagem.style.color = "black";
    /* Define a cor da mensagem */

    let linha = document.createElement("li");
    /* Cria um elemento de lista */
    linha.textContent = nome;
    /* Define o nome digitado como conteúdo do item */
    listaPessoas.appendChild(linha);
    /* Adiciona o item criado à lista exibida na página */

    if(lotacao.length === 7){
        /* Verifica se a quantidade de inscritos chegou a 7 */
        mensagem.textContent = "Lotação esgotada! Temos 7 inscritos.";
        /* Exibe mensagem informando lotação máxima */
        mensagem.style.color = "black";
        /* Define a cor da mensagem */
        terminado = true;
        /* Encerra o sistema de cadastro */
        return;
        /* Finaliza a execução da função */
    }
}