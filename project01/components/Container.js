// Importamos el componente "Card" desde el archivo "./Card.js".
import Card from "./Card";

// Definimos una función llamada "Container" que toma un argumento llamado "api".
export default function Container(api) {
  // Creamos un elemento div y le asignamos la clase "courses-container".
  const container = document.createElement('div');
  container.classList = 'courses-container'; //contenedor de los cursos

  // Iteramos a través de cada elemento en el arreglo "api". Bucle forEach
  api.forEach(data => { //hacemos una tarjeta para cada dato  y agrega las tarjetas al contenedor.
    // Llamamos a la función "Card" que esta en el archivo Card.js  pasando el elemento "data" como argumento para crear una tarjeta.
    const card = Card(data); //data es el elemento, se crea aqui la tarjeta 
    // Añadimos la tarjeta como hijo del elemento "container". Lo que se hizo en const card se coloca en appendChild
    container.appendChild(card);
  });

  // Devolvemos el elemento "container" como resultado de la función.
  return container;
  //Devuelve el contenedor con todas las tarjetas como resultado de la función  
}
