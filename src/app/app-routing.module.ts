import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsBookComponent } from './contacts-book/contacts-book.component';
import { ContactsBookModule } from './contacts-book/contacts-book.module';


const routes: Routes = [];

@NgModule({
  imports: [
    ContactsBookModule,
    RouterModule.forRoot([
    {
      path: '',
      component: ContactsBookComponent
    },
    {
      path: '**',
      redirectTo: '',
      component: ContactsBookComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
