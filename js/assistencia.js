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

function altera(){
	if(document.getElementById("id_field").value == ""){
alert('Por favor, preencha todos os campo');
return false
} else if(document.getElementById("status_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("priori_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("situ_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} 

else {
	var chave = document.getElementById("id_field").value;
	var produto = document.getElementById("status_field").value;
	var valor = document.getElementById("priori_field").value;
	var supermercado = document.getElementById("situ_field").value;

	document.getElementById('id_field').value='';
	document.getElementById('status_field').value='';
	document.getElementById('priori_field').value='';
	document.getElementById('situ_field').value='';

	var dbRefObject = firebase.database().ref().child('Ticket/'+ chave);
	dbRefObject.update({ Status:produto, Prioridade:valor,Situcao:supermercado});
	console.log("sucesso");
	alert('Registrado com sucesso');
	location.reload();
}
}