import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsBookComponent } from './contacts-book/contacts-book.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      children: [
    {
      path: '',
      component: ContactsBookComponent
    },
    {
      path: 'detail',
      loadChildren: () => import('./detail-contact/detail-contact.module').then(m => m.DetailContactModule)
    },
    {
      path: 'add',
      loadChildren: () => import('./add-contact/add-contact.module').then(m => m.AddContactModule)
    },
    {
      path: '**',
      redirectTo: '',
      component: ContactsBookComponent
    }
  ]
  }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
