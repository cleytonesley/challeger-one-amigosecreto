// Declaração da variável que armazenará os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nomeAmigo = document.getElementById("amigo").value.trim();

    // Validação para garantir que o campo não esteja vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nomeAmigo);

        // Limpa o campo de entrada
        document.getElementById("amigo").value = "";

        // Atualiza a lista de amigos na interface
        atualizarListaAmigos();
    }
}

// Função para exibir a lista de amigos
function atualizarListaAmigos() {
    // Seleciona o elemento da lista onde os amigos serão exibidos
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array de amigos e adiciona cada um à lista HTML
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos disponíveis para sortear
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Gera um índice aleatório entre 0 e o comprimento do array de amigos
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
