let numero = document.getElementById('numero');
let lista = document.getElementById('flista');
let res = document.getElementById('resultado');
let valores = [];

function isNum (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != - 1) {
        return true;
    } else {
        return false;
    }
}


function adicionarNum () {

    if (isNum(numero.value) && !inLista(numero.value, valores) ) {
        valores.push(Number(numero.value))
        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Número inválido ou já encontrado na lista!');   
    }
    numero.value = ''; 
    numero.focus(); 

}

function finalizar() {
    
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    
    } else {

        let total = valores.length;
        let maior = valores[0];
        let menor = valores[1];
        soma = 0;
        media = 0;

        for (let pos in valores) {
            
            soma += valores[pos];

            if (valores[pos] > maior) {
                maior = valores[pos];
            
            } if (valores[pos] < menor) {
                menor = valores[pos];
            } 
        }

        media = soma / total;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é:  ${media}. </p>`
    }
}