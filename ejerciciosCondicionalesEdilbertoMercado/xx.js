/*console.log("Ejercicio 1 ----------");
let num1 = parseFloat (prompt ("escriba un numero:"))
let num2 = parseFloat (prompt ("escriba un numero:"))
if (num1 > num2) {
    console.log("el primer numero es mayor que el segundo");   
}else{
    console.log("el primer numero no es mayor que el segundo");
}
console.log("Ejercicio 2 ----------");
let numero1 = parseFloat (prompt ("escriba un numero:"))
let numero2 = parseFloat (prompt ("escriba un numero:"))
if (numero1 === numero2) {
    console.log("el primer numero es igual al segundo numero digitado");
    
}else{
    console.log("el primer numero es diferente al segundo numero digitado");
}
console.log("Ejercicio 3----------");
let number1 = parseFloat (prompt ("escriba un numero:"))
let number2 = parseFloat (prompt ("escriba un numero:"))
if (number1 === number2) {
    console.log("los dos numeros digitados son iguales");   
}
else if(number1>number2) {
    console.log("el primer numero digitado es mas grande que el segundo");  
}else{
    console.log("el segundo numero digitado es mas grande que el primero ");  
}
console.log("Ejercicio 4----------");
let primerNum= parseFloat (prompt ("escriba un numero:"))
let segundoNum= parseFloat (prompt ("escriba un numero:"))
let tercerNum= parseFloat (prompt ("escriba un numero:"))
if (primerNum <= segundoNum && primerNum<= tercerNum) {
    console.log("El primer número es el más chico: " + primerNum);
} else if (segundoNum <= primerNum && segundoNum <= tercerNum) {
    console.log("El segundo número es el más chico: " + segundoNum);
} else {
    console.log("El tercer número es el más chico: " + tercerNum);
}
console.log("Ejercicio 5----------");
let persona1 = {
    nombre: "Juan",
    edad: 30,
    altura: 175
};
let persona2 = {
    nombre: "María",
    edad: 25,
    altura: 162
};
if (persona1.altura > persona2.altura) {
    console.log("la primera persona es mas alta que la segunda persona" );
}else if (persona2.altura > persona1.altura) {
    console.log(persona2.nombre + " es la persona más alta.");
} else {
    console.log("Ambas personas tienen la misma altura.");
}
if (persona1.edad > persona2.edad) {
    console.log("la primera persona tiene mas edad que la segunda persona" );
}else if (persona2.edad > persona1.edad) {
    console.log("la primera persona tiene menos edad que la segunda persona");
} else {
    console.log("Ambas personas tienen la misma edad.");
}
console.log("Ejercicio 6----------");
let persona = {
    nombre : "Edilberto",
    edad : 27,
    altura : 173,
    vision : 8
}
if (persona.edad > 17 && persona.altura > 150 && persona.vision >= 8) {
    console.log("Persona capacitada para conducir");
}else{
    console.log("Persona no capacitada para conducir");
}
console.log("Ejercicio 7----------")
let nombre1 = prompt("ingrese su nombre:")
let paseVipONormal = prompt("ingrese VIP o NORMAL si tiene pase VIP o normal :")
if (nombre1=== "EDILBERTO" || paseVipONormal=== "VIP") {
    console.log("BIENVENIDO!!!");
} else if let (utilizarEntrada) = prompt ("desea utilizar entrada SI/NO"){
    
    if (utilizarEntrada === "SI") {
        console.log("BIENVENIDO!!!");
        
    }else {
        console.log("HASTA PRONTO!!!");
    }
}
console.log("Ejercicio 8----------");
let numeroIncognita = 8
let numeroIngresado = parseInt(prompt("ingrese un numero: "))
if (numeroIncognita === numeroIngresado) {
    console.log("ADIVINASTE!!!");
} else if (numeroIncognita > numeroIngresado) {
    console.log("el numero que ingresaste es menor");
    let numeroIngresado1 = parseInt(prompt("ingrese un numero: "))
    if (numeroIngresado1 === numeroIncognita) {
        console.log("ADIVINASTE!!!");
    } else if (numeroIncognita > numeroIngresado1) {
        console.log("el numero que ingresaste es menor");
        let numeroIngresado2 = parseInt(prompt("ingrese un numero: "))
        if (numeroIngresado2 === numeroIncognita) {
            console.log("ADIVINASTE!!!");
        } else if (numeroIncognita > numeroIngresado2) {
            console.log("el numero que ingresaste es menor, PERDISTE");
        } else {
            console.log("el numero que ingresaste es mayor, PERDISTE");
        }
    } else {
        console.log("el numero que ingresaste es mayor");
        let numeroIngresado2 = parseInt(prompt("ingrese un numero: "))
        if (numeroIngresado2 === numeroIncognita) {
            console.log("ADIVINASTE!!!");
        } else if (numeroIncognita > numeroIngresado2) {
            console.log("el numero que ingresaste es menor, PERDISTE");
        } else {
            console.log("el numero que ingresaste es mayor, PERDISTE");
        }
    }
} else {
    console.log("el numero que ingresaste es mayor");
    let numeroIngresado1 = parseInt(prompt("ingrese un numero: "))
    if (numeroIngresado1 === numeroIncognita) {
        console.log("ADIVINASTE!!!");
    } else if (numeroIncognita > numeroIngresado1) {
        console.log("el numero que ingresaste es menor");
        let numeroIngresado2 = parseInt(prompt("ingrese un numero: "))
        if (numeroIngresado2 === numeroIncognita) {
            console.log("ADIVINASTE!!!");
        } else if (numeroIncognita > numeroIngresado2) {
            console.log("el numero que ingresaste es menor, PERDISTE");
        } else {
            console.log("el numero que ingresaste es mayor, PERDISTE");
        }
    } else {
        console.log("el numero que ingresaste es mayor");
        let numeroIngresado2 = parseInt(prompt("ingrese un numero: "))
        if (numeroIngresado2 === numeroIncognita) {
            console.log("ADIVINASTE!!!");
        } else if (numeroIncognita > numeroIngresado2) {
            console.log("el numero que ingresaste es menor, PERDISTE");
        } else {
            console.log("el numero que ingresaste es mayor,PERDISTE");
        }
    }
}
console.log("Ejercicio 9----------")
let edad9 = parseInt(prompt("ingresa tu edad:"))
if (edad9 >= 0 && edad9 <= 12 ) {
    console.log("Eres un infante: ");
    
}else if (edad9 >= 13 && edad9 <= 18 ) {
    console.log("Eres un adolescente: ");
}else if (edad9 >= 19 && edad9 <= 45 ) {
    console.log("Eres un mayor joven: ");
}else if (edad9 > 45 && edad9 <= 100 ) {
    console.log("Eres un anciano: ");
}else{
    console.log("En realidad tienes esa edad?");
}
console.log("Ejercicio 10----------")
let jugador1 = prompt("Ingrese PIEDRA/PAPEL/TIJERA")
let jugador2 = prompt("Ingrese PIEDRA/PAPEL/TIJERA")
if (
    (jugador1 === "PIEDRA" && jugador2 === "PAPEL") ||
    (jugador1 === "PAPEL" && jugador2 === "TIJERA") ||
    (jugador1 === "TIJERA" && jugador2 === "PIEDRA")
) {
    console.log("¡Jugador 2 gana!");
} else if (
    (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
    (jugador1 === "TIJERA" && jugador2 === "PAPEL") ||
    (jugador1 === "PIEDRA" && jugador2 === "TIJERA")
) {
    console.log("¡Jugador 1 gana!");
} else if (jugador1 == jugador2) {
    console.log("¡EMPATE!");
} else {
    console.log("¡UNO DE LOS JUGADORES HA HECHO TRAMPA!");
}
console.log("Ejercicio 11----------")
let color = prompt("ingresa un color")
switch (color) {
    case "blanco":
    case "negro":
        console.log("falta de color");
        break;
    case "verde":
        console.log("el color de la naturaleza");
        break;
    case "azul":
        console.log("el color del agua");
        break;
    case "amarillo":
        console.log("el color del sol");
        break;
    case "rojo":
        console.log("el color del fuego");
        break;
    case "marron":
        console.log("el color de la tierra");
        break;
    default:
        console.log("excelente eleccion, no lo teniamos pensado");
        break;
}
console.log("Ejercicio 12----------")
let valorUno = parseInt(prompt("ingrese un valor"))
let valorDos = parseInt(prompt("ingrese otro valor"))
let operacion = prompt("ingrese 1- para suma 2- para resta 3- para multiplicacion 4- para division")
switch (operacion) {
    case "1":
        let resultado1 = valorUno + valorDos
        console.log(" el resultado de esta suma es " + resultado1);
        break;
    case "2":
        let resultado2 = valorUno - valorDos
        console.log(" el resultado de esta resta es " + resultado2);
        break;
    case "3":
        let resultado3 = valorUno * valorDos
        console.log(" el resultado de esta multiplicacion es " + resultado3);
        break;
    case "4":
        let resultado4 = valorUno / valorDos
        if (valorUno == 0) {
            console.log(" ERROR , divisor ingresado es 0 ");
        } else {
            console.log(" el resultado de esta division es " + resultado4);
        }
        break;
    default:
        console.log("Operación no válida");
        break;
}
console.log("Ejercicio 13----------")
console.log("Ingrese los datos de su Documento Nacional de Identidad (DNI):");
let numeroDNI = prompt("Número de DNI:");
let nombre = prompt("Nombre:");
let apellido = prompt("Apellido:");
let fechaNacimiento = prompt("Fecha de nacimiento (DD/MM/AAAA):");
let lugarNacimiento = prompt("Lugar de nacimiento:");
let fechaExpedicion = prompt("Fecha de expedición (DD/MM/AAAA):");
console.log("Datos ingresados:");
console.log("Número de DNI: " + numeroDNI);
console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Fecha de nacimiento: " + fechaNacimiento);
console.log("Lugar de nacimiento: " + lugarNacimiento);
console.log("Fecha de expedición: " + fechaExpedicion);
let confirmacion = prompt("¿Los datos ingresados son correctos? (SI/NO)").toUpperCase();
if (confirmacion === "SI") {
    let dni = {
        numeroDNI: numeroDNI,
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        lugarNacimiento: lugarNacimiento,
        fechaExpedicion: fechaExpedicion,
       
    };
    
    console.log("Registro exitoso. Datos del DNI:");
    console.table(dni);
} else {
    console.log("Vuelva a intentarlo en 1 mes.");
}
*/