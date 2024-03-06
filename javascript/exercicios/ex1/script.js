function calcular() {
    var khw = document.getElementById("khw").value;
    

    var valor_final = khw * 1.5;
    var aposentado = document.getElementById("aposentado").checked;
    
    if(aposentado == true)
    {
        valor_final = valor_final - (valor_final * 0.15);
    }
    
    alert("o valor final foi: R$"+ valor_final) 


}