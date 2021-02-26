// dichiarazione di variabili

var name = prompt("inserisci il tuo nome:", 'Mario');
var surename = prompt('inserisci il tuo cognome:', 'Rossi');
var color = prompt('inserisci il tuo colore preferito:', 'Verde');
var password = name + surename + color + 21;
var i = 0;
var hoverRM = document.getElementById('hover');

// document.getElementById("pw").value = password;

// Funzioni

function copyFunction() {
    var copyText = document.getElementById("pw");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

function writeFunction(){
  if (i < password.length){
    document.getElementById("pw").value += password.charAt(i);
    i++;
    setTimeout(writeFunction, 130);
  }
}


function removerHOVER(){
  hoverRM.style.opacity= "0";
  // document.getElementById('hover').innerHRML = '';
}
