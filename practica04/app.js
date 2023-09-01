const estudiantes = ['Daniela', 'Julio','Chris','Kevin'];

const titulo = document.createElement('h1');
titulo.innerHTML = 'FUNCIONES';

const borrar = document.createElement('h1');
borrar.innerHTML = 'BORRAR ESTUDIANTES';

document.body.appendChild(titulo);
document.body.appendChild(borrar);

titulo.addEventListener('click', () => {
  for (let estudiante of estudiantes) {
    const p = document.createElement('p');
    p.innerHTML = estudiante;
    document.body.appendChild(p);
  }
});

// Agregamos un evento 'click' al elemento con el id 'borrar'
borrar.addEventListener('click', () => {
  // Seleccionamos todos los elementos 'p' en el documento y los almacenamos en la variable 'p'
  const p = document.querySelectorAll('p');
  
  // Iniciamos un bucle 'for' que itera desde 0 hasta la longitud de 'p'
  for(let i=0; i > p.length; i++){
    // Eliminamos el elemento 'p[i]' del documento
    document.body.removeChild(p[i]);
  }
});



for (let i=0; i < estudiantes.length; i++) {
  console.log(estudiantes[i])
}
