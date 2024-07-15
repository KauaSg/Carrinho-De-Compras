let listaDeProdutosSelecionados = [];
limpar()

function adicionar() {
    let alaProdutos = document.getElementById("produto")
    let produtosSelecionados = alaProdutos.value
    let preco = produtosSelecionados.split('R$')[1] 
    let quantidade = parseInt(document.getElementById("quantidade").value)

    let total = quantidade * preco

    for (i = 0; i < quantidade; i++){
        listaDeProdutosSelecionados.push(produtosSelecionados)
    }

    totalGeral = totalGeral + total

    alterarTextoCarrinho(quantidade, produtosSelecionados, total);
    alterarTextoTotal(totalGeral)

    document.getElementById('quantidade').value = ''
    

    console.log(listaDeProdutosSelecionados)

}

function limpar() {
    começarZerado()
    totalGeral = 0
    document.getElementById('quantidade').value = ''

}

function alterarTextoCarrinho(quantidade, produtosSelecionados, total){

    let selecionaTextoCarrinho = document.getElementById("lista-produtos");
    selecionaTextoCarrinho.innerHTML = selecionaTextoCarrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${produtosSelecionados} <span class="texto-azul">R$${total}</span></section>`;
}

function alterarTextoTotal(totalGeral){
    let selecionaTextoTotal = document.getElementById('valor-total')
    selecionaTextoTotal.textContent = `R$${totalGeral}`

}

function começarZerado() {
    document.getElementById('lista-produtos').textContent = ''
    document.getElementById('valor-total').textContent = 'R$0'
}







