var sanduiche = prompt("Digite o sanduíche desejado: ")
var valorSanduiche = 20
var totalPedido
var acompanhamentoLista = "" 
var contaAcompanhamento = 0

    while (acompanhamento != "concluir") {
        var acompanhamento = prompt("Digite o acompanhamento desejado: ")
    
        if (acompanhamento != "concluir") {
            
            acompanhamentoLista = acompanhamentoLista + ", " + acompanhamento
            contaAcompanhamento ++
        } 

        else 
        acompanhamentoLista = acompanhamentoLista
    } 
        totalPedido = valorSanduiche + (contaAcompanhamento * 2)
        
        alert("Seu pedido é um " + sanduiche + " R$"+ valorSanduiche +" com os acompanhamentos (R$ 2,00 cada): " + acompanhamentoLista + " Valor total: R$" + totalPedido) 
