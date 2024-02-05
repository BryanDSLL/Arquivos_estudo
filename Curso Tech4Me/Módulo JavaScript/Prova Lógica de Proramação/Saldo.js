const nomes = ['Bryan', 'Gaby', 'Pedro', 'Ana', 'Marcos', 'Paulo', 'Jonas', 'Aline'];
const saldos = [1500.00, 200000.00, 0.00, -500.25, -150.86, 425.89, 100.00, -15.50];

var nome = prompt('Digite o nome do cliente:');
var localizador = nomes.findIndex((i) => i.toLowerCase() === nome.toLowerCase());
var saldo = saldos[localizador];
var pessoa = nomes[localizador];


    if (localizador == -1) {
        console.log('Cliente não encontrado.');
}      
    else if (localizador == 1) {
        console.log("A Gaby é rica! O saldo dela é R$ " + saldo.toFixed(2));
}
    else {
        console.log("O saldo da conta de " + pessoa + " é R$ " + saldo.toFixed(2));
}
