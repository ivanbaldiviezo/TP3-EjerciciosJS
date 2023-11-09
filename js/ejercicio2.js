/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

var ciudades = [];

//nombre de las ciudades mediante un bucle
while (true) {
  var ciudad = prompt('Ingrese el nombre de una ciudad:');

  // si el usuario hizo clic en "Cancelar" o no ingresó un valor
  if (ciudad === null || ciudad === '') {
    break; 
  }

  ciudades.push(ciudad);  // Agregar la ciudad al array
}

//longitud del array
document.write(`El array de ciudades tiene ${ciudades.length} elementos`);

//posiciones: primera, tercera y última
document.write('<ul>');
document.write('<li>Elemento 1er posicion: ' + ciudades[0] + '<br>');
document.write('<li>Elemento 3er posicion: ' + ciudades[2] + '<br>');
document.write('<li>Elemento ultima posicion: ' + ciudades[ciudades.length - 1] + '<br>');

//última posición 'paris'
ciudades.push('París');
document.write('<li>Elemento ultima posicion predefinido: París')

//segunda posición
document.write('<li>Elemento 2da posición: ' + ciudades[1] + '<br>');
document.write('</ul>');

// cambiar la segunda posición por 'Barcelona'
ciudades[1] = 'Barcelona';

// Mostrar el array generado como una lista en el documento web
document.write('<h2>Array de ciudades</h2>')
document.write('<ul>');
for (var i = 0; i < ciudades.length; i++) {
  document.write('<li>Elemento: ' + ciudades[i] + '</li>');
}
document.write('</ul>');