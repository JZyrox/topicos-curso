//     const vowels = ['a','e','i','o','u']
// //map ---> regresa
// //Creo mi nuevo array (copia) del primer array, mapeo mi anterior array, en donde le hare un clg que me itera.
//     const vowelsRead = vowels.map((vowel) => {
//         return vowel.toUpperCase()
//     })
//     console.log(vowelsRead)

//Crea un array de calificaciones (6)

const calificaciones = ['10','9','6','8','3','5']

//Entrega un array nuevo donde aparezca una palabra (>10) aprobado(<10)

const calificacionesFinal = calificaciones.map((calif) => {
    if (calif < 7.0){
        return "Reprobado"
    }
    else {
        return "Aprobado"
    }
})
console.log(calificacionesFinal);