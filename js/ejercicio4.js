// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// Definir la función para determinar si un número es par o impar

var numero = prompt("Ingrese un numero para saber si es par o impar");
var resultado = parImpar(numero);

function parImpar(numero) {
  if (numero % 2 === 0) {
    return "El número " + numero + " es par.";
  } else {
    return "El número " + numero + " es impar.";
  }
}

document.write(resultado)
