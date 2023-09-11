// Exportamos una función llamada "Header" como valor predeterminado (default export).
// Esta función toma un objeto con propiedades "title" y "subtitle" como argumento.
export default function Header({ title, subtitle }) {
    // Creamos un elemento <header> en el DOM.
    const header = document.createElement('header');
  
    // Asignamos una clase CSS llamada "header" al elemento <header>.
    header.classList = 'header';
  
    // Asignamos contenido HTML al elemento <header>.
    header.innerHTML = `
      <h1 class='header-title'>${title}</h1>
      <h3 class='header-subtitle'>${subtitle}</h3>
    `;
  
    // Devolvemos el elemento <header> como resultado de la función.
    return header;
  }
  