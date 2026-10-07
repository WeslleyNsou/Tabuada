
function gerarTabuada(numTab) {
    document.getElementById("resultado").innerHTML = "";
    
    numTab = document.getElementById("numTab").value;
     
    for (var i = 1; i <= 10; i++) {
        let resultado = numTab * i
        document.getElementById("resultado").innerHTML += numTab + " x " + i + " = " + resultado + "<br>"
    }
      
}
    