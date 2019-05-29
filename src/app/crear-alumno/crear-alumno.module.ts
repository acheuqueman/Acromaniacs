import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearAlumnoPage } from './crear-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAlumnoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearAlumnoPage]
})
export class CrearAlumnoPageModule {}
