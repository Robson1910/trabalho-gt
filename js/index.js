 function proximaPagina(){

    var email1,email2,email3;
	var senha1,senha2,senha3;
	var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
	
    // conferir dados nao esta vazio
  if(document.getElementById("email_field").value == ""){
  alert('Por favor, preencha todos os campo');
  return false
  } else if(document.getElementById("password_field").value == ""){
    alert('Por favor, preencha todos os campo');
  return false  
  } 
   const dbRef = firebase.database().ref().child('Usuario');
  dbRef.on("child_added", snap => {
      
	  email1 = snap.val().Email;
	  senha1 = snap.val().Senha;
	  
	   if(userEmail==email1&&userPass==senha1){
	window.location.href='html/usuario.html';
}
                  
    });
	
	const dbRef2 = firebase.database().ref().child('Assistencia');
  dbRef2.on("child_added", snap => {
      
	  email2 = snap.val().Email;
	  senha2 = snap.val().Senha;
	  
	   if(userEmail==email2&&userPass==senha2){
	window.location.href='html/assistencia.html';
}
                  
    });
	
 
const dbRef3 = firebase.database().ref().child('Tecnico');
  dbRef3.on("child_added", snap => {
      
	  email3 = snap.val().Email;
	  senha3 = snap.val().Senha;
	  
	   if(userEmail==email3&&userPass==senha3){
	window.location.href='html/tecnica.html';
}
                  
    });

  }

  // bloquedor de voltar a pagina
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);

  (function(window) { 
    'use strict'; 
   
  var noback = { 
     
    //globals 
    version: '0.0.1', 
    history_api : typeof history.pushState !== 'undefined', 
     
    init:function(){ 
      window.location.hash = '#no-back'; 
      noback.configure(); 
    }, 
     
    hasChanged:function(){ 
      if (window.location.hash == '#no-back' ){ 
        window.location.hash = '#BLOQUEIO';
        //mostra mensagem que não pode usar o btn volta do browser
        if($( "#msgAviso" ).css('display') =='none'){
          $( "#msgAviso" ).slideToggle("slow");
        }
      } 
    }, 
     
    checkCompat: function(){ 
      if(window.addEventListener) { 
        window.addEventListener("hashchange", noback.hasChanged, false); 
      }else if (window.attachEvent) { 
        window.attachEvent("onhashchange", noback.hasChanged); 
      }else{ 
        window.onhashchange = noback.hasChanged; 
      } 
    }, 
     
    configure: function(){ 
      if ( window.location.hash == '#no-back' ) { 
        if ( this.history_api ){ 
          history.pushState(null, '', '#BLOQUEIO'); 
        }else{  
          window.location.hash = '#BLOQUEIO';
          //mostra mensagem que não pode usar o btn volta do browser
          if($( "#msgAviso" ).css('display') =='none'){
            $( "#msgAviso" ).slideToggle("slow");
          }
        } 
      } 
      noback.checkCompat(); 
      noback.hasChanged(); 
    } 
     
    }; 
     
    // AMD support 
    if (typeof define === 'function' && define.amd) { 
      define( function() { return noback; } ); 
    }  
    // For CommonJS and CommonJS-like 
    else if (typeof module === 'object' && module.exports) { 
      module.exports = noback; 
    }  
    else { 
      window.noback = noback; 
    } 
    noback.init();
  }(window));