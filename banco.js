
var cliente = {

    nome: 'Ana',
    login: 'aninha0ieo',
    senha:'3450',
    conta:'XD56',
    saldo: 400.000,

}

var add_dinheiro = function(valor){
    cliente.saldo = cliente.saldo + valor;
}

var remover_dinheiro = function(valor){
    cliente.saldo = cliente.saldo - valor;
}

var consultat_saldo = function(valor){
    console.log('SALDO: ' +  cliente.saldo);
}

var consultat_cliente = function(){
    console.log('nome: ' + cliente.nome);
    console.log('login: ' + cliente.login);
    console.log('senha: ' + cliente.semha )
    console.log('conta: ' + cliente.conta)
    console.log('saldo: ' + cliente.saldo)

}

add_dinheiro(100);
consultat_saldo();
remover_dinheiro(500.000);
consultat_saldo();