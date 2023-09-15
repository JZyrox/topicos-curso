// Exportamos una función llamada "Card" que toma tres argumentos: image, title y description.
export default function Card({ image, title, description }) { //Toma datos como argumentos.
    // Creamos un elemento div y le asignamos la clase "card".
    const card = document.createElement('div');
    card.classList = 'card';
  
      // Si se proporciona una URL de imagen en el objeto "image".. .
    if (image.url) {
      // Creamos un elemento de imagen (img).
      const cardImage = document.createElement('img');
      // Asignamos la URL de la imagen al atributo "src" de la imagen.
      cardImage.src = image.url;
      // Asignamos la clase "card-image" a la imagen.  
      cardImage.classList = 'card-image';
      // Añadimos la imagen como hijo del elemento "card".
      card.appendChild(cardImage);
    }

    // Creamos un elemento div y le asignamos la clase "card-content".
    const cardContent = document.createElement('div');
    cardContent.classList = 'card-content';
  
    // Creamos un elemento de encabezado h2 y establecemos su contenido como el título proporcionado.
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
  
    // Creamos un elemento de párrafo (p) y establecemos su contenido como la descripción proporcionada.
    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;
  
    // Añadimos el título y la descripción como hijos del elemento "cardContent".
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    card.appendChild(cardContent);
  
   // Creamos un botón y le asignamos la clase "close-button" y el texto "Ver más".
    const closeButton = document.createElement('button');
    closeButton.classList = 'close-button';
    closeButton.textContent = 'Ver más';
    // Añadimos el botón como hijo del elemento "card".
    card.appendChild(closeButton);
  
    // Devolvemos el elemento "card" como resultado de la función.
    return card;
  }