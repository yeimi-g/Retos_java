//Reto 1: Saludo Personalizado
 function saludar(){
 let nombre=prompt("ingrese su nombre");
 	console.log("¡Hola "+ nombre + ", bienvenido/a!");
  let saludo= "¡Hola "+ nombre + ", bienvenido/a!";
  document.getElementById("resultado").innerHTML=saludo;
 } 
//Reto 2: Conversor de Grados Celsius a Fahrenheit
function conversion(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius + "°C = " + fahrenheit + "°F");
    let resultado_conv=celsius + "°C = " + fahrenheit + "°F";
    document.getElementById("resultado2").innerHTML = resultado_conv;
}
// Reto 3: Número Par o Impar
function paridad() {
  let numero = parseInt(prompt("Ingrese un número:"));
  
   if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
    } else if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
    let par_imp= numero + " es un número par.";
    document.getElementById("resultado3").innerHTML= par_imp;
  } else {
    console.log(numero + " es un número impar.");
    let par_imp= numero + " es un número impar.";
    document.getElementById("resultado3").innerHTML= par_imp;
  }
}
//Reto 4: Contador de Caracteres
function contarCaracteres() {
  let cadena = prompt("Ingrese una palabra:");

  if (cadena === null || cadena.trim() === "") {
    console.log("Por favor, ingrese una palabra válida.");
  } else {
    console.log("La palabra '" + cadena + "' tiene " + cadena.length + " caracteres.");
    let cantidad= "La palabra '" + cadena + "' tiene " + cadena.length + " caracteres."
    document.getElementById("resultado4").innerHTML= cantidad;
  }
}
 //Reto 5: Invertir una Cadena
 function invertirPalabra() {
   let palabra = prompt("Ingrese una palabra:");

   if (palabra === null|| palabra.trim() === "") {
     console.log("Por favor, ingrese una palabra válida.");
   } else {
     let invertida = palabra.split("").reverse().join("");
     console.log("Palabra invertida: " + invertida);
     let palab_inv= "Palabra invertida: " + invertida;
     document.getElementById("resultado5").innerHTML= palab_inv;
   }
 }
 //Reto 6: Suma de Números del 1 al N
function sumarHastaN() {
  let N = parseInt(prompt("Ingrese un número:"));

  if (isNaN(N) || N <= 0) {
    console.log("Por favor, ingrese un número válido mayor que 0.");
  } else {
    let suma = (N * (N + 1)) / 2;
    console.log("La suma de los números del 1 al " + N + " es: " + suma);
    let total="La suma de los números del 1 al " + N + " es: " + suma;
    document.getElementById("resultado6").innerHTML= total;
  }
}
//Reto 7: Palabra en Mayúsculas y Minúsculas
function mostrarPalabra() {
    let palabra = prompt("Ingrese una palabra:");
    console.log("En mayúsculas: " + palabra.toUpperCase());
    console.log("En minúsculas: " + palabra.toLowerCase());
    
    let may="En mayúsculas: " + palabra.toUpperCase();
    document.getElementById("resultado7").innerHTML= may;
    let min="En minúsculas: " + palabra.toLowerCase();
    document.getElementById("resultado71").innerHTML= min;
}
//Reto 8: Número Aleatorio entre 1 y 100
function numeroAleatorio(){
	let numero = Math.floor(Math.random() * 100) + 1;
  console.log("El número aleatorio generado es: " + numero);
  let num="El número aleatorio generado es: " + numero;
  document.getElementById("resultado8").innerHTML= num;
}
// Reto 9: Verificador de Palíndromos
function verificarPalindromo() {
    let palabra=prompt("ingrese la palabra que desea verificar");
    let palabraReversa = palabra.split("").reverse().join(""); 
    // Verifica si la palabra es un palíndromo
    if (palabra.toLowerCase() === palabraReversa.toLowerCase()) {
        let resultado = "La palabra es un palíndromo.";
        document.getElementById("resultado9").innerHTML = resultado; 
    } else {
        let resultado = "La palabra no es un palíndromo.";
        document.getElementById("resultado9").innerHTML = resultado;
    }
}
//Reto 10: Contador de Vocales
function contarVocales() {
  let palabra = prompt("Ingrese la palabra a contar");
  palabra = palabra.toLowerCase();
  let contadorVocales = 0;

  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra.charAt(i);
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      contadorVocales++;
    }
  }

  console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocal(es).`);
  let sum_voc = `La palabra "${palabra}" tiene ${contadorVocales} vocal(es).`;
  document.getElementById("resultado10").innerHTML = sum_voc;
}
//llamas de las funciones
//reto 1
saludar();
// reto 2
conversion(25);
// reto 3
paridad();
//reto 4
contarCaracteres();
// reto 5
invertirPalabra();
// reto 6
sumarHastaN();
// reto 7 
mostrarPalabra();
// reto 8
numeroAleatorio();
// reto 9
verificarPalindromo();
// reto 10
contarVocales();
