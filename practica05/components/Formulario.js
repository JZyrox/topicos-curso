import CustomInput from './custom-input';

export default function Formulario() {
  const form = document.createElement('form');
  form.classList = 'formulario';

  const inputs = [
    {
      titleLabel: 'Nombre Paciente',
      placeholderLabel: 'Escribe el nombre del paciente',
    },
    {
      titleLabel: 'Teléfono del Paciente',
      placeholderLabel: 'Teléfono',
    },
    {
      titleLabel: 'Correo Electrónico',
      placeholderLabel: 'Correo Electrónico',
    },
    {
      titleLabel: 'Síntomas',
      placeholderLabel: 'Síntomas',
    },
    
  ];
 
  inputs.forEach((input) => {
    form.appendChild(CustomInput(input));
  });
  
  const buttonDiv = document.createElement('div')
  buttonDiv.classList = 'botonDiv'
  form.appendChild(buttonDiv)

  const buttonForm = document.createElement('button')
  buttonForm.textContent = 'Enviar'
  buttonForm.classList = 'botonsito';
  buttonDiv.appendChild(buttonForm)
 

  return form;
}
