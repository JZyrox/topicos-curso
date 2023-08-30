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

borrar.addEventListener('click', () => {
  const p = document.querySelectorAll('p');
  for(let i=0; i < p.length; i++){
    document.body.removeChild(p[i]);
  }
});

for (let i=0; i < estudiantes.length; i++) {
  console.log(estudiantes[i])
}
