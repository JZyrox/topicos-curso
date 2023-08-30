// Esperar a que el contenido HTML se haya cargado completamente y se ejecutara todo el script dentro del function.
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario y escuchar el evento de envío
    // Obtener el primer elemento <form> encontrado en el documento
    const form = document.querySelector("form");
    // Agregamos un evento "submit" al formulario usando el método addEventListener, La función se ejecutará cuando se envíe el formulario.
      form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe por defecto
  
      // Obtener los campos de usuario y contraseña
      const userNameInput = document.getElementById("userName");
      const passInput = document.getElementById("pass");
  
      // Obtener los valores de los campos y eliminar espacios en blanco
      const userNameValue = userNameInput.value.trim(); //.trim() para eliminar cualquier espacio en blanco al principio o al final del valor. 
      const passValue = passInput.value.trim();
   
      // Verificar si los campos están vacíos
      if (userNameValue === "" || passValue === "") {
        const resultDivUser = document.createElement("div")
        resultDivUser.classList.add("result-user")
        resultDivUser.textContent = ("Rellena ambos campos.")
        document.body.appendChild(resultDivUser);
      } else if (passValue.length < 5) {
        const resultDivPass = document.createElement("div")
        resultDivPass.classList.add("result-pass")
        resultDivPass.textContent = ("Pon al menos 5 o más caracteres.")
        document.body.appendChild(resultDivPass);
      } else {
        // Crear un elemento para mostrar el resultado en la página
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-div");
        resultDiv.textContent = `Usuario: ${userNameValue} Contraseña: ${passValue}`;
        document.body.appendChild(resultDiv); // Agregar el resultado al cuerpo del documento
      }
    });
  });
  