//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

//funcion
function tablaMultiplicar(numero) {
  document.write("<h2>Tabla de Multiplicar del " + numero + "</h2>");
  document.write("<ul>");

  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    document.write("<li>" + numero + " x " + i + " = " + resultado + "</li>");
  }
  document.write("</ul>");
}

var numeroIngresado = parseInt(
  prompt("Ingrese un número para mostrar su tabla de multiplicar del 1 al 10:")
);

//verificar si se ingresaron numeros del 1 al 10
if (isNaN(numeroIngresado)) {
  alert("Ingrese un número válido.");
} else {
  tablaMultiplicar(numeroIngresado);
}
