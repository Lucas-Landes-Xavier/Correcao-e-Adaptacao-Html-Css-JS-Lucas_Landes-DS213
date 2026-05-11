var terminado = false;
var lotacao = [];
var mensagem = document.getElementById("mensagem");
listaPessoas = document.getElementById("lista");

function validarPessoas(){
    let nome = document.getElementById("nome").value;

    if(terminado){
        return;
    }

    if(nome === ""){
        mensagem.textContent = "Insira um nome!";
        mensagem.style.color = "#9c1509";
        return;
    }

    if(nome === "SAIR"){
        mensagem.textContent = "Padrão de saída digitado! Lotação fechada!";
        mensagem.style.color = "black";
        terminado = true;
        return;
    }

    lotacao.push(nome);
    mensagem.textContent = "Validação de nome feita com sucesso!";
    mensagem.style.color = "black";

    let linha = document.createElement("li");
    linha.textContent = nome;
    listaPessoas.appendChild(linha);

    if(lotacao.length === 7){
        mensagem.textContent = "Lotação esgotada! Temos 7 inscritos.";
        mensagem.style.color = "black";
        terminado = true;
        return;
    }
}