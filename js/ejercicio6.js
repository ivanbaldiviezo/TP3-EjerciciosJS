//6-Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// Función para calcular el perímetro de un rectángulo
function calcularPerimetro(lado1, lado2) {
  return 2 * (lado1 + lado2);
}

var lado1 = parseFloat(
  prompt("Ingrese el valor del primer lado del rectángulo:")
);
var lado2 = parseFloat(
  prompt("Ingrese el valor del segundo lado del rectángulo:")
);

//verificar si se ingresaron numeros
if (isNaN(lado1) || isNaN(lado2)) {
  alert("Por favor, ingrese valores numéricos");
} else {
  //calcular el perímetro
  var perimetro = calcularPerimetro(lado1, lado2);

  document.write("El perímetro del rectángulo es: " + perimetro);
}
