var name = prompt("inserisci il tuo nome:", 'Mario');
var surename = prompt('inserisci il tuo cognome:', 'Rossi');
var color = prompt('inserisci il tuo colore preferito:', 'Verde');

var password = name + surename + color + 21;

document.getElementById("pw").value = password;

function copyFunction() {
    var copyText = document.getElementById("pw");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }