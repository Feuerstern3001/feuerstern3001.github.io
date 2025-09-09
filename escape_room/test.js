'use strict';
window.onload = start;
function check(){
eingabe = document.getElementById('input');
if(eingabe.value == ""){
alert('Bitte gebe erst etwas ein...');
}
else if(eingabe.value == 20){
alert('Korrekt');
}else{
alert('inkorrekt');
}
}
