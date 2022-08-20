var Boton1 = document.getElementById("firstfact");
var Boton2 = document.getElementById("secondfact");
var Resultados = document.getElementById("resultados");
var i = -1, j = -1;
var text;
var array2 = [];
var array1 = [];

Boton1.onclick = function(){
    var text = document.getElementById("dato").value;
    i++;
    array1[i] = text;
    document.getElementById("concat").innerHTML = [...array1,...array2];
}

Boton2.onclick = function(){
    var text = document.getElementById("datotwo").value;
    j++;
    array2[j] = text;
    document.getElementById("concat").innerHTML = [...array1, ...array2];
} 