function enviar(){
 if(document.getElementById("nome_usuario").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("email_usuario").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("horas").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("mensa_usuario").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
}else if(document.getElementById("calendario").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
}
	else{
	var nome = document.getElementById("nome_usuario").value;
	var email = document.getElementById("email_usuario").value;
	var hora = document.getElementById("horas").value;
	var mensa = document.getElementById("mensa_usuario").value;
	var calenda = document.getElementById("calendario").value;
	document.getElementById('nome_usuario').value='';
	document.getElementById('email_usuario').value='';
	document.getElementById('horas').value='';
	document.getElementById('mensa_usuario').value='';
	document.getElementById('calendario').value='';
	
	var x = Math.floor((Math.random() * 10000) + 1);
	
	var dbRefObject = firebase.database().ref('Ticket');
	dbRefObject.child(x +"/Nome").set(nome);
	dbRefObject.child(x +"/Email").set(email);
	dbRefObject.child(x +"/Horas").set(hora);
	dbRefObject.child(x +"/Mensagem").set(mensa);
	dbRefObject.child(x +"/CalendarioEntrada").set(calenda);
	dbRefObject.child(x +"/Situcao").set("N/D");
	dbRefObject.child(x +"/Status").set("N/D");
	dbRefObject.child(x +"/Prioridade").set("N/D");
	dbRefObject.child(x +"/CalendarioSaida").set("N/D");
	dbRefObject.child(x +"/HorasSaida").set("N/D");
	dbRefObject.child(x +"/NomeTecnico").set("N/D");
	alert('Ticket cadastrado com sucesso ');
	}
}

$(function() {
    $("#calendario").datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    });
});


