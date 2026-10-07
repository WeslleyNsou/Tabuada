//const numTab = document.getElementById('numTab');

//Função para gerar a tabuada
function gerarTabuada() {
    var numTab = 5;

    for (var i = 1; i <= 10; i++) {
        var resultado = numTab * i;
        console.log(numTab + " x " + i + " = " + resultado);
    }
}