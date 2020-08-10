import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcmaIndexComponent} from './ecma-index/ecma-index.component';


const routes: Routes = [
  {
    path:'',
    component:EcmaIndexComponent
  },
  {
    path:'ecma',
    component:EcmaIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
