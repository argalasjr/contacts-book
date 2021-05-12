import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddContactComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AddContactComponent
  ]
})
export class AddContactModule { }
