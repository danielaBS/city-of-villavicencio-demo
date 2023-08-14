import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  inputComponent=[
    {label: "Nombre", inputType: "text", inputId:"FirstName", inputClass:"form-control", inputPHolder:""},
    {label: "Apellido", inputType: "text", inputId:"LastName", inputClass:"form-control", inputPHolder:""},
    {label: "Correo electrico", inputType: "text", inputId:"email", inputClass:"form-control", inputPHolder:""}
  ]
  
  textareaComponent={ label:"Descripción", TAClass: "form-control", TArows:"8"}
  
  inputCheck={label:"Acepto terminos y condiciones", ICheckClass:"form-check-input", ICheckType:"checkbox", ICheckValue:" ", ICheckId:"flexCheckDefault"}

  infoButt={buttClass:"btn-form btn-primary back", buttType:"submit", buttValue:"Enviar"}

}
