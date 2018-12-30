import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent }   from './dashboard/default/default.component';
import { CustomComponent }   from './dashboard/custom/custom.component';


const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  { path: 'custom', component: CustomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
