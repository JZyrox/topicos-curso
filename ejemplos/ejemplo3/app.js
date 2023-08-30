const estudiantes = ['Ricardo', 'Julio', 'Daniela', 'Arlete'];

//Forma clasica iterar
for (let i=0; i < estudiantes.length; i++){
    console.log(estudiantes[i]);
}

//For in devuelve la index
for(let estudiante in estudiantes){
    console.log(estudiantes([estudiante]))
}

for(let estudiante of estudiantes){
    console.log(estudiante)
}

// Funciones

