function calcular()
{
	
	var premio = document.getElementById("premio").value;
	var premio_1 = parseInt(document.getElementById("premio_1").value);
	var premio_2 = parseInt(document.getElementById("premio_2").value);
	var premio_3 = parseInt(document.getElementById("premio_3").value);
	
	//calcular
	
	var r1 = premio * premio_1/(premio_1 + premio_2 + premio_3);
    var r2 = premio * premio_2/(premio_1 + premio_2 + premio_3);
    var r3 = premio * premio_3/(premio_1 + premio_2 + premio_3);
	
	//saidas
	
	//alert(r1);
	//alert(r2);
	//alert(r3);
	var result = "o primeiro colocado recebera R$ " + r1 + 
	" <br> o segundo colocado recebera R$ " + r2 +" <br> o terceiro colocado recebera"+ r3;

	document.getElementById("resultado").innerHTML = result;
}