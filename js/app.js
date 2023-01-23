/********************************************************************/
/********************************| Han |**********************************/
/********************************************************************/
function add() {
	var n3 = document.getElementById('n3').value;
	if (n3 != "") {
		var n1 = Number(document.getElementById('n1').innerHTML);
		var n2 = Number(document.getElementById('n2').innerHTML);
		if((n1+n2) == n3){
			alert("BETUL Gas lagi!");  
		}else{
			alert("SALAH Coba Lagi!");
		}
		resetar();
	}else{
		alert("HanGarr")
		resetar();
	}
}	
function resetar() {
	alt1 = Math.floor((Math.random() * 12));
	alt2 = Math.floor((Math.random() * 10 ));
	document.getElementById("n3").value = "";
	document.getElementById("n1").innerHTML = alt1;
	document.getElementById("n2").innerHTML = alt2;
}
function resetardivisao() {
	alt1 = Math.floor((Math.random() * 12))+1;
	alt2 = Math.floor((Math.random() * 10 ))+1;
	document.getElementById("n3").value = "";
	document.getElementById("n1").innerHTML = alt1*alt2;
	document.getElementById("n2").innerHTML = alt2;
}
/********************************************************************/
/********************************| Han |**********************************/
/********************************************************************/
function sub() {
	var n3 = document.getElementById('n3').value;
	if (n3 != "") {
		var n1 = Number(document.getElementById('n1').innerHTML);
		var n2 = Number(document.getElementById('n2').innerHTML);
		if((n1-n2) == n3){
			alert("BETUL Gas lagi!");
		}else{
			alert("SALAH Coba Lagi!");
		}
		resetar();
	}else{
		alert("HanGarr")
		resetar();
	}
}	
/********************************************************************/
/********************************| Han |**********************************/
/********************************************************************/
function mult() {
	var n3 = document.getElementById('n3').value;
	if (n3 != "") {
		var n1 = Number(document.getElementById('n1').innerHTML);
		var n2 = Number(document.getElementById('n2').innerHTML);
		if((n1*n2) == n3){
			alert("BETUL Gas lagi!");
		}else{
			alert("SALAH Coba Lagi!");
		}
		resetar();
	}else{
		alert("HanGarr")
		resetar();
	}
}	
/********************************************************************/
/********************************| Han |**********************************/
/********************************************************************/
function divisao() {
	var n3 = document.getElementById('n3').value;
	if (n3 != "") {
		var n1 = Number(document.getElementById('n1').innerHTML);
		var n2 = Number(document.getElementById('n2').innerHTML);
		if((n1/n2) == n3){
			alert("BETUL Gas lagi!");
		}else{
			alert("SALAH Coba Lagi!");
		}
		resetardivisao();
	}else{
		alert("HanGarr")
		resetardivisao();
	}
}	
