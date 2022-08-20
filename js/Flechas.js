var inicio = document.getElementById("jujuju");


inicio.onclick = function(){
let age = prompt("¿Cual es tu edad?", 18);
let welcome = (age < 18) ?
() => alert('¡Hola!') :
() => alert("¡Adiós!");
welcome();
}

