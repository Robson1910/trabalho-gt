const dbRefObject = firebase.database().ref().child('Ticket');
  
   dbRefObject.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.key;
 ulList.appendChild(li);
 });
 const ulList = document.getElementById('add');
 
 
 const dbRef = firebase.database().ref().child('Ticket');
  
   dbRef.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText = snap.val().Nome;
 uList.appendChild(li);
 });
 const uList = document.getElementById('add1');
 
 const dr = firebase.database().ref().child('Ticket');
  
   dr.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText = snap.val().Email;
 uListrrr.appendChild(li);
 });
 const uListrrr = document.getElementById('add2');

 const dbRefa = firebase.database().ref().child('Ticket');
  
   dbRefa.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().Assunto;
 uLista.appendChild(li);
 });
 
 const uLista = document.getElementById('addd');
 
 const dbRefd = firebase.database().ref().child('Ticket');
  
   dbRefd.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().Mensagem;
 uListf.appendChild(li);
 });
 
 const uListf = document.getElementById('add3');
 
 
 const dbRefda = firebase.database().ref().child('Ticket');
  
   dbRefda.on('child_added', snap => {
 const li = document.createElement('table','overflow:auto');
  li.innerText =snap.val().CalendarioEntrada +" - "+ snap.val().Horas ;
 uListfs.appendChild(li);
 });
 
 const uListfs = document.getElementById('add4');
 
 const dbRefdaff = firebase.database().ref().child('Ticket');
  
   dbRefdaff.on('child_added', snap => {
 const li = document.createElement('table','overflow:auto');
  li.innerText =snap.val().Status;
 uListfss.appendChild(li);
 });
 
 const uListfss = document.getElementById('add5');
 

  const dbRefdafaf = firebase.database().ref().child('Ticket');
  
   dbRefdafaf.on('child_added', snap => {
 const li = document.createElement('table','overflow:auto');
  li.innerText =snap.val().Prioridade;
 uListfsas.appendChild(li);
 });
 
 const uListfsas = document.getElementById('add6');
 
 const dbRefdafafq = firebase.database().ref().child('Ticket');
  
   dbRefdafafq.on('child_added', snap => {
 const li = document.createElement('table','overflow:auto');
  li.innerText =snap.val().Situcao;
 uListfsasq.appendChild(li);
 });
 
 const uListfsasq = document.getElementById('add7');
 
 
 const dbRefdafafq2 = firebase.database().ref().child('Ticket');
  
   dbRefdafafq2.on('child_added', snap => {
 const li = document.createElement('table','overflow:auto');
  li.innerText =snap.val().CalendarioSaida+" - "+ snap.val().HorasSaida;
 uListfsasq2.appendChild(li);
 });
 
 const uListfsasq2 = document.getElementById('add8');
 
 const dbRefdafafq29 = firebase.database().ref().child('Ticket');
  
   dbRefdafafq29.on('child_added', snap => {
 const li = document.createElement('table','overflow:auto');
  li.innerText =snap.val().NomeTecnico;
 uLr.appendChild(li);
 });
 
 const uLr = document.getElementById('add9');
 
 function exclui(){
	
	if(document.getElementById("exclui").value == ""){
alert('Por favor, preencha o campo excluir');
return false
} else {
	var excluir = document.getElementById("exclui").value;
	document.getElementById('exclui').value='';
	var dbRefObject = firebase.database().ref().child('Ticket/'+ excluir);
	dbRefObject.remove().then(function(){
		console.log("sucesso");
	}).catch(function(error){
		console.log("erro");
	})
	location.reload();
}
}

$(function() {
    $("#calendario_fild").datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
        dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
    });
});

function altera(){
	if(document.getElementById("cod_fild").value == ""){
alert('Por favor, preencha todos os campo');
return false
} else if(document.getElementById("nom_fild").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("status_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("calendario_fild").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("horas_fild").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} 

else {
	var chave = document.getElementById("cod_fild").value;
	var produto = document.getElementById("nom_fild").value;
	var valor = document.getElementById("status_field").value;
	var supermercado = document.getElementById("calendario_fild").value;
	var endereco = document.getElementById("horas_fild").value;
	
	document.getElementById('cod_fild').value='';
	document.getElementById('nom_fild').value='';
	document.getElementById('horas_fild').value='';
	document.getElementById('status_field').value='';
	document.getElementById('calendario_fild').value='';
	
	var dbRefObject = firebase.database().ref().child('Ticket/'+ chave);
	dbRefObject.update({ NomeTecnico:produto, Status:valor,CalendarioSaida:supermercado,HorasSaida:endereco});
	console.log("sucesso");
	alert('Produto alterado com sucesso');
}
}