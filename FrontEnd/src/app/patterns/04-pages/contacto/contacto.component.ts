import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  BanerFirstTab = {
    title: 'Contáctanos',
    class1: 'white-bold-font mt-4',
    title2:
      'Estamos disponibles para brindarte el mejor servicio y ayudarte a solucionar todas tus inquietudes',
    class2: 'white text-info',
    dataTitle2: '',
    additionalTittle: '',
    additionalData: '',
  };
  imgFirstTab = {
    class: 'img-banner',
    src: 'https://via.placeholder.com/350',
    target: '_blank',
    targetURL: '',
    altT: '',
    heightInput: '',
    widthInput: '',
  };

  imgSrc: string = 'https://via.placeholder.com/350';
  altText: string = '';
  heightI: string = '';
  widthI: string = '';
  class: string = 'img-banner';

  dataHeader = {
    classTitle: 'blue negrilla',
    class1: 'text-center',
    title: 'Nuestros Canales',
  };

  cardsContactos = [
    {
      line: 'v-line',
      title1: 'Presencial',
      text: 'Dirección: Cl 37A #19c 26b. Jordan Paraiso',
      text2: 'Dirección: Cl 37A #19c 26b. Jordan Paraiso',
    },
    {
      line: 'v-line',
      title1: 'Telefóno',
      text: 'Telefóno: 312123233',
      text2: 'Telefóno: 98366256',
    },
    {
      line: '',
      title1: 'Correo',
      text: 'Correo: vivavo@alcadia.com',
      text2: 'Correo: matox@softare.com',
    },
  ];

  Correo = {
    title: 'Envianos un correo',
    class1: 'blue-bold',
    title2:
      'Ponemos a tu dispocición este formulario para que puedas cominicarte con nosotros y nos permitas ayudate con tus dudas o necesidades',
    selector: 'not',
  };

  Recursos = {
    title: 'Recursos PQRS',
    class1: 'blue-bold',
    title2:
      'La Alcaldia municipal de villavicencio pone a tu disposición un canal para que registres tus peticiones, quejas, reclamos y sugerencias.',
  };
}
