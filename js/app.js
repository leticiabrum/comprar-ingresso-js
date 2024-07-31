function comprar() {
    let pista = document.getElementById('nome-pista').textContent;
    let superior = document.getElementById('nome-superior').textContent;
    let inferior = document.getElementById('nome-inferior').textContent;
    let nomePista = pista.split('-')[0];
    let nomeSuperior = superior.split('-')[0];
    let nomeInferior = inferior.split('-')[0];
    let quantidadeSelecionada = document.getElementById('qtd').value;
    let ingressoSelecionado = document.getElementById('tipo-ingresso').value;
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadeCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);

}