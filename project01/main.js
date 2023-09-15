// Importamos el archivo CSS llamado "style.css".
import './style.css';

// Importamos el componente "Header" desde el archivo "./components/Header.js".
import Header from './components/Header';

// Importamos la constante "info" desde el archivo "./helper/data-page.js".
import { info } from './helper/data-page';

// Importamos la constante "api" desde el archivo "./helper/data-api.js".
import { api } from './helper/data-api';

// Importamos la función "Container" desde el archivo "./components/container.js".
import Container from './components/Container';

// Añadimos el componente "Header" al cuerpo del documento HTML, pasando "info" como argumento.
document.body.appendChild(Header(info));

// Añadimos el resultado de la función "Container(api)" al cuerpo del documento HTML.
// Esto renderiza las tarjetas de cursos y las agrega al documento.
document.body.appendChild(Container(api));// Lo que se ha hecho en el Container con la "api" se agregara al body del documento

