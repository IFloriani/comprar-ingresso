function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Insira uma quantidade válida!');
        return;
    }

    comprarIngressos(quantidade, tipo)

    document.getElementById('qtd').value = 0;
}

function comprarIngressos(quantidade, tipo) {
    let quantidadeIngressos = parseInt(document.getElementById(`qtd-${tipo}`).textContent);
    if (quantidade > quantidadeIngressos) {
        alert(`Quantidade indísponivel para compra do ingreso ${tipo}`);
    }else{
        quantidadeIngressos = quantidadeIngressos - quantidade;
        document.getElementById(`qtd-${tipo}`).textContent = quantidadeIngressos;
        alert('Compra realizada com sucesso');
    }
}