/*console.log("ejercicio 1 ---------");
let num= parseInt(prompt("Ingrese un numero "))

for (let i = 0; i <= 10; i++) {
    console.log(num + "X" + i+ "="+ num*i );
    
}*/

/*

console.log("ejercicio 2---------");

let suma = 0
console.log("ingrese un numero que quiera que se vaya acumulando , si digita 0 se terminara el proceso");

for (let i = 0; i < 15; i++) {
    let number= parseInt(prompt("ingrese numero aqui"))

    if (number === 0) {
        console.log("se termino la acumulacion");    
    }
    console.log("la suma total es " + (suma += number));

    
}
*/

console.log("ejercicio 3---------");

let numAdivinar = 13
let numeroIngresado = parseInt(prompt("adivine el numero"))
 

do {if (numAdivinar>numeroIngresado) {
    console.log("numero ingresado es menor");
     numeroIngresado = parseInt(prompt("adivine el numero"))

}else{
    console.log("numero ingresado es mayor");
     numeroIngresado = parseInt(prompt("adivine el numero"))

} 
} while (numAdivinar!=numeroIngresado);

console.log("adivinaste!!!");

/*
console.log("ejercicio 4---------");


let numero = parseInt(prompt("ingrese un numero"))

if (numero <= 1) {
    console.log("El número no es primo");
} else {
    let numeroEsPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            numeroEsPrimo = false;
            break;
        }
    }
    if (numeroEsPrimo) {
        console.log("El número es primo");
    } else {
        console.log("El número no es primo");
    }
}
*/
/*
console.log("ejercicio 5---------");

let numero = parseInt(prompt("Ingrese un número para mostrar todos sus divisores:"));

if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    console.log("Los divisores de " + numero + " son:");
    for (let i = 1; i <= numero / 2; i++) {
       
        if (numero % i === 0) {
            console.log(i);
        }
    }
    console.log(numero);
}

*/
/*
console.log("ejercicio 6---------");

let array = ["a","b","c","d","e","f","g","h","i","j"];
console.log("los elementos del arreglo son:");

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
*/

/*
console.log("ejercicio 7---------");

let array = [1,2,3,4,5,6,7,8,9,10];
console.log("los elementos del arreglo son:");

for (let i = 0; i < array.length; i++) {
    console.log((array[i]*2));
    
}
*/
/*
console.log("ejercicio 8---------");

let grupoFamiliar =[
{nombre: "edwin", ocupacion: "estudiante", edad: 27 , relacion:"primo"},
{nombre: "luisa", ocupacion: "doctora", edad: 35 , relacion:"tia"},
{nombre: "carmen", ocupacion: "docente", edad: 55 , relacion:"madre"},
{nombre: "leo", ocupacion: "conductor", edad: 56 , relacion:"padre"},
{nombre: "Rosa", ocupacion: "estudiante", edad: 7 , relacion:"hija"}
]
for (let i = 0; i < grupoFamiliar.length; i++) {
    let mensaje = "hola mi nombre " +grupoFamiliar[i].nombre+ " soy " +grupoFamiliar[i].ocupacion+ " tengo " +grupoFamiliar[i].edad+ " años y soy el/la " +grupoFamiliar[i].relacion+ " de la familia."  ;
console.log(mensaje);
}

*/
/*

console.log("ejercicio 9---------");


let array = [1,2,3,4,5,6,7,8,9,10];

console.log("los numeros impares del arreglo son:");

for (let i = 0; i < array.length; i++) {
   if (array[i]%2 !==0) {
    console.log(array[i]);
    
   }
}
*/
/*
console.log("ejercicio 10---------");


let sumaPares = 0;
let sumaImpares = 0;


while (true) {
    
    let numero = parseInt(prompt("Ingrese un número (0 para salir):"));

    
    if (numero === 0) {
        break; 
    }

    
    if (numero % 2 === 0) {
        
        sumaPares += numero;
    } else {
        
        sumaImpares += numero;
    }
}


console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares);
*/

/*
console.log("ejercicio 11---------");


let numeros = [4, 7, 2, 10, 8, 5, 9, 3, 6, 1];

let numeroMasGrande = numeros[0]; 


for (let i = 1; i < numeros.length; i++) {
    
    if (numeros[i] > numeroMasGrande) {
       
        numeroMasGrande = numeros[i];
    }
}


console.log("El número más grande es:", numeroMasGrande);
*/
/*
console.log("ejercicio 12---------");


let numeros = [4, 7, 2, 10, 8, 5, 9, 3, 6, 1];

let numeroMasChico = numeros[0]; 


for (let i = 1; i < numeros.length; i++) {
    
    if (numeros[i] < numeroMasChico) {
       
        numeroMasChico = numeros[i];
    }
}


console.log("El número más chico es:", numeroMasChico);
*/
/*
console.log("ejercicio 13---------");

let nombreJugador1 = prompt("Escriba su nombre jugador 1")
let nombreJugador2 = prompt("Escriba su nombre jugador 2")
let empate = true


while (true) {
    let piedraPapelTijera1 = prompt(nombreJugador1+" escoja entre piedra/papel/tijera")
let piedraPapelTijera2 = prompt(nombreJugador2+" escoja entre piedra/papel/tijera")
    

if (piedraPapelTijera1=== "piedra" && piedraPapelTijera2=== "tijera" || piedraPapelTijera1=== "tijera" && piedraPapelTijera2==="papel" || piedraPapelTijera1=== "papel" && piedraPapelTijera2==="piedra") {
    console.log(nombreJugador1+ " ha ganado!!!");
    break
    
}else if (piedraPapelTijera2=== "piedra" && piedraPapelTijera1=== "tijera" || piedraPapelTijera2=== "tijera" && piedraPapelTijera1=== "papel" || piedraPapelTijera2=== "papel" && piedraPapelTijera1=== "piedra") {
    console.log(nombreJugador2+ " ha ganado!!!");
    break
    
}else{
    console.log("Empate !!!");
    empate= true
}
}
*/
/*
console.log("ejercicio 14---------");

let asterisco = " * ";

for (let i = 0; i < 10; i++) {
    console.log(asterisco);
    asterisco += " * ";
}
*/


/*
console.log("ejercicio 15---------");

for (let i = 5; i > 0; i--) {
    console.log(" * ".repeat(i));
}
*/


    
    


