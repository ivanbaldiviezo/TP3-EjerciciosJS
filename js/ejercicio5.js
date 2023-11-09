//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

var texto = prompt("Ingrese un texto");
var resultado = analizarTexto(texto);

function analizarTexto(texto) {
  if (texto === texto.toUpperCase()) {
    return 'El texto está formado solo por mayúsculas.';
  } else if (texto === texto.toLowerCase()) {
    return 'El texto está formado solo por minúsculas.';
  } else {
    return 'El texto está formado por una mezcla de mayúsculas y minúsculas.';
  }
}

document.write(resultado);
