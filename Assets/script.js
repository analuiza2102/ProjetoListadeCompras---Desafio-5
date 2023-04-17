 // Função para adicionar itens à lista de compras
 function adicionarItem(event) {  // Evento de submit do formulário // Função para adicionar itens à lista de compras
    event.preventDefault(); // Previne o comportamento padrão do formulário
    let itemInput = document.getElementById("itemInput").value; // Pega o valor do input de item
    let categoriaSelect = document.getElementById("categoriaSelect").value; // Pega o valor do select de categoria
    if (itemInput) { // Verifica se o item não está vazio
        listaCompras.push({item: itemInput, categoria: categoriaSelect}); // Adiciona o item à lista de compras
        atualizarListaCompras(); // Atualiza a exibição da lista de compras
        document.getElementById("itemInput").value = ""; // Limpa o input de item
    } else { // Se o item estiver vazio, exibe uma mensagem de erro
        alert("Nome do item inválido. Tente novamente."); // Exibe uma mensagem de erro
    }
}

// Função para atualizar a exibição da lista de compras
function atualizarListaCompras() { // Função para atualizar a exibição da lista de compras
    let listaUl = document.getElementById("listaUl"); // Pega a lista de compras
    listaUl.innerHTML = ""; // Limpa a lista anterior antes de atualizar a exibição
    let categorias = {}; // Objeto para armazenar os itens por categoria (chave: categoria, valor: array de itens) // Função para atualizar a exibição da lista de compras
    listaCompras.forEach(item => { // Percorre a lista de compras
        if (!categorias[item.categoria]) { // Verifica se a categoria já existe no objeto
            categorias[item.categoria] = []; // Cria um array vazio para a categoria se não existir ainda   
        } 
        categorias[item.categoria].push(item.item); // Adiciona o item ao array da categoria  // Percorre a lista de compras
    });
    for (let categoria in categorias) { // Percorre o objeto de categorias
        let listaCategoria = document.createElement("li"); // Cria um elemento li para a categoria
        listaCategoria.innerHTML = `<b>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:</b> ${categorias[categoria].join(", ")}`; // Adiciona o nome da categoria e os itens à lista
        listaUl.appendChild(listaCategoria); // Adiciona a categoria à lista de compras // Percorre o objeto de categorias
    }
}

// Função para limpar a lista de compras
function limparLista() { // Função para limpar a lista de compras
    listaCompras = []; // Limpa o array de itens da lista de compras
    atualizarListaCompras(); // Atualiza a exibição da lista de compras
}

// Array para armazenar os itens da lista de compras
let listaCompras = [];

// Adiciona o evento de submit no formulário
document.getElementById("formulario").addEventListener("submit", adicionarItem);

// Adiciona o evento de click no botão "Limpar Lista"
document.getElementById("limparLista").addEventListener("click", limparLista);



// Adiciona o evento de click nos itens da lista de compras para deletá-los
document.getElementById("listaUl").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        deletarItem(Array.prototype.indexOf.call(event.target.parentNode.children, event.target));
    }
});