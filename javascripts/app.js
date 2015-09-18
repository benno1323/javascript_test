$('button').on('click', function(){
	var peso = $('#peso').val();
	var altura = $('#altura').val();
	var imc = (peso/ (altura * altura));
	alert("Tu IMC es de: " + imc);
})