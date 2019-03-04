import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import {AnimalsComponent} from './animals/animals.component';
import { FormUseComponent } from './form-use/form-use.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',
    component: AboutComponent
  },
  {
    path: 'randomText',
    component: AnimalsComponent
  },
  {
    path: 'sampleform',
    component: FormUseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
