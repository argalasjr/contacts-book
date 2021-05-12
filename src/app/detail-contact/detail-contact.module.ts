import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailContactComponent } from './detail-contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DetailContactComponent],
  imports: [    
    CommonModule,
  ],
  exports: [
    DetailContactComponent
  ]
})
export class DetailContactModule { }
