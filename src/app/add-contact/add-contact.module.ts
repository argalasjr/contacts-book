import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild( [
      { path: 'add', component: AddContactComponent }
     ])
  ],
  exports: [
    AddContactComponent
  ]
})
export class AddContactModule { }
