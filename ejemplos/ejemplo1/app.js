const main = document.createElement('main');
main.classList = "main";
document.body.appendChild(main);

const h2 = document.createElement('h2');
h2.innerHTML = "Pesos a Dolares";
main.appendChild(h2); //Agrega el h2 en el main

const form = document.createElement('form');
main.append(form);

const div_pesos = document.createElement("div");
form.appendChild(div_pesos);

const input_pesos = document.createElement('input');
input_pesos.placeholder = "Introduce número de pesos"
input_pesos.id = "numero_pesos"
div_pesos.appendChild(input_pesos);

const div_button = document.createElement("div");
form.append(div_button);

const input_submit = document.createElement('input');
input_submit.type = "submit";
input_submit.value = "Convertir";
input_submit.id= "boton"
div_button.appendChild(input_submit);

function handleEvent(e) {
    e.preventDefault();
    const numero_pesos = document.getElementById('numero_pesos').value;
    let conversion = (numero_pesos * 1) / 16;
    const dolares = document.createElement('p');
    dolares.id="dolar"
    dolares.innerHTML = `Dolares: ${conversion}`
    document.body.appendChild(dolares);
}

input_submit.addEventListener('click', handleEvent, false);