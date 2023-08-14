import { NgModule } from '@angular/core';

//imports atomic components
import { LabelData } from './atoms.component';
import { LinkData } from './atoms.component';
import { ImageData } from './atoms.component';
import { ButtonInfo } from './atoms.component';
import { InputComponent } from './atoms.component';
import { textareaComponent } from './atoms.component';
import { inputCheck } from './atoms.component';

@NgModule({
  declarations: [  
    LabelData,
    LinkData,
    ImageData,
    ButtonInfo,
    InputComponent,
    textareaComponent,
    inputCheck
  ],
  imports: [
  ],
  exports: [
    LabelData,   
    LinkData,
    ImageData,
    ButtonInfo,
    InputComponent,
    textareaComponent,
    inputCheck
  ],
  entryComponents: [
    LabelData,
    LinkData,
    ImageData,
    ButtonInfo,
    InputComponent,
    textareaComponent,
    inputCheck,
   
  ]

})
export class AtomsModule { }
