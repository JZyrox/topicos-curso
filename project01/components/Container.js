// Importamos el componente "Card" desde el archivo "./Card.js".
import Card from "./Card";

// Definimos una función llamada "Container" que toma un argumento llamado "api".
export default function Container(api) {
  // Creamos un elemento div y le asignamos la clase "courses-container".
  const container = document.createElement('div');
  container.classList = 'courses-container'; //contenedor de los cursos

  // Iteramos a través de cada elemento en el arreglo "api".
  api.forEach(data => {
    // Llamamos a la función "Card" pasando el elemento "data" como argumento para crear una tarjeta.
    const card = Card(data);
    // Añadimos la tarjeta como hijo del elemento "container". Lo que se hizo en const card se coloca en appendChild
    container.appendChild(card);
  });

  // Devolvemos el elemento "container" como resultado de la función.
  return container;
}
