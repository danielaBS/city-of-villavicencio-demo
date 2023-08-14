import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  imgInfoV = {
    src: '../../../../assets/images/Btn_Alcaldia.png',
    target: '_blank',
    targetURL: '',
    altT: 'Logo',
    heightInput: '',
    widthInput: '200px',
  };

  iconList = [
    {
      src: '../../../../assets/images/iconos/footer_4.svg',
      target: '_blank',
      targetURL: '',
      altT: 'facebook icon',
      heightInput: '',
      widthInput: '36px',
      class: 'svg-icon',
    },
    {
      src: '../../../../assets/images/iconos/footer_5.svg',
      target: '_blank',
      targetURL: '',
      altT: 'twitter icon',
      heightInput: '',
      widthInput: '36px',
      class: 'svg-icon',
    },
    {
      src: '../../../../assets/images/iconos/footer_6.svg',
      target: '_blank',
      targetURL: '',
      altT: 'instagram icon',
      heightInput: '',
      widthInput: '36px',
      class: 'svg-icon',
    },
  ];
  ccIcons = [
    {
      src: '../../../../assets/images/iconos/footer_1.svg',
      target: '_blank',
      targetURL: '',
      altT: 'facebook icon',
      heightInput: '',
      widthInput: '32px',
      class: 'svg-icon',
    },
    {
      src: '../../../../assets/images/iconos/footer_2.svg',
      target: '_blank',
      targetURL: '',
      altT: 'twitter icon',
      heightInput: '',
      widthInput: '32px',
      class: 'svg-icon',
    },
    {
      src: '../../../../assets/images/iconos/footer_3.svg',
      target: '_blank',
      targetURL: '',
      altT: 'instagram icon',
      heightInput: '',
      widthInput: '32px',
      class: 'svg-icon',
    },
  ];

  linksData = [
    [
      {
        title: 'Sede Paraíso',
        class1: 'blue-bold',
        title2: 'Dirección:',
        class2: 'negrilla',
        dataTitle2: 'Secretaría de Movilidad',
        additionalTittle: 'Horarios de atención',
        additionalData: 'Luneas ',
      },
      {
        title: 'Sede Viva',
        class1: 'blue-bold',
        title2: 'Dirección:',
        class2: 'negrilla',
        dataTitle2: 'Secretaría de Movilidad',
        additionalTittle: 'Horarios de atención',
        additionalData: 'Luneas ',
      },
    ],
    [
      {
        title: 'Contáctanos',
        class1: 'blue-bold',
        title2: 'Correo electrónico:',
        class2: 'negrilla',
        dataTitle2: 'movilidad@villavicencio.gov.co',
        additionalTittle: 'Teléfono',
        additionalData: '3176455252',
      },
      {
        title: 'Recepción documentos para entrega de vehículos',
        class1: 'blue-bold',
        title2: 'Horarios de atención:',
        class2: 'negrilla',
        dataTitle2: 'lunes a viernes',
        additionalTittle: '',
        additionalData: '',
      },
    ],
  ];
}
