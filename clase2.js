let consigna = alert("Responde verdadero o falso. Maximo 2 intentos.");
let preguntaUno = prompt("La primera versión Javascript se lanzo en 1997");
let resultado = 0;

if ((preguntaUno === "Verdadero") || (preguntaUno === "VERDADERO") || (preguntaUno === "verdadero")) {
    alert("Su respuesta es Correcta")
    resultado += 10;
    
} else {
    alert("Respuesta incorrecta")
    
    let preguntaUno = prompt("La primera versión Javascript se lanzo en 1997");
    if ((preguntaUno === "Verdadero") || (preguntaUno === "VERDADERO") || (preguntaUno === "verdadero")){
        alert("Su respuesta es Correcta")
        resultado += 5; 
    } else {
        alert ("Ya no quedan mas intentos.");
        
    }
    
}

let preguntaDos = prompt("Escribe el operador logico de DISTINTO")

if (preguntaDos === "!=") {
    alert("Su respuesta es Correcta");
    resultado += 10;
}else {
    alert("Respuesta incorrecta")
    let preguntaDos = prompt("Escribe el operador logico de DISTINTO")
    if (preguntaDos === "!="){
        alert("Su respuesta es Correcta"); 
        resultado += 5;
    } else {
        alert ("Ya no quedan mas intentos.");
        
    }
}

alert("Tu resultado final es: " + resultado);


