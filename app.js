//Resolução do 2 item da lista 
let titulo =  document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

//Resolução do 3 item da lista
function botaoConsole() {
    console.log ('Foi clicado');
}

//Resolução do 4 item da lista
function botaoJs() {
    console.log ('Eu amo JS');
}

//Resolução do 5 item da lista
let cidade;

function botaoCidade() {
    cidade = prompt ('qual a sua cidade?');
     alert(`sua cidade é ${cidade}`);
}

//Resolução do 6 item da lista
let valor1
let valor2
let valorTotal

function botaoSoma() {
    valor1 = parseFloat(prompt('Insira o primeiro valor:')); 
    valor2 = parseFloat(prompt('Insira o segundo valor:'));
    valorTotal = valor1 + valor2
    alert (`O seu resultado é ${valorTotal}`)
}
